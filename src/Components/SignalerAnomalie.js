
import React , {useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import axios from 'axios';

export default function SignalerAnomalie(props) {
  const [nom, setNom] = useState();
  const [description, setDescription] = useState();
  const [idAnomalie, setidAnomalie] = useState()
  const handleSubmit = (values) => {
    values.preventDefault();
    const anomalie = {
        nomAnomalie: nom,
        descriptionAnomalie: description
    };
    console.log(anomalie);
    axios({
      method: "POST",
      url: `${process.env.REACT_APP_API_URL}/api/ressources/anomalie`,
      data: JSON.stringify(anomalie),
      headers: {
          'Content-Type': 'application/json;charset=utf-8'
      }
    }).then(res => {
      setidAnomalie(res.data.id);
      signalerAnom(res.data.id);
     
      });
  }
  const signalerAnom = (e) =>{
    const anomalieAsignaler={
      localisation: props.idLocalisation,
      ressource:props.idRessource,
      anomalie:e,
      etat: "present",
      nombreSignalement: 1
    };
    console.log( JSON.stringify(anomalieAsignaler))
      axios({
        method: "POST",
        url: `${process.env.REACT_APP_API_URL}/api/ressources/signalerAnomalie/`,
        data: JSON.stringify(anomalieAsignaler),
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        }
      }).then(res => {
        console.log(res.data.id);
        props.handleClose();
        });
  }
  return (
      <div>
           <Modal show={props.rowEvents} onHide={props.handleClose}  >
                <Modal.Header closeButton>
                    <Modal.Title>Créer une nouvelle anomalie</Modal.Title>
                </Modal.Header>
                <form onSubmit={handleSubmit}>
                <Modal.Body>
                  <div>
                    <div className="form-group">
                      <label for="nom" className="form-label">Nom :</label>
                      <input type="text" className="form-control" id="nom"  placeholder="Nom"onChange={(event) => { setNom(event.target.value) }}/>
                    </div>
                    <div className="form-group">
                            <label for="exampleTextarea" className="form-label">Description :</label>
                            <textarea className="form-control" id="exampleTextarea" rows="3"placeholder="Une petite description de l'anomalie.."onChange={(event) => { setDescription(event.target.value) }}></textarea>
                    </div>
                  </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="dark" onClick={props.handleClose}>
                        Fermer
                </Button>
                    <div className="form-group">
                        <button className="btn btn-dark" type="submit" >Signaler</button>
                    </div>
                </Modal.Footer>
                </form>
        </Modal>
        
    </div>
  );
}