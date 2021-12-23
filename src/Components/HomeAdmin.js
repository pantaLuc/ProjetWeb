import React ,{useState} from 'react'
import { MdGroups } from 'react-icons/md';
import { MdDeleteForever } from 'react-icons/md';
import RessourcesResp from './RessourcesResp';
import Search from './Search';
import { MdPersonAdd } from 'react-icons/md';
import AddUser from './AddUser'
import axios from 'axios'


export default function Home(props){
    
    const [showAdd, setShowAdd] = useState(false);
    const handleCloseAdd = () => setShowAdd(false);
    const rowEventsAdd = () => { setShowAdd(true); }
    const [Showlistressources, setShowlistressources] = useState(false);
    const handleCloselist = () => setShowlistressources(false);
    const rowEventslist = () => { setShowlistressources(true); }
    const [searchField, setsearchField] = useState('');
    const [ListeRespo, setListeRespo] = useState(
                                        [{
                                            Identifiant:'id1',
                                            nom:'elaidi',
                                            prenom:'ichraq',
                                            nbrAnomali:2,
                                            service:'Info'  
                                        },
                                        {
                                            Identifiant:'id2',
                                            nom:'panta',
                                            prenom:'luc',
                                            nbrAnomali:1,
                                            service:'chimie'  
                                        },
                                        {
                                            Identifiant:'id3',
                                            nom:'jerr',
                                            prenom:'safae',
                                            nbrAnomali:5,
                                            service:'physique'  
                                        },
                                    ]);
        const filtreedRespo=ListeRespo.filter(respo=>(
            respo.Identifiant.toLowerCase().includes(searchField.toLowerCase())
                ||
            respo.nom.toLowerCase().includes(searchField.toLowerCase())
                ||
            respo.prenom.toLowerCase().includes(searchField.toLowerCase())
                ||
            respo.service.toLowerCase().includes(searchField.toLowerCase())
        ));
                                    
        return (
            <div className="container">
                <h1 style={{textAlign:"center"}}><MdGroups/> Les responsables de maintenance :</h1>
                <Search placeholder='Chercher par : Identifiant / Nom / Prénom / Service' handleChange={(e)=>setsearchField(e.target.value)}/>
                <table class="table table-hover" >
                    <thead>
                        <tr>
                        <th scope="col">
                            <button type="button" className="btn btn-outline-success"  onClick={rowEventsAdd}> <MdPersonAdd/>  </button>

                             Identifiant</th>
                        <th scope="col">Nom</th>
                        <th scope="col">Prénom</th>
                        <th scope="col">Service</th>
                        <th scope="col">Nombre d'Anomalie</th>
                        <th scope="col">Supprimer</th>
                        
                        </tr>
                    </thead>
                    <tbody>
                    {filtreedRespo.length > 0
                                        ? filtreedRespo.map((respo) => {
                                            
                        return(<tr class="table-info">
                            {console.log(respo)}
                            <th scope="row"><a href='#' onClick={rowEventslist}>{respo.Identifiant}</a></th>
                            <td>{respo.nom}</td>
                            <td>{respo.prenom}</td>
                            <td>{respo.service}</td>
                            <td>{respo.nbrAnomali}</td>
                            <td style={{color:"red"}}><MdDeleteForever/></td>
                        </tr>);
                        })
                        : (<tr><td colSpan={5} className="text-center">Pas de Responsable de Maintenance !</td></tr>)
                    }
                        
                    </tbody>
                    </table>
                    <AddUser rowEventsAdd={showAdd} handleClose={handleCloseAdd} />
                    <RessourcesResp rowEventslist={Showlistressources} handleClose={handleCloselist}/>

            </div>
        )
}
