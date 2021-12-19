import React  from 'react'
import { Modal, Button } from 'react-bootstrap';

export default function UpdateRessource(props) {
        return (
            <Modal show={props.rowEventsUpdate} onHide={props.handleClose} >
                <Modal.Header closeButton>
                    <Modal.Title>Modifier la Ressource</Modal.Title>
                </Modal.Header>
                <form >
                <Modal.Body>
                <div> 
                     <legend>Code : XXX</legend>
                        <div class="form-group">
                            <label for="nom" class="form-label">Nom :</label>
                            <input type="text" class="form-control" id="nom"  placeholder="Nom"/>
                        </div>
                        <div class="form-group">
                            <label for="exampleTextarea" class="form-label">Description de la ressource :</label>
                            <textarea class="form-control" id="exampleTextarea" rows="3"placeholder='Une petite description de votre ressource..'></textarea>
                        </div>
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


