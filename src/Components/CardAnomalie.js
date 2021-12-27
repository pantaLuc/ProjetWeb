import React, { useEffect, useState } from 'react'
import { AiFillAlert } from 'react-icons/ai';
import axios from 'axios';
export default function CardAnomalie (props) {
    const [anomaliInfo, setanomaliInfo] = useState([])
    useEffect(() => {
        axios.get(`https://gest-maintance-univ-rouen.herokuapp.com/api/ressources/anomalie/${props.anomalie.id}`)
        .then((res) => {
            console.log(res.data)
            setanomaliInfo(res.data)
          })
    }, [props.anomalie])
         return (
            <li className="list-group-item">
                             <div class="toast show" role="alert" style={{ width:'100%'}}>
                                <div class="toast-header">
                                    <strong class="me-auto">{anomaliInfo.nomAnomalie} :{props.anomalie.etat}</strong>
                                    <small style={{color:'red'}}>{props.anomalie.nombreSignalement} <AiFillAlert/></small>
                                    
                                </div>
                                <div class="toast-body">
                                {anomaliInfo.descriptionAnomalie}
                                <div class="progress">
                                    {props.anomalie.etat === 'present'
                                    &&<div style={{ width:'25%'}} class="progress-bar progress-bar-striped progress-bar-animated bg-danger" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" ></div>
                                }
                                    {props.anomalie.etat === 'En cours de traitement'
                                    && <div style={{ width:'50%'}} class="progress-bar progress-bar-striped progress-bar-animated bg-warning" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" ></div>
                                }
                                    {props.anomalie.etat === 'terminé'
                                    && <div style={{ width:'100%'}} class="progress-bar progress-bar-striped progress-bar-animated bg-success" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" ></div>
                                }
                                </div>
                                </div>
                                </div>
                             </li>
        )
 }
