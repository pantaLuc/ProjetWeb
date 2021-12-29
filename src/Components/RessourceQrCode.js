import React, { Component } from 'react'
import { BiQrScan } from 'react-icons/bi';
import QRCode from "react-qr-code";

export default class RessourceQrCode extends Component {
    
    render() {
        return (
        <div class="container card mb-3">
            <h3 class="card-header"><BiQrScan/> Flachez-moi</h3>
            <div class="card-body">
                <h5 class="card-title">Ressource : {this.props.ressource.nomRessource}</h5>
                <h6 class="card-subtitle text-muted">{`http://projet-web-two.vercel.app/Ressource/${this.props.ressource.nomRessource}/${this.props.ressource.localisation}/${this.props.ressource.id}`}</h6>
            </div>
            <div class="card-body">
                <QRCode 
                value={`http://projet-web-two.vercel.app/Ressource/${this.props.ressource.nomRessource}/${this.props.ressource.localisation}/${this.props.ressource.id}`} />
            </div>
            <div class="card-body">
                <p class="card-text">{this.props.ressource.descriptionRes}</p>
            </div>
            
            <div class="card-footer text-muted">
            © COPYRIGHT 2021 - TOUS DROITS RÉSERVÉS
            </div>
        </div>
        )
    }
}
