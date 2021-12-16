import React, { useState} from 'react'
import { GoLocation } from "react-icons/go";
import { FcSearch } from "react-icons/fc";
import ListeRessourceGuest from './ListeRessourceGuest';

export default function FormAnomalie(props){
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const rowEvents = () => { setShow(true); }
        return (
            <div>
                
                <form>  
                <legend><GoLocation color='#ffffff'/> Localiser la ressource</legend>
                    
                    <div className="form-group">
                        <label for="selectlocal" className="form-label mt-2">Selectionner l'emplacement :</label>
                        <select className="form-select" id="selectlocal">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>Autre</option>
                        </select>
                        <small id="selectlocalHelp" className="form-text text-muted">Veuillez selectionner 'Autre' si vous ne trouvez pas votre localisation.</small>
                    </div>
                    <div className="form-group">
                        <label for="selectname" className="form-label mt-2">Selectionner le nom de la ressource :</label>
                        <select className="form-select" id="selectname">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>Autre</option>
                        </select>
                    </div>

                    <button onClick={rowEvents} type="button" className="container btn btn-lg btn-outline-info"><FcSearch/> Chercher</button>
                </form>
                <ListeRessourceGuest rowEvents={show} handleClose={handleClose} />

            </div>
        )
}
