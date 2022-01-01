import React, { useEffect, useState } from 'react'
import axios
 from 'axios';
export default function LocalisationRessource(props) {
    const [localisation, setlocalisation] = useState(0);
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/api/ressources/localisation/${props.idLocalisationA}`)
        .then((res) => {
            setlocalisation(res.data);
        });
    }, [])
        return (
            <div>{localisation.code} : {localisation.libelle} </div>
        )
}
