import React ,{useState} from 'react';
import { BiCurrentLocation } from 'react-icons/bi';
import { MdDeleteForever ,MdAddLocationAlt} from 'react-icons/md';
import AddLocalisation from './AddLocalisation';
import Search from './Search';
export default function Localisation(props){
    const [showAddLocal, setshowAddLocal] = useState(false);
    const handleCloseAddLocal = () => setshowAddLocal(false);
    const rowEventsAddLocal = () => { setshowAddLocal(true); }

    const [searchField, setsearchField] = useState('');
    const [ListeLocalisation, setListeLocalisation] = useState(
        [{
            libelle:'lieu1',
            code:'19/12/2021',
            description:'55description lieu 1'
        },
        {
            libelle:'lieu112',
            code:'09/12/2021',
            description:'description lieu 2'
        },
        {
            libelle:'lieu133',
            code:'10/12/2021',
            description:'description lieu 3'
        },
        {
            libelle:'lieu253',
            code:'25/12/2021',
            description:'description lieu 4'
        },
       
    ]);
    const filtreedLocalisation=ListeLocalisation.filter(local=>(
        local.code.toLowerCase().includes(searchField.toLowerCase())
            ||
            local.libelle.toLowerCase().includes(searchField.toLowerCase())
            ||
            local.description.toLowerCase().includes(searchField.toLowerCase())
    ));
        return (
            <div className='container'>
                <h1 style={{textAlign:"center"}}><BiCurrentLocation/> Les Localisations :</h1>

                <div className='row'>
                    <div className='col-sm-2'>
                    <button type="button" className="btn btn-outline-success"onClick={rowEventsAddLocal}><MdAddLocationAlt/> Ajouter </button>
                    </div>
                    <div className='col-sm-8'>
                        <Search placeholder='Chercher un service par son libelle /son code /un mot de sa description..'handleChange={(e)=>setsearchField(e.target.value)}/>
                    </div>
                </div>
                <div className='row'>
                {filtreedLocalisation.length > 0
                                        ? filtreedLocalisation.map((local) => {             
                        return(
                        <div className="col-sm-3 toast show" role="alert" aria-live="assertive" aria-atomic="true">
                            <div className="toast-header">
                                <strong className="me-auto">{local.libelle}</strong>
                                <small>{local.code}</small>
                                <button type="button" class="btn ms-2 mb-1">
                                    <a href="#" class="card-link" style={{color:"red"}}> <MdDeleteForever/></a>
                                </button>
                            </div>
                            <div className="toast-body">
                                {local.description}
                            </div>
                        </div>);
                })
                : 
                <div className="container toast show" role="alert" aria-live="assertive" aria-atomic="true">
                    <div className="toast-header">
                        <strong className="me-auto">Localisation</strong>
                        <small>code</small>
                    </div>
                    <div className="toast-body">
                    Pas de Localisation,Veuillez l'ajouter!
                    </div>
                 </div>
                }
                </div>
            <AddLocalisation rowEventsAddLocal={showAddLocal} handleClose={handleCloseAddLocal} />

            </div>
        )
}

