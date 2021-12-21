import React ,{useState} from 'react';
import { MdMiscellaneousServices,MdDeleteForever } from 'react-icons/md';
import { AiOutlineAppstoreAdd } from 'react-icons/ai';
import Search from './Search';
import AddService from './AddService';
export default function Service(props){
    const [showAddService, setshowAddService] = useState(false);
    const handleCloseAddService = () => setshowAddService(false);
    const rowEventsAddService = () => { setshowAddService(true); }

    const [searchField, setsearchField] = useState('');
    const [ListeService, setListeService] = useState(
        [{
            nom:'Service1',
            date:'19/12/2021',
            description:'55description du service 1'
        },
        {
            nom:'Service2',
            date:'09/12/2021',
            description:'description du service 2'
        },
        {
            nom:'Service3',
            date:'10/12/2021',
            description:'description du service 3'
        },
        {
            nom:'Service4',
            date:'25/12/2021',
            description:'description du service 4'
        },
       
    ]);
    const filtreedService=ListeService.filter(service=>(
        service.nom.toLowerCase().includes(searchField.toLowerCase())
            ||
        service.date.toLowerCase().includes(searchField.toLowerCase())
            ||
            service.description.toLowerCase().includes(searchField.toLowerCase())
    ));
        return (
            <div className='container'>
                <h1 style={{textAlign:"center"}}><MdMiscellaneousServices/> Les Services :</h1>
                <div className='row'>
                    <div className='col-sm-2'>
                    <button type="button" className="btn btn-outline-success" onClick={rowEventsAddService}><AiOutlineAppstoreAdd/> Ajouter </button>
                    </div>
                    <div className='col-sm-8'>
                        <Search placeholder='Chercher un service par son nom /sa date /un mot de sa description..'handleChange={(e)=>setsearchField(e.target.value)}/>
                    </div>
                </div>
                <div className='row'>
                {filtreedService.length > 0
                                        ? filtreedService.map((service) => {             
                        return(
                        <div className="col-sm-3 toast show" role="alert" aria-live="assertive" aria-atomic="true">
                            <div className="toast-header">
                                <strong className="me-auto"> {service.nom}</strong>
                                <small>{service.date}</small>
                                <button type="button" class="btn ms-2 mb-1">
                                    <a href="#" class="card-link" style={{color:"red"}}> <MdDeleteForever/></a>
                                </button>
                            </div>
                            <div className="toast-body">
                                {service.description}
                            </div>
                        </div>);
                })
                : 
                <div className="container toast show" role="alert" aria-live="assertive" aria-atomic="true">
                            <div className="toast-header">
                                <strong className="me-auto">Service</strong>
                                <small>jj/mm/aaaa</small>
                            </div>
                            <div className="toast-body">
                            Pas de Service,Veuillez l'ajouter!
                            </div>
                </div>
                }
                </div>
                <AddService rowEventsAddService={showAddService} handleClose={handleCloseAddService} />
            </div>
        )
}
