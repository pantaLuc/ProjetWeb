import React ,{useState,useEffect} from 'react'
import { MdGroups } from 'react-icons/md';
import { MdDeleteForever } from 'react-icons/md';
import RessourcesResp from './RessourcesResp';
import Search from './Search';
import { MdPersonAdd } from 'react-icons/md';
import AddUser from './AddUser'
import axios from 'axios'
import Header from './Header';
import { useNavigate } from "react-router-dom";


export default function Home(props){
    const navigate = useNavigate();
    const [idRrespo, setidRrespo] = useState()
    const [showAdd, setShowAdd] = useState(false);
    const handleCloseAdd = () => setShowAdd(false);
    const rowEventsAdd = () => { setShowAdd(true); }
    const [Showlistressources, setShowlistressources] = useState(false);
    const handleCloselist = () => {
        setidRrespo();
        setShowlistressources(false);}
    const rowEventslist = (id) => { 
        setidRrespo(id);
        setShowlistressources(true); }
    const [searchField, setsearchField] = useState('');
    const [ListeRespo, setListeRespo] = useState(
                                        []);
        const filtreedRespo=ListeRespo.filter(respo=>(
            respo.username.toLowerCase().includes(searchField.toLowerCase())
                ||
            respo.first_name.toLowerCase().includes(searchField.toLowerCase())
                ||
            respo.last_name.toLowerCase().includes(searchField.toLowerCase())
                ||
            respo.email.toLowerCase().includes(searchField.toLowerCase())
        ));
        useEffect(() => {
            axios.get(`${process.env.REACT_APP_API_URL}/api/users/listuser`)
                    .then((res) => {
                        setListeRespo(res.data);
            });
            {localStorage.getItem('token')? 
            (localStorage.getItem('role') === 'responsable'&& navigate("/HomeRespo"))
            :navigate("/")}
          }, [showAdd,localStorage.getItem('token')]);                          
        return (
            <div>
                <Header/>
            <div className='container'>
                <h1 style={{textAlign:"center"}}><MdGroups/> Les responsables de maintenance :</h1>
                <Search placeholder='Chercher par : Identifiant / Nom / Prénom / Service' handleChange={(e)=>setsearchField(e.target.value)}/>
                <table className="table table-hover" >
                    <thead>
                        <tr>
                        <th scope="col">
                            <button type="button" className="btn btn-outline-success"  onClick={rowEventsAdd}> <MdPersonAdd/>  </button>

                             Identifiant</th>
                        <th scope="col">Nom</th>
                        <th scope="col">Prénom</th>
                        <th scope="col">Email</th>
                        <th scope="col">Supprimer</th>
                        
                        </tr>
                    </thead>
                    <tbody>
                    {filtreedRespo.length > 0
                                        ? filtreedRespo.map((respo) => {
                                            
                        return(<tr className="table-info">
                            {console.log(respo)}
                            <th scope="row"><a href='#' onClick={()=>rowEventslist(respo.id)}>{respo.username}</a></th>
                            <td>{respo.first_name}</td>
                            <td>{respo.last_name}</td>
                            <td>{respo.email}</td>
                            <td style={{color:"red"}}><MdDeleteForever/></td>
                        </tr>);
                        })
                        : (<tr><td colSpan={5} className="text-center">Pas de Responsable de Maintenance !</td></tr>)
                    }
                        
                    </tbody>
                    </table>
                    <AddUser rowEventsAdd={showAdd} handleClose={handleCloseAdd} />
                    <RessourcesResp rowEventslist={Showlistressources} handleClose={handleCloselist} idRrespo={idRrespo}/>

            </div>
            </div>
        )
}
