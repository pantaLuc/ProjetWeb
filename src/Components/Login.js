import React, { useState } from 'react'//useEffect
import axios from 'axios';
import { BsFileEarmarkLock } from 'react-icons/bs';
import PropTypes from 'prop-types';
import Home from './Home';

async function loginUser(credentials,props) {
    
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

   
export default function Login({ setToken },props) {
    const [roleuser, setroleuser ] = useState('guest');

    const [token, settoken] = useState("");
    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");
   
    const handleSubmitLogin = async (values) => {
        values.preventDefault();
        const token = await loginUser({
            username: username,
            password: password
          },props);
          setToken(token);
       /* const login = {
            username: username,
            password: password
        };
        console.log(login);
        await axios({
            method: "POST",
            url: `https://gest-maintance-univ-rouen.herokuapp.com/api/users/login/`,
            data: JSON.stringify(login),
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
                
            }
        }).then(res => {
            console .log(res)
            settoken(JSON.stringify(res.data.token));
            localStorage.setItem('token', JSON.stringify(res.data.token));
            setusername(""); setpassword("");
        });
        await console.log("tokon="+localStorage.getItem('token'))*/
    };

    return (
        <div className="container">
                  <h1 style={{textAlign:"center"}}><BsFileEarmarkLock/> AUTHENTIFIEZ-VOUS</h1>
            <div style={{width:'40%'}}  className="container alert alert-dismissible alert-secondary">
            <form onSubmit={handleSubmitLogin}>
            <div class="form-group">
                <label for="id" class="form-label mt-2">Identifiant :</label>
                <input type="text" class="form-control" id="id" placeholder="ABC123" onChange={e => setusername(e.target.value)}required/>
            </div>
            <div class="form-group">
                <label for="password" class="form-label mt-2">Mot de passe :</label>
                <input type="password" class="form-control" id="password" placeholder="votre mot de passe" onChange={e => setpassword(e.target.value)}required/>
            </div>
            <button className="btn btn-dark" type="submit" >Se Connecter</button>
        </form>
            </div>      
    </div>
    )
}
Login.propTypes = {
    setToken: PropTypes.func.isRequired
  }