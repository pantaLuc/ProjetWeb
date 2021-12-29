import React, { Component, useEffect, useState } from 'react'
import Header from './Header'
import { MdHandyman } from 'react-icons/md';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import QRCode from "react-qr-code";
import SignalerAnomalie from './SignalerAnomalie';
import CardAnomalie from './CardAnomalie';

export default function Ressource(props) {
    const {id, nom, localisation} = useParams();
    const [listeAnomalie, setListeAnomalie] = useState([]);
    const [show, setShow] = useState(false);
    const [showTest, setShowTest] = useState(true);
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
    const [localisationR, setlocalisationR] = useState(
        {id: "",
        code: " ",
        libelle: "",
        description: ""
        }
    )
    useEffect(() => {
        {ressource.id === "" && 
        axios.get(`https://gest-maintance-univ-rouen.herokuapp.com/api/ressources/ressource/${id}`)
        .then((res) => {
            setressource(res.data);
          });
        }
        
        {localisationR.id ==="" &&
            axios.get(`https://gest-maintance-univ-rouen.herokuapp.com/api/ressources/localisation/${localisation}`)
            .then((res) => {
                setlocalisationR(res.data)
            });
        }
        { ressource.id !="" &&
        axios.get(`https://gest-maintance-univ-rouen.herokuapp.com/api/ressources/listeAnomalieParRessource/${ressource.id}`)
        .then((res) => {
        setListeAnomalie(res.data)});}
        
        
    }, [show,ressource.id])
    
    return (
        <div >
            <Header/>
        <div className='container'>
            <h1 style={{textAlign:"center"}}><MdHandyman/> La ressource '{nom}' :</h1>
           <div className="card mb-3">
            <h3 className="card-header">Le nom de la ressource : {nom}</h3>
            <div className="card-body">
                <h5 className="card-title">{localisationR.libelle} : {localisationR.code}</h5>
                <h6 className="card-title">{ressource.descriptionRes}</h6>
            </div>
            <div className="card-body">
                <QRCode value={`http://projet-web-two.vercel.app/Ressource/${nom}/${localisation}/${id}`} />
            </div>
            <div className="card-body">
                <p className="card-text">Liste des anomalies</p>
            </div>
            

            <ul className="list-group list-group-flush">
                {listeAnomalie.length > 0
                        ? listeAnomalie.map((anomalie) => {
                             return <> 
                             <CardAnomalie anomalie={anomalie}/></>
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
        <SignalerAnomalie rowEvents={show} handleClose={handleClose} idLocalisation={localisationR.id} idRessource={ressource.id}/>

        </div>
    )  
}
