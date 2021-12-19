import React  from 'react'
import { Modal, Button } from 'react-bootstrap';
import { TiDeleteOutline} from 'react-icons/ti';
import { BiTimeFive} from 'react-icons/bi';
import { FaCheckCircle} from 'react-icons/fa';
import { GiSandsOfTime} from 'react-icons/gi';


export default function UpdateAnomalies(props) {
        return (
            <Modal show={props.rowEventsUpdateAnomalie} onHide={props.handleClose} >
                <Modal.Header closeButton>
                    <Modal.Title>Modifier l'état des anomalies de la ressource</Modal.Title>
                </Modal.Header>
                <form >
                <Modal.Body>
                <div> 
                <table class="table table-hover" >
                    <thead>
                        <tr>
                            <th scope="col"><GiSandsOfTime/></th>
                            <th scope="col">Anomalie</th>
                            <th scope="col">Date </th>
                            <th scope="col">Descriptin</th>
                            <th scope="col">Etat</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><TiDeleteOutline/></td>
                            <td>Anomalie1</td>
                           <td>19/12/2021</td> 
                           <td>description...</td> 
                            <td>
                                <select multiple="" class="form-select" id="etatAnomalie">
                                    <option selected>Ouverte</option>
                                    <option>En cours de traitement</option>
                                    <option>Fermée</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td><BiTimeFive/></td>
                            <td>Anomalie2</td>
                            <td>10/12/2021</td>
                            <td>description...</td> 
                            <td>
                                <select multiple="" class="form-select" id="etatAnomalie">
                                    <option>Ouverte</option>
                                    <option selected>En cours de traitement</option>
                                    <option >Fermée</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td color='red'><FaCheckCircle/></td>
                            <td>Anomalie2</td>
                            <td>05/12/2021</td>
                           <td>description...</td> 
                            <td>
                                <select multiple="" class="form-select" id="etatAnomalie">
                                    <option>Ouverte</option>
                                    <option>En cours de traitement</option>
                                    <option selected>Fermée</option>
                                </select>
                            </td>
                        </tr>
                            
                    </tbody>
                </table>
                </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="dark" onClick={props.handleClose}>
                        Annuler
                </Button>
                    <div className="form-group">
                        <button className="btn btn-dark" type="submit" >Modifier</button>
                    </div>
                </Modal.Footer>
                </form>
        </Modal>
        )
}


