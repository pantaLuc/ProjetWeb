import React, { useEffect, useState } from 'react'
import { AiFillAlert } from 'react-icons/ai';
import axios from 'axios';
export default function CardAnomalie (props) {
    const [anomaliInfo, setanomaliInfo] = useState([])
    useEffect(() => {
        axios.get(`https://gest-maintance-univ-rouen.herokuapp.com/api/ressources/anomalie/${props.anomalie.anomalie}`)
        .then((res) => {
            console.log(res.data)
            setanomaliInfo(res.data)
          })
    }, []);
    const resignaler = (a) => {
        const anomalieupdate={
            nombreSignalement : a.nombreSignalement+1,
            etat:'present'
        }
         axios({
            method: "PUT",
            url: `https://gest-maintance-univ-rouen.herokuapp.com/api/ressources/anomalieExistant/${a.id}`,
            data: JSON.stringify(anomalieupdate),
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            }
          }).then(res => {
            console.log(res.data.id);
            window.location.reload(false);
            });
    }
         return (
            <li className="list-group-item">
                             <div className="toast show" role="alert" style={{ width:'100%'}}>
                                <div className="toast-header">
                                    <strong className="me-auto">{anomaliInfo.nomAnomalie} :{props.anomalie.etat}</strong>
                                    <small style={{color:'red'}}>{props.anomalie.nombreSignalement} <AiFillAlert/> 
                                    {props.anomalie.etat != 'En cours de traitement' &&
                                    <button onClick={()=>resignaler(props.anomalie)} type="button" className=" btn btn-outline-danger"> ReSignaler</button>
                                    }
                                    </small>
                                </div>
                                <div className="toast-body">
                                {anomaliInfo.descriptionAnomalie}
                                <div className="progress">
                                    {props.anomalie.etat === 'present'
                                    &&<div style={{ width:'25%'}} className="progress-bar progress-bar-striped progress-bar-animated bg-danger" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" ></div>
                                }
                                    {props.anomalie.etat === 'En cours de traitement'
                                    && <div style={{ width:'50%'}} className="progress-bar progress-bar-striped progress-bar-animated bg-warning" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" ></div>
                                }
                                    {props.anomalie.etat === 'terminé'
                                    && <div style={{ width:'100%'}} className="progress-bar progress-bar-striped progress-bar-animated bg-success" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" ></div>
                                }
                                </div>
                                </div>
                                </div>
                             </li>
        )
 }
