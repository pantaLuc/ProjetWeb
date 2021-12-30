
import React ,{ useEffect, useState } from 'react'
import { Modal, Button } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion'
import axios from 'axios';

export default function RessourcesResp(props) {
    const [listRessource, setlistRessource] = useState([])
    useEffect(() => {
        {props.idRrespo &&
        axios.get(`https://gest-maintance-univ-rouen.herokuapp.com/api/ressources/responsable/ressources/${props.idRrespo}`)
        .then((res) => {
            console.log(res.data)
            setlistRessource(res.data);
        });}
    }, [props.idRrespo])
        return (
            <Modal show={props.rowEventslist} onHide={props.handleClose}  >
                <Modal.Header closeButton>
                    <Modal.Title>Listes resources</Modal.Title>
                </Modal.Header>
                <form >
                <Modal.Body>
                    <div>
                    <Accordion>
                    {listRessource.length > 0
                                        ? listRessource.map((ressource) => {
                                            
                        return(
                        <Accordion.Item eventKey={listRessource.findIndex(item => item.id === ressource.id)}>
                            <Accordion.Header>{ressource.nomRessource}</Accordion.Header>
                            <Accordion.Body>{ressource.descriptionRes}</Accordion.Body>
                        </Accordion.Item>
                        )}):
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Pas de ressource</Accordion.Header>
                            <Accordion.Body>Il n'y a pas de ressource.</Accordion.Body>
                        </Accordion.Item>}
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
