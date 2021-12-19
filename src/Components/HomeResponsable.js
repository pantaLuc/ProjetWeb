
import React ,{useState} from 'react'
import { MdGroups } from 'react-icons/md';
import { MdDeleteForever } from 'react-icons/md';
import RessourcesResp from './RessourcesResp';
import Search from './Search';
import { BiListPlus } from 'react-icons/bi';
import { MdOutlineModeEditOutline } from 'react-icons/md';
import AddRessources from './AddRessources';
import Delete from './Delete';

export default function Homeressourcensable(props){
    const [showAddRessource, setshowAddRessource] = useState(false);
    const handleCloseAddRessource = () => setshowAddRessource(false);
    const rowEventsAddRessource = () => { setshowAddRessource(true); }

    const [showDeleteRessource, setshowDeleteRessource] = useState(false);
    const handleCloseDeleteRessource = () => setshowDeleteRessource(false);
    const rowEventsDelete = () => { setshowDeleteRessource(true); }
    const [searchField, setsearchField] = useState('');
    const [ListeRessource, setListeRessource] = useState(
        [{
            Identifiant:'id1',
            Code:'RS1',
            Nom:'ressource1',
            Description:"decddd",
            NbreAnomalie:3  
        },
        {
            Identifiant:'id2',
            Code:'RS2',
            Nom:'ressource2',
            Description:"decddd",
            NbreAnomalie:0  
        },
        {
            Identifiant:'id1',
            Code:'RS3',
            Nom:'ressource1',
            Description:"decddd",
            NbreAnomalie:1  
        },
    ]);
    const filtreedRessources=ListeRessource.filter(ressource=>(
        ressource.Code.toLowerCase().includes(searchField.toLowerCase())
            ||
        ressource.Nom.toLowerCase().includes(searchField.toLowerCase())
    ));
        return (
            <div className="container">
                <h1 style={{textAlign:"center"}}>  Mes ressources :</h1>
                <Search placeholder='Chercher par Nom/Code de la ressource' handleChange={(e)=>setsearchField(e.target.value)}/>
                <table class="table table-hover" >
                    <thead>
                        <tr>
                        <th scope="col">
                        <button type="button" className="btn btn-outline-success" onClick={rowEventsAddRessource}> <BiListPlus/>  </button>
                            Code</th>
                        <th scope="col">Nom</th>
                        <th scope="col">Description</th>
                        <th scope="col">Nombre d'anomalie</th>
                        <th scope="col" colSpan={2}>Modifer la ressource</th>
                        
                        </tr>
                    </thead>
                    <tbody>
                    {filtreedRessources.length > 0
                                        ? filtreedRessources.map((ressource) => {
                                            
                        return(<tr class="table-info">
                            <th scope="row">{ressource.Code}</th>
                            <td>{ressource.Nom}</td>
                            <td>{ressource.Description}</td>
                            <td><a href='#' >{ressource.NbreAnomalie}</a></td>
                            <td style={{color:"green"}}><MdOutlineModeEditOutline/></td>
                            <td style={{color:"red"}} onClick={rowEventsDelete}><MdDeleteForever/></td>
                        </tr>);
                        })
                        : (<tr><td colSpan={6} className="text-center">Pas de ressources !</td></tr>)
                    }
                        
                    </tbody>
                    </table>
                    <AddRessources rowEventsAddRessource={showAddRessource} handleClose={handleCloseAddRessource} />
                    <Delete rowEventsDelete={showDeleteRessource} handleClose={handleCloseDeleteRessource}/>
            </div>
        )
}
