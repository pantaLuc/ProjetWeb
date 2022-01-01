import React ,{useState, useEffect} from 'react';
import { MdMiscellaneousServices,MdDeleteForever } from 'react-icons/md';
import { AiOutlineAppstoreAdd } from 'react-icons/ai';
import Search from './Search';
import AddService from './AddService';
import Header from './Header';
import axios from'axios'
import Delete from './Delete';
import { useNavigate } from "react-router-dom";

export default function Service(props){
    const navigate = useNavigate();
    const [serviceid, setserviceid] = useState()
    const [showAddService, setshowAddService] = useState(false);
    const handleCloseAddService = () => setshowAddService(false);
    const rowEventsAddService = () => { setshowAddService(true); }

    const rowEventsDelete = (e) => { 
        setserviceid(e);
        setshowDeleteService(true); }
    const [showDeleteService, setshowDeleteService] = useState(false);
    const handleCloseDeleteService = () => {
        setserviceid();
        setshowDeleteService(false);}

    const [searchField, setsearchField] = useState('');
    const [ListeService, setListeService] = useState([]);
    const filtreedService=ListeService.filter(service=>(
        service.nomServ.toLowerCase().includes(searchField.toLowerCase())
            ||
        service.descriptionService.toLowerCase().includes(searchField.toLowerCase())
    ));
    useEffect(() => {
        {localStorage.getItem('token')? 
        (localStorage.getItem('role') != 'admin'&& navigate("/"))
    :navigate("/")}
        axios.get(`${process.env.REACT_APP_API_URL}/api/ressources/listServices/`)
                .then((res) => {
                    setListeService(res.data);
                });
      }, [handleCloseAddService]);
        return (
            <div>
                <Header/>
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
                                <strong className="me-auto"> {service.nomServ}</strong>
                                <small>{service.date}</small>
                                <button type="button" className="btn ms-2 mb-1">
                                    <a href="#" className="card-link" style={{color:"red"}} onClick={() => rowEventsDelete(service.id)}> <MdDeleteForever/></a>
                                </button>
                            </div>
                            <div className="toast-body">
                                {service.descriptionService}
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
                <AddService rowEventsAddService={showAddService} handleClose={handleCloseAddService} service={ListeService} />
                <Delete rowEventsDelete={showDeleteService} handleClose={handleCloseDeleteService} id={serviceid} type='service'/>

            </div>
            </div>
        )
}
