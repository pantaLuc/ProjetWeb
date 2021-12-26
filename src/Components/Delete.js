import React ,{ useEffect, useState} from 'react'
import { Modal, Button } from 'react-bootstrap';
import axios from'axios'

export default function Delete(props) {
    const [localisation, setlocalisation] = useState({});
    const [service, setservice] = useState({});
    const [ressource, setressource] = useState({});

    const deleteObject = () =>{
        
        {props.id && props.type === 'localisation' && 
        axios.delete(`https://gest-maintance-univ-rouen.herokuapp.com/api/ressources/localisation/${props.id}`)
        .then((res) => {
            props.handleClose();
        });
        }
        {props.id && props.type === 'service' && 
        axios.delete(`https://gest-maintance-univ-rouen.herokuapp.com/api/ressources/service/${props.id}`)
        .then((res) => {
            props.handleClose();
        });
        }
        {props.id && props.type === 'ressource' && 
        axios.delete(`https://gest-maintance-univ-rouen.herokuapp.com/api/ressources/ressource/${props.id}`)
        .then((res) => {
            props.handleClose();
        });
        }
    }
    useEffect(() => {
        console.log(props.id)
        {props.id && props.type === 'localisation' && 
        axios.get(`https://gest-maintance-univ-rouen.herokuapp.com/api/ressources/localisation/${props.id}`)
        .then((res) => {
            setlocalisation(res.data);
        });
        }
        {props.id && props.type === 'service' && 
        axios.get(`https://gest-maintance-univ-rouen.herokuapp.com/api/ressources/service/${props.id}`)
        .then((res) => {
            setservice(res.data);
        });
        }
        {props.id && props.type === 'ressource' && 
        axios.get(`https://gest-maintance-univ-rouen.herokuapp.com/api/ressources/ressource/${props.id}`)
        .then((res) => {
            setressource(res.data);
        });
        }

    }, [props.type,props.id])
     
    return (
        <Modal show={props.rowEventsDelete} onHide={props.handleClose} >
            <Modal.Header closeButton>
                <Modal.Title>
                    Supprimer
                    {props.type === 'localisation' && ' la localisation'}
                    {props.type === 'service' && ' le service'}
                    {props.type === 'ressource' && ' la ressource'}
                    </Modal.Title>
            </Modal.Header>
            <form onSubmit={deleteObject}>
            <Modal.Body>
            <div> 
                <p>Voulez vous vraiment supprimer <strong>'
                    {props.type === 'localisation' && localisation.libelle}
                    {props.type === 'service' && service.nomServ}
                    {props.type === 'ressource' && ressource.nomRessource}
                    '</strong> ?</p>
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


