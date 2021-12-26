import React, { Component } from 'react'
import Header from './Header'
import { MdHandyman } from 'react-icons/md';

export default function Ressource(params) {
    return (
        <div >
            <Header/>
        <div className='container'>
            <h1 style={{textAlign:"center"}}><MdHandyman/> La ressource :</h1>
           <div className="card mb-3">
            <h3 className="card-header">Le nom de la ressource</h3>
            <div className="card-body">
                <h5 className="card-title">la localisation de la ressource</h5>
                <h6 className="card-title">la description de la ressource.</h6>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" className="d-block user-select-none" width="100%" height="200" aria-label="Placeholder: Image cap" focusable="false" role="img" preserveAspectRatio="xMidYMid slice" viewBox="0 0 318 180" >
                <rect width="100%" height="100%" fill="#868e96"></rect>
                <text x="50%" y="50%" fill="#dee2e6" dy=".3em">QR code</text>
            </svg>
            <div className="card-body">
                <p className="card-text">Liste des anomalies ...</p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">1</li>
                <li className="list-group-item">2n</li>
            </ul>
            <div className="card-body">
                <a href="#" className="card-link">Signaler une nouvelle anomalie</a>
            </div>
            <div className="card-footer text-muted">
                Vous ne pouvez pas signaler les anomalies en cours de traitement!
            </div>
            </div>
        </div>
        </div>
    )  
}
