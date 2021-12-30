import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { BsFileEarmarkLock } from 'react-icons/bs';
import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom";
import useToken from '../useToken';
import Header from './Header';

async function loginUser(credentials) {
    
    return axios({
        method: "POST",
        url: `https://gest-maintance-univ-rouen.herokuapp.com/api/users/login/`,
        data: JSON.stringify(credentials),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        return (res.data.token)
    });
}

const Login = () => {
    const navigate = useNavigate();
    const [userRole, setUserRole ] = useState('guest');
    const { token, setToken } = useToken();
    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");
    

    const handleSubmitLogin = async (values) => {
        values.preventDefault();
        const token = await loginUser({
            username: username,
            password: password
          });
          setToken(token);
          axios({
            method: "GET",
            url: `https://gest-maintance-univ-rouen.herokuapp.com/api/users/user/`,
            headers: {
                'Content-Type': 'application/json',
                'Authorization':`Token ${token}`
            }
        }).then(res => {
            setUserRole(res.data.role);
            localStorage.setItem('role',res.data.role)
            localStorage.setItem('username',res.data.username)
            localStorage.setItem('id',res.data.id)
            {userRole==='admin'? navigate("/HomeAdmin"): navigate("/HomeRespo")}
        });
    };
    useEffect(() => {
        console.log(userRole)
    if (token || localStorage.getItem('token')) {
        {userRole === 'admin' && navigate("/HomeAdmin")}
        {userRole === 'responsable' && navigate("/HomeRespo")}
    }
      }, [localStorage.getItem('token')]);
    return (
        <div>
                <Header/>
            <div className='container'>
                  <h1 style={{textAlign:"center"}}><BsFileEarmarkLock/> AUTHENTIFIEZ-VOUS</h1>
            <div style={{width:'40%'}}  className="container alert alert-dismissible alert-secondary">
            <form onSubmit={handleSubmitLogin}>
            <div className="form-group">
                <label for="id" className="form-label mt-2">Identifiant :</label>
                <input type="text" className="form-control" id="id" placeholder="ABC123" onChange={e => setusername(e.target.value)}required/>
            </div>
            <div className="form-group">
                <label for="password" className="form-label mt-2">Mot de passe :</label>
                <input type="password" className="form-control" id="password" placeholder="votre mot de passe" onChange={e => setpassword(e.target.value)}required/>
            </div>
            <button className="btn btn-dark" type="submit" >Se Connecter</button>
        </form>
            </div>      
    </div>
    </div>
    )
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}

export default Login;
