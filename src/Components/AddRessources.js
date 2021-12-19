import React  from 'react'
import { Modal, Button } from 'react-bootstrap';

export default function AddRessources(props) {
        return (
            <Modal show={props.rowEventsAddRessource} onHide={props.handleClose}  >
                <Modal.Header closeButton>
                    <Modal.Title>Ajouter une Ressource</Modal.Title>
                </Modal.Header>
                <form >
                <Modal.Body>
                    <div>
                        <div class=" row form-group">
                            <div class="col-sm">
                                <label for="Code" class="form-label mt-2">Code :</label>
                                <input type="text" class="form-control" id="Code"placeholder="XA123"/>
                                <small class="form-text text-muted">Chaque ressource a un code unique !</small>
                            </div>
                            <div class="col-sm">
                                <label for="nom" class="form-label mt-2">Nom :</label>
                                <input type="text" class="form-control" id="nom"  placeholder="Nom"/>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="exampleTextarea" class="form-label">Description de la ressource :</label>
                            <textarea class="form-control" id="exampleTextarea" rows="3"placeholder='Une petite description de votre ressource..'></textarea>
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

