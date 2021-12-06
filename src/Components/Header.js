import React, { useState,Component } from 'react'
import { AiOutlineLogout } from 'react-icons/ai';

export default function Header(props) {
    const [show, setShow] = useState(false)
        return (
            <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" onClick={()=>setShow(!show)}>
                    <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" style={show?{display:"block"}:{display:'none'}}>
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <a className="nav-link active" href="#">Home </a>
                        </li>
                        
                    </ul>
                    <form className="d-flex">
                        <button className="btn btn-secondary my-2 my-sm-0" type="submit"><AiOutlineLogout/> LogOut</button>
                    </form>
                    </div>
                </div>
            </nav>  
            </div>
        )
}
