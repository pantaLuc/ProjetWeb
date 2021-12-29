import React, { useState, useStateIfMounted, useEffect} from 'react'
import { NavLink  } from "react-router-dom";
import { AiOutlineLogout } from 'react-icons/ai';
import { AiOutlineLogin } from 'react-icons/ai';
import { GiAutoRepair } from "react-icons/gi";
import { MdMiscellaneousServices } from "react-icons/md";
import { BiCurrentLocation } from "react-icons/bi";
import { BiUserPin } from "react-icons/bi";
import { MdGroups } from "react-icons/md";
import { BsFillPersonXFill } from "react-icons/bs";
import { BsFillPersonCheckFill } from "react-icons/bs";
import axios from 'axios';
import { BsListStars } from 'react-icons/bs';

import { OverlayTrigger, Popover, Button  } from 'react-bootstrap';

export default function Header(props) {
    const [userRole, setUserRole ] = useState('guest');
    const [show, setShow] = useState(false);
    const popover = (
        <Popover>
          <Popover.Header as="h3"><BiUserPin/> {localStorage.getItem('username')}</Popover.Header>
          <Popover.Body> <strong> {localStorage.getItem('role')}</strong></Popover.Body>
        </Popover>
      );
     useEffect(() => {
            setUserRole(localStorage.getItem('role'));
     }, [localStorage.getItem('role') ])
    return (
        <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">
                    <GiAutoRepair/>
                    WeReportIT
                </NavLink>
                <button className="navbar-toggler" type="button" onClick={()=>setShow(!show)}>
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" style={show?{display:"block"}:{display:'none'}}>
                <ul className="navbar-nav me-auto">  
                    <li className="nav-item">
                    {localStorage.getItem('token')?
                        <OverlayTrigger
                        placement="right"
                        delay={{ show: 250, hide: 400 }}
                        overlay={popover}
                        >
                            <Button><BsFillPersonCheckFill/></Button>
                         </OverlayTrigger>
                    :
                    <Button>
                     <BsFillPersonXFill/>
                    </Button>
                    }
                    </li>
                {(localStorage.getItem('token') && userRole==='responsable') &&
                    <><li className="nav-item">
                        <NavLink className="nav-link active" to="/HomeRespo"><BsListStars/> Gestion des Ressources</NavLink>
                    </li></>
                }
                {(localStorage.getItem('token') && userRole==='admin') &&
                    <><li className="nav-item">
                        <NavLink className="nav-link active" to="/HomeAdmin"><MdGroups/> Gestion des Responsables</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link active" to="/Service"><MdMiscellaneousServices/> Gestion des Services</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link active" to="/Localisation"><BiCurrentLocation/> Gestion des Localisations</NavLink>
                    </li></>
                }
                </ul>
                
                <form className="d-flex">
                {localStorage.getItem('token') ?
                    <button className="btn btn-secondary my-2 my-sm-0" type="submit"
                            onClick={() => { localStorage.removeItem('token') ;localStorage.removeItem('role');localStorage.removeItem('username');localStorage.removeItem('id'); }}>
                                <AiOutlineLogout/>Déconnexion
                    </button>:
                    <NavLink className="btn btn-secondary my-2 my-sm-0" to="/Login"><AiOutlineLogin/> Connexion</NavLink>

                    }
                </form>
                
                </div>
                
            </div>
        </nav>  
        </div>
    )
}
