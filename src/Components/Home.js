import React, { Component } from 'react'
import { MdGroups } from 'react-icons/md';
import { MdDeleteForever } from 'react-icons/md';
import Search from './Search';

export default function Home(props){
        return (
            <div className="container">
                <h1 style={{textAlign:"center"}}><MdGroups/> Les responsables de maintenance :</h1>
                <Search placeholder='Identifiant/Nom/Prénom/Service'/>
                <table class="table table-hover">
                    <thead>
                        <tr>
                        <th scope="col">Identifiant</th>
                        <th scope="col">Nom</th>
                        <th scope="col">Prénom</th>
                        <th scope="col">Service</th>
                        <th scope="col">Supprimer 
                        <button type="button" className="btn btn-outline-success">Ajouter</button></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="table-info">
                            <th scope="row">Info</th>
                            <td>Column content</td>
                            <td>Column content</td>
                            <td>Column content</td>
                            <td style={{color:"red"}}><MdDeleteForever/></td>
                        </tr>
                        <tr class="table-info">
                            <th scope="row">Info</th>
                            <td>Column content</td>
                            <td>Column content</td>
                            <td>Column content</td>
                            <td style={{color:"red"}}><MdDeleteForever/></td>
                        </tr>
                        <tr class="table-info">
                            <th scope="row">Info</th>
                            <td>Column content</td>
                            <td>Column content</td>
                            <td>Column content</td>
                            <td style={{color:"red"}}><MdDeleteForever/></td>
                        </tr>
                        
                    </tbody>
                    </table>
            </div>
        )
}
