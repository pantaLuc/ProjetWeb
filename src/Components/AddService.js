import React,{useState}  from 'react'
import { Modal, Button } from 'react-bootstrap';
import axios from 'axios'
export default function AddService(props) {
    const [nomServ, setnomServ] = useState();
    const [description, setdescription] = useState();
    const handleSubmit = (values) => {
        
        console.log("service");
        
    };
        return (
            <Modal show={props.rowEventsAddService} onHide={props.handleClose}  >
                <Modal.Header closeButton>
                    <Modal.Title>Ajouter un Service</Modal.Title>
                </Modal.Header>
                <form onSubmit={handleSubmit}>
                <Modal.Body>
                    <div>
                        <div class="form-group">
                                <label for="nom" class="form-label mt-2">Nom du Service :</label>
                                <input type="text" class="form-control" id="nom"  placeholder="Nom"onChange={(event) => { setnomServ(event.target.value) }}required/>
                        </div>
                        <div class="form-group">
                            <label for="exampleTextarea" class="form-label">Description du Service :</label>
                            <textarea class="form-control" id="exampleTextarea" rows="3"placeholder='Une petite description du service..'onChange={(event) => { setdescription(event.target.value) }}></textarea>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="dark" onClick={props.handleClose}>
                        Fermer
                </Button>
                    <div className="form-group">
                        <button className="btn btn-dark" type="submit" >Ajouter</button>
                    </div>
                </Modal.Footer>
                </form>
        </Modal>
        )
}

