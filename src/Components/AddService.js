import React,{ useState, useEffect}  from 'react'
import { Modal, Button } from 'react-bootstrap';
import axios from 'axios'
export default function AddService(props) {
    const [nomServ, setnomServ] = useState();
    const [respoSelected, setRespoSelected] = useState();
    const getSelectedOptions =(e) =>{
        let value = Array.from(e.target.selectedOptions, option => option.value);
        setRespoSelected(value);
        console.log(respoSelected)
      }
    const [listeRespo, setListeRespo] = useState([]);
    const [description, setdescription] = useState();
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/api/users/listuser`)
                    .then((res) => {
                        setListeRespo(res.data);
                        console.log(listeRespo)
            });
    }, [props.ListeService])
    const closep = () => {
        setRespoSelected();
        props.handleClose()}
    const handleSubmit = (values) => {
        values.preventDefault();
        const service = {
            nomServ: nomServ,
            descriptionService: description,
            responsables: respoSelected
        };
        console.log(JSON.stringify(service));
        axios({
            method: "POST",
            url: `${process.env.REACT_APP_API_URL}/api/ressources/service`,
            data: JSON.stringify(service),
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            }
        }).then(res => {
            console.log(res)
            closep();
            });
        
    };
        return (
            <Modal show={props.rowEventsAddService} onHide={closep}  >
                <Modal.Header closeButton>
                    <Modal.Title>Ajouter un Service</Modal.Title>
                </Modal.Header>
                <form onSubmit={handleSubmit}>
                <Modal.Body>
                    <div>
                        <div className="form-group">
                                <label for="nom" className="form-label mt-2">Nom du Service :</label>
                                <input type="text" className="form-control" id="nom"  placeholder="Nom"onChange={(event) => { setnomServ(event.target.value) }}required/>
                        </div>
                        <div className="form-group">
                        <label for="select" className="form-label mt-4">Responsable de maintenance</label>
                        <select className="form-select" id="select" multiple onChange={(event) => getSelectedOptions(event) } required>
                        {listeRespo.length > 0
                        ? listeRespo.map((respo) => {
                             if(!(respo.role === 'admin'))
                             {return <option value={respo.id}>{respo.last_name} {respo.first_name} </option>}
                            
                            })
                            : <option disabled>Veuillez ajouter des responsables!</option>
                        }
                        </select>
                        </div>
                        <div className="form-group">
                            <label for="exampleTextarea" className="form-label">Description du Service :</label>
                            <textarea className="form-control" id="exampleTextarea" rows="3"placeholder='Une petite description du service..'onChange={(event) => { setdescription(event.target.value) }}></textarea>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="dark" onClick={closep}>
                        Fermer
                </Button>
                    <div className="form-group">
                        <button className="btn btn-dark" type="submit" >Ajouter</button>
                    </div>
                </Modal.Footer>
                </form>
        </Modal>
        )
}

