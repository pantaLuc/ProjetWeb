import React, { Component } from 'react'
import { BiQrScan } from 'react-icons/bi';
import QRCode from "react-qr-code";

export default class RessourceQrCode extends Component {
    
    render() {
        return (
        <div className="container card mb-3">
            <h3 className="card-header"><BiQrScan/> Flachez-moi</h3>
            <div className="card-body">
                <h5 className="card-title">Ressource : {this.props.ressource.nomRessource}</h5>
                <h6 className="card-subtitle text-muted">{`${process.env.REACT_APP_API_FRONT_URL}/Ressource/${this.props.ressource.nomRessource}/${this.props.ressource.localisation}/${this.props.ressource.id}`}</h6>
            </div>
            <div className="card-body">
                <QRCode 
                value={`${process.env.REACT_APP_API_FRONT_URL}/Ressource/${this.props.ressource.nomRessource}/${this.props.ressource.localisation}/${this.props.ressource.id}`} />
            </div>
            <div className="card-body">
                <p className="card-text">{this.props.ressource.descriptionRes}</p>
            </div>
            
            <div className="card-footer text-muted">
            © COPYRIGHT 2021 - TOUS DROITS RÉSERVÉS
            </div>
        </div>
        )
    }
}
