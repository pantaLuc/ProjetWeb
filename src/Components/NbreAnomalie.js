import React, { useEffect, useState } from 'react'
import axios
 from 'axios';
export default function NbreAnomalie(props) {
    const [nombreAnomalie, setnombreAnomalie] = useState(0);
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/api/ressources/listeAnomalieParRessource/${props.idRessourceA}`)
        .then((res) => {
                    setnombreAnomalie(res.data.length);
                
            
        });
    }, [])
        return (
            <div>{nombreAnomalie?nombreAnomalie:0} </div>
        )
}
