
import React  from 'react'
import { Modal, Button } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion'

export default function RessourcesResp(props) {
        return (
            <Modal show={props.rowEventslist} onHide={props.handleClose}  >
                <Modal.Header closeButton>
                    <Modal.Title>Listes resources</Modal.Title>
                </Modal.Header>
                <form >
                <Modal.Body>
                    <div>
                    <Accordion>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Ressource #1</Accordion.Header>
                            <Accordion.Body>
                           Description de la ressource1
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Ressource #2</Accordion.Header>
                            <Accordion.Body>
                           Description de la ressource1
                            </Accordion.Body>
                        </Accordion.Item>
                        </Accordion>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="dark" onClick={props.handleClose}>
                        Fermer
                </Button>
                    
                </Modal.Footer>
                </form>
        </Modal>
        )
}
