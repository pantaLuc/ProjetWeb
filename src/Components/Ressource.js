import React, { Component, useEffect, useState } from 'react'
import Header from './Header'
import { MdHandyman } from 'react-icons/md';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import QRCode from "react-qr-code";
import SignalerAnomalie from './SignalerAnomalie';
import CardAnomalie from './CardAnomalie';

export default function Ressource(props) {
    const {id, nom} = useParams();
    const [listeAnomalie, setListeAnomalie] = useState([]);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const rowEvents = () => { setShow(true); }
    const [ressource, setressource] = useState(
        {
        id: "",
        nomRessource: "",
        descriptionRes: "",
        localisation: "",
        responsable: "",
        service: ""
        }
    )
    const [localisation, setlocalisation] = useState(
        {id: "",
        code: " ",
        libelle: "",
        description: ""
        }
    )
    useEffect(() => {
        axios.get(`https://gest-maintance-univ-rouen.herokuapp.com/api/ressources/ressource/${id}`)
        .then((res) => {
            console.log(res.data)
            setressource(res.data)
          })
        .catch(error => {
            console.log(error.response)
        });
        axios.get(`https://gest-maintance-univ-rouen.herokuapp.com/api/ressources/localisation/${id}`)
        .then((res) => {
            console.log(res.data)
            setlocalisation(res.data)
            axios.get(`https://gest-maintance-univ-rouen.herokuapp.com/api/ressources/listeAnomalieLocalisation/${res.data.id}`)
            .then((res) => {
            console.log(res.data)
            setListeAnomalie(res.data)
          });
          });
          
        
    }, [id,nom,handleClose])

    return (
        <div >
            <Header/>
        <div className='container'>
            <h1 style={{textAlign:"center"}}><MdHandyman/> La ressource '{nom}' :</h1>
           <div className="card mb-3">
            <h3 className="card-header">Le nom de la ressource : {nom}</h3>
            <div className="card-body">
                <h5 className="card-title">{localisation.libelle} : {localisation.code}</h5>
                <h6 className="card-title">{ressource.descriptionRes}</h6>
            </div>
            <div className="card-body">
                <QRCode value={`http://localhost:3000/Ressource/${nom}/${id}`} />
            </div>
            <div className="card-body">
                <p className="card-text">Liste des anomalies</p>
            </div>
            <ul className="list-group list-group-flush">
                {listeAnomalie.length > 0
                        ? listeAnomalie.map((anomalie) => {
                             if(anomalie.ressource === ressource.id)
                             return <CardAnomalie anomalie={anomalie}/>
                            })
                            : <li className="list-group-item">Pas d'anomalie pour l'instant</li>
                        }
                
            </ul>
            
            <div className="card-body">
                <a href="#" onClick={rowEvents} className="card-link">Signaler une nouvelle anomalie</a>
            </div>
            <div className="card-footer text-muted">
                Vous ne pouvez pas signaler les anomalies en cours de traitement!
            </div>
            </div>
        </div>
        <SignalerAnomalie rowEvents={show} handleClose={handleClose} idLocalisation={localisation.id} idRessource={ressource.id}/>

        </div>
    )  
}
