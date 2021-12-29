import React, { useEffect, useState } from 'react'
import axios
 from 'axios';
export default function AnomalieInfo(props) {
    const [anomaliInfo, setanomaliInfo] = useState();
    useEffect(() => {
        {props.IdAnomalie && 
            axios.get(`https://gest-maintance-univ-rouen.herokuapp.com/api/ressources/anomalie/${props.IdAnomalie}`)
                    .then((res) => {
                        console.log(res.data)
                        setanomaliInfo(res.data);
            });
        }
    }, [props.IdAnomalie])
        return (
            <div>
                {anomaliInfo &&
                    (props.type==='nom' ? anomaliInfo.nomAnomalie
                    : anomaliInfo.descriptionAnomalie)
                }
            </div>
        )

}
