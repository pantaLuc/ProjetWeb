import React, {useState} from 'react'
import { GoLocation } from "react-icons/go";
import { FcSearch } from "react-icons/fc";
import ListeRessourceGuest from './ListeRessourceGuest';
import Header from './Header';

export default function ScanAnomalie(props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const rowEvents = () => { setShow(true); }
        return (
            <div>
                <form>
                <legend><GoLocation color='#ffffff'/> Localiser la ressource</legend>
                <div class="form-group">
                    <label for="formFile" class="form-label mt-4">le QR code de la ressource :</label>
                    <input class="form-control" type="file" id="formFile"/>
                </div>
                <div class="form-group">
                    <label for="LienRessource" class="form-label mt-4">Lien de la ressource :</label>
                    <input class="form-control" type="text" id="LienRessource" placeholder='https://...'/>
                </div>
                <button onClick={rowEvents} type="button" className="container btn btn-lg btn-outline-info"><FcSearch/> Chercher</button>
                </form>
                <ListeRessourceGuest rowEvents={show} handleClose={handleClose} />
            </div>
        )
}
