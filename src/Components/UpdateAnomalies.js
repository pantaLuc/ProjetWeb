import React, { useEffect, useState }  from 'react'
import { Modal, Button } from 'react-bootstrap';
import { TiDeleteOutline} from 'react-icons/ti';
import { BiTimeFive} from 'react-icons/bi';
import { FaCheckCircle} from 'react-icons/fa';
import { GiSandsOfTime} from 'react-icons/gi';
import axios from 'axios';
import AnomalieInfo from './AnomalieInfo';
import { AiOutlineFieldNumber } from 'react-icons/ai';
import { AiFillAlert } from 'react-icons/ai';
import { GrUpdate } from 'react-icons/gr';

export default function UpdateAnomalies(props) {
    const [updatedata, setupdatedata] = useState(true);
    const [ressource, setressource] = useState();
    const [listeAnomalie, setlisteAnomalie] = useState([])
    useEffect(() => {
        {props.id &&
        axios.get(`https://gest-maintance-univ-rouen.herokuapp.com/api/ressources/ressource/${props.id}`)
                    .then((res) => {
                        console.log(res.data)
                        setressource(res.data);
            });
        }
        {props.id &&
            axios.get(`https://gest-maintance-univ-rouen.herokuapp.com/api/ressources/listeAnomalieParRessource/${props.id}`)
                    .then((res) => {
                        console.log(res.data)
                        setlisteAnomalie(res.data);
            });
        }
    }, [props.id,updatedata]);
    const updateAnomalie = (anomalie,etat) =>{
        setupdatedata(!(updatedata));
        let anomalieupdate={};
        if (etat==='present') {
             anomalieupdate = {nombreSignalement:1,etat:etat};
        } else if (etat==='terminé'){
             anomalieupdate = {nombreSignalement:0,etat:etat};
        }else{
             anomalieupdate = {etat:etat};
        }
        axios({
            method: "PUT",
            url: `https://gest-maintance-univ-rouen.herokuapp.com/api/ressources/anomalieExistant/${anomalie.id}`,
            data: JSON.stringify(anomalieupdate),
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            }
          }).then(res => {
            console.log(res.data.id);
            anomalieupdate={};
            });
    }
        return (
            <Modal show={props.rowEventsUpdateAnomalie} onHide={props.handleClose} >
                <Modal.Header closeButton>
                    <Modal.Title>Modifier l'état des anomalies de la ressource {ressource&&ressource.nomRessource}</Modal.Title>
                </Modal.Header>
                <form >
                <Modal.Body>
                <div> 
                <table class="table table-hover" >
                    <thead>
                        <tr>
                            <th scope="col"><GiSandsOfTime/></th>
                            <th scope="col">Anomalie</th>
                            <th scope="col">Description</th>
                            <th scope="col">Etat</th>
                            <th scope="col"><AiOutlineFieldNumber/><AiFillAlert/></th>
                            <th scope="col"><GrUpdate/></th>
                        </tr>
                    </thead>
                    <tbody>
                    {listeAnomalie.length > 0
                                        ? listeAnomalie.map((anomalie) => {
                                            
                        return(
                            <tr>
                                <td>
                                    {anomalie.etat==='present'&& <TiDeleteOutline color='red'/>}
                                    {anomalie.etat==='En cours de traitement'&& <BiTimeFive color='orange'/>}
                                    {anomalie.etat==='terminé'&& <FaCheckCircle color='green'/>}
                                </td>
                                <td><AnomalieInfo IdAnomalie={anomalie.anomalie} type={'nom'}/></td>
                                <td><AnomalieInfo IdAnomalie={anomalie.anomalie} type={'description'}/></td>
                                <td>{anomalie.etat}</td>
                                <td>{anomalie.nombreSignalement}</td>
                                <td>
                                    {anomalie.etat==='present'&&   
                                        <><a href='#'onClick={()=>updateAnomalie(anomalie,'En cours de traitement')}><BiTimeFive color='orange'/></a>
                                            <a href='#'onClick={()=>updateAnomalie(anomalie,'terminé')}> <FaCheckCircle color='green'/></a>
                                        </>}
                                    {anomalie.etat==='En cours de traitement'&&   
                                        <><a href='#'><TiDeleteOutline color='red'onClick={()=>updateAnomalie(anomalie,'present')}/></a>
                                            <a href='#'onClick={()=>updateAnomalie(anomalie,'terminé')}> <FaCheckCircle color='green'/></a>
                                        </>}
                                    {anomalie.etat==='terminé'&&   
                                        <><a href='#'onClick={()=>updateAnomalie(anomalie,'En cours de traitement')}><BiTimeFive color='orange'/></a>
                                        <a href='#'><TiDeleteOutline color='red'onClick={()=>updateAnomalie(anomalie,'present')}/></a>
                                        </>}
                                </td>
                            </tr>)})
                            :<tr><td colSpan={6}>Vous avez pas d'anomalie</td></tr>}
                        
                    </tbody>
                </table>
                </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="dark" onClick={props.handleClose}>
                        Annuler
                </Button>
                    
                </Modal.Footer>
                </form>
        </Modal>
        )
}


