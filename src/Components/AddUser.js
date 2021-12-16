import React  from 'react'
import { Modal, Button } from 'react-bootstrap';

export default function AddUser(props) {
        return (
            <Modal show={props.rowEventsAdd} onHide={props.handleClose}  >
                <Modal.Header closeButton>
                    <Modal.Title>Ajouter un Responsable de Maintenance</Modal.Title>
                </Modal.Header>
                <form >
                <Modal.Body>
                    <div>
                        <div class="form-group">
                            <label for="id" class="form-label mt-2">Identifiant :</label>
                            <input type="text" class="form-control" id="id" placeholder="ABC123"/>
                            <small class="form-text text-muted">Chaque responsable a un identifiant unique.</small>
                        </div>
                        <div class=" row form-group">
                            <div class="col-sm">
                                <input type="text" class="form-control" id="nom"  placeholder="Nom"/>
                            </div>
                            <div class="col-sm">
                            <input type="text" class="form-control" id="prenom"placeholder="Prénom"/>
                            </div>
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control" id="service" placeholder="Le service du responsable"/>
                            <small class="form-text text-muted">* Le service n'est pas obligatoire.</small>
                        </div>
                        <div class="form-group">
                            <input type="password" class="form-control" id="motdepasse1" placeholder="Mot de passe"/>
                        </div>
                        <div class="form-group">
                            <input type="password" class="form-control" id="motdepasse1" placeholder="Confirmer le Mot de passe"/>
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
