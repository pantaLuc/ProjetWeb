import React,{useState}  from 'react'
import { Modal, Button } from 'react-bootstrap';
import axios from 'axios';

export default function AddLocalisation(props) {
    const [code, setcode] = useState("");
    const [libelle, setlibelle] = useState("");
    const [description, setdescription] = useState("");
    const handleSubmit = (values) => {
        values.preventDefault();
        const localisation = {
            code: code,
            libelle: libelle,
            description: description
        };
        console.log(localisation);
        axios({
            method: "POST",
            url: "https://gest-maintance-univ-rouen.herokuapp.com/api/ressources/localisation",
            data: JSON.stringify(localisation),
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            }
        }).then(res => {
            console.log(res)
            props.handleClose();
            });
    };
        return (
            <Modal show={props.rowEventsAddLocal} onHide={props.handleClose}  >
                <Modal.Header closeButton>
                    <Modal.Title>Ajouter une Localisation</Modal.Title>
                </Modal.Header>
                <form onSubmit={handleSubmit}>
                <Modal.Body>
                    <div>
                        <div className="form-group">
                                <label for="code" className="form-label mt-2">Code de la localisation :</label>
                                <input type="text" className="form-control" id="code"  placeholder="Exemple: U2.2.40"
                                        onChange={(event) => { setcode(event.target.value) }}required/>
                        </div>
                        <div className="form-group">
                                <label for="libelle" className="form-label mt-2">Libelle :</label>
                                <input type="text" className="form-control" id="libelle"  placeholder="Exemple: Salle de Co-Working"
                                    onChange={(event) => { setlibelle(event.target.value) }}required/>
                        </div>
                        <div className="form-group">
                            <label for="descripton" className="form-label">Description du Lieu :</label>
                            <textarea className="form-control" id="descripton" rows="3"placeholder='Une petite description de la localisation..'
                                onChange={(event) => { setdescription(event.target.value) }}></textarea>
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


