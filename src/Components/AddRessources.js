import React ,{ useState, useEffect} from 'react'
import { Modal, Button } from 'react-bootstrap';
import axios from'axios'

export default function AddRessources(props) {
    const [nom, setNom] = useState()
    const [location, setLocation] = useState()
    const [description, setDescription] = useState()
    const [listeLocalisation, setListeLocalisation] = useState([])
    const imprimerPage = () => { window.print();}
    useEffect(() => {
        axios.get(`https://gest-maintance-univ-rouen.herokuapp.com/api/ressources/lisLocalisation/`)
                    .then((res) => {
                        console.log(res.data)
                        setListeLocalisation(res.data);
            });
    }, [props.rowEventsAddRessource])
    const handleSubmit = (values) => {
        values.preventDefault();
        const ressource = {
            nomRessource: nom,
            descriptionRes: description,
            localisation: location,
            responsable: localStorage.getItem('id')
        };
        console.log(JSON.stringify(ressource));
        axios({
            method: "POST",
            url: "https://gest-maintance-univ-rouen.herokuapp.com/api/ressources/ressource",
            data: JSON.stringify(ressource),
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            }
        }).then(res => {
            console.log(res)
            props.handleClose();
            });
        
        
    };
        return (
            <Modal show={props.rowEventsAddRessource} onHide={props.handleClose}  >
                <Modal.Header closeButton>
                    <Modal.Title>Ajouter une Ressource</Modal.Title>
                </Modal.Header>
                <form onSubmit={handleSubmit} >
                <Modal.Body>
                    <div>
                        <div class="form-group">
                                <label for="nom" class="form-label">Nom :</label>
                                <input type="text" class="form-control" id="nom"  placeholder="Nom" onChange={(event) => { setNom(event.target.value) }}/>
                        </div>
                        <div className="form-group">
                        <label for="select" className="form-label">Localisation :</label>
                        <select className="form-select" id="select" onChange={(event) => { setLocation(event.target.value) }}required>
                            {listeLocalisation.length > 0
                            ? listeLocalisation.map((local) => {
                                return <option value={local.id}>{local.code} : {local.libelle} </option>
                                
                                })
                                : <option disabled>Veuillez demander à l'admin d'ajouter la localisation!</option>
                            }
                        </select>
                        </div>
                        <div class="form-group">
                            <label for="exampleTextarea" class="form-label">Description de la ressource :</label>
                            <textarea class="form-control" id="exampleTextarea" rows="3"placeholder='Une petite description de votre ressource..' onChange={(event) => { setDescription(event.target.value) }}></textarea>
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
