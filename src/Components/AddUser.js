import React ,{useState} from 'react'
import { Modal, Button } from 'react-bootstrap';
import axios from 'axios';

export default function AddUser(props) {
    const [identifiant, setidentifiant] = useState();
    const [nom, setnom] = useState();
    const [prenom, setprenom] = useState();
    const [email, setemail] = useState();
    const [password, setPassword] = useState("");
    const [confirm_password, setConfirm_password] = useState("");
    const handleSubmit = (values) => {
        values.preventDefault();
        const user = {
            username: identifiant,
            first_name: nom,
            last_name: prenom,
            email: email,
            password: password,
            role: "responsable"
        };
        console.log(user);
        axios({
            method: "POST",
            url: `${process.env.REACT_APP_API_URL}/api/users/register/`,
            data: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            }
        }).then(res => {
            console.log(res)
                props.handleClose();
            });
    };
        return (
            <Modal show={props.rowEventsAdd} onHide={props.handleClose}  >
                <Modal.Header closeButton>
                    <Modal.Title>Ajouter un Responsable de Maintenance</Modal.Title>
                </Modal.Header>
                <form onSubmit={handleSubmit}>
                <Modal.Body>
                    <div>
                        <div className="form-group">
                            <label for="id" className="form-label mt-2">Identifiant :</label>
                            <input type="text" className="form-control" id="id" placeholder="ABC123" onChange={(event) => { setidentifiant(event.target.value) }}required/>
                            <small className="form-text text-muted">Chaque responsable a un identifiant unique.</small>
                        </div>
                        <div className=" row form-group">
                            <div className="col-sm">
                                <input type="text" className="form-control" id="nom"  placeholder="Nom"onChange={(event) => { setnom(event.target.value) }}required/>
                            </div>
                            <div className="col-sm">
                            <input type="text" className="form-control" id="prenom"placeholder="Prénom"onChange={(event) => { setprenom(event.target.value) }}required/>
                            </div>
                        </div>
                        <div className="form-group">
                            <input type="email" className="form-control" id="email" placeholder="exemple@gmail.com" onChange={(event) => { setemail(event.target.value) }}required/>
                        </div>
                        <div className="form-group">
                            <input 
                                type="password" 
                                id="motdepasse1" 
                                placeholder="Mot de passe" 
                                onChange={(event)=>{setPassword(event.target.value);}}
                                className={(password.length === 0
                                            ?"form-control"
                                            :(password.length >=6?"form-control is-valid":"form-control is-invalid")
                                            )}
                                required
                                />
                                  <div className="invalid-feedback">Le mot de passe doit contenir au moins 6 caractères!</div>
                        </div>
                        <div className="form-group">
                            <input 
                                type="password" 
                                id="motdepasse2" 
                                placeholder="Confirmer le Mot de passe"
                                onChange={(event)=>{setConfirm_password(event.target.value);}}
                                className={(
                                    ((password.length === 0 || confirm_password.length === 0) 
                                        || 
                                        (password.length >=6  && password === confirm_password)
                                    )?
                                    "form-control "+(
                                                    (password.length !== 0 && confirm_password.length !== 0 && password === confirm_password)
                                                    ?"is-valid":""
                                                    )
                                    :"form-control is-invalid"
                                )}
                                required
                                />
                                <div className="invalid-feedback">Les mots de passe ne sont pas identiques!</div>
                                <div className="valid-feedback">Parfait! Les mots de passe sont identiques!</div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="dark" onClick={props.handleClose}>
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
