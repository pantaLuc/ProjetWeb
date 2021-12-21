import React, { Component } from 'react'
import { BiQrScan } from 'react-icons/bi';
import QRCode from "react-qr-code";

export default class RessourceQrCode extends Component {
    render() {
        return (
        <div class="container card mb-3">
            <h3 class="card-header"><BiQrScan/> Flachez-moi</h3>
            <div class="card-body">
                <h5 class="card-title">Ressource XXX</h5>
                <h6 class="card-subtitle text-muted">http://www</h6>
            </div>
            <div class="card-body">
                <QRCode value="https://www.google.com" />
            </div>
            <div class="card-body">
                <p class="card-text">Description de la ressource .</p>
            </div>
            
            <div class="card-footer text-muted">
                21/12/2021
            </div>
        </div>
        )
    }
}
