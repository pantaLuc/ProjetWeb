import React  from 'react'
import { Modal, Button } from 'react-bootstrap';

export default function Delete(props) {
        return (
            <Modal show={props.rowEventsDelete} onHide={props.handleClose} >
                <Modal.Header closeButton>
                    <Modal.Title>Supprimer</Modal.Title>
                </Modal.Header>
                <form >
                <Modal.Body>
                <div> 
                    <p>Voulez vous vraiment supprimer?</p>
                </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="dark" onClick={props.handleClose}>
                        Annuler
                </Button>
                    <div className="form-group">
                        <button className="btn btn-dark" type="submit" >Supprimer</button>
                    </div>
                </Modal.Footer>
                </form>
        </Modal>
        )
}


