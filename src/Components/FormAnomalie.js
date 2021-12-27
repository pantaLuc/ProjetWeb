import React, { useState, useEffect} from 'react'
import { GoLocation } from "react-icons/go";
import { FcSearch } from "react-icons/fc";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export default function FormAnomalie(props){
    const navigate = useNavigate();

    const [listeLocalisation, setListeLocalisation] = useState([]);
    const [location, setLocation] = useState();
    const [ressource, setRessource] = useState();
    const [idRessource, setIdRessource] = useState();
    const [listeRessourceLocal, setListeRessourceLocal] = useState([]);
    
    const handleSubmit = () => {
        console.log(ressource.nomRessource);
        console.log(ressource.id);
        navigate(`/Ressource/${ressource.nomRessource}/${ressource.id}`);
    }
    useEffect(() => {
        
        {idRessource && 
        axios.get(`https://gest-maintance-univ-rouen.herokuapp.com/api/ressources/ressource/${idRessource}`)
                    .then((res) => {
                        console.log(res.data)
                        setRessource(res.data);
            });
        }
        console.log(idRessource)
        console.log(ressource)
        axios.get(`https://gest-maintance-univ-rouen.herokuapp.com/api/ressources/lisLocalisation/`)
                    .then((res) => {
                        console.log(res.data)
                        setListeLocalisation(res.data);
            });
            console.log(location)
        {(location && location != 'autre')?
            axios.get(`https://gest-maintance-univ-rouen.herokuapp.com/api/ressources/ressourcesLocalisation/${location}`)
                            .then((res) => {
                                console.log(res.data)
                                setListeRessourceLocal(res.data);
                                setRessource(res.data[0]);
                })
            : axios.get(`https://gest-maintance-univ-rouen.herokuapp.com/api/ressources/listRessource/`)
                            .then((res) => {
                                console.log(res.data)
                                setListeRessourceLocal(res.data);
                               setRessource(res.data[0]);
                })
        }
        
    }, [location,idRessource])
        return (
            <div>
                <form>  
                <legend><GoLocation color='#ffffff'/> Localiser la ressource</legend>
                    
                    <div className="form-group">
                        <label for="selectlocal" className="form-label mt-2">Selectionner l'emplacement :</label>
                        <select className="form-select" id="selectlocal" onChange={(event) => { setLocation(event.target.value) }}required>
                        <option selected value='autre'>Autre</option>
                            {listeLocalisation.length > 0
                            ? listeLocalisation.map((local) => {
                                return <option value={local.id}>{local.code} : {local.libelle} </option>
                                
                                })
                                : <option disabled>Pas de localisation pour le moment!</option>
                            }
                        </select>
                        <small id="selectlocalHelp" className="form-text text-muted">Veuillez selectionner 'Autre' si vous ne trouvez pas votre localisation.</small>
                    </div>
                    <div className="form-group">
                        <label for="selectname" className="form-label mt-2">Selectionner le nom de la ressource :</label>
                        <select className="form-select" id="selectname" onChange={(event) => { setIdRessource(event.target.value) }}required>
                            {listeRessourceLocal.length > 0
                            ? listeRessourceLocal.map((ressource) => {
                                return <option value={ressource.id}>{ressource.nomRessource} </option>
                                
                                })
                                : <option disabled>Pas de ressource pour le moment!</option>
                            }
                        </select>
                    </div>

                    <button onClick={handleSubmit} type="button"className="container btn btn-lg btn-outline-info"><FcSearch/> Chercher</button>
                </form>

            </div>
        )
}
