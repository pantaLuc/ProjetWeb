import React  from 'react'
import { Modal, Button } from 'react-bootstrap';

export default function AddLocalisation(props) {
        return (
            <Modal show={props.rowEventsAddLocal} onHide={props.handleClose}  >
                <Modal.Header closeButton>
                    <Modal.Title>Ajouter une Localisation</Modal.Title>
                </Modal.Header>
                <form >
                <Modal.Body>
                    <div>
                        <div class="form-group">
                                <label for="nom" class="form-label mt-2">Nom du Lieu :</label>
                                <input type="text" class="form-control" id="nom"  placeholder="Nom"/>
                        </div>
                        <div class="form-group">
                            <label for="exampleTextarea" class="form-label">Description du Lieu :</label>
                            <textarea class="form-control" id="exampleTextarea" rows="3"placeholder='Une petite description de la localisation..'></textarea>
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


