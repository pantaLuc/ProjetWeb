import React ,{useState} from 'react';
import { MdMiscellaneousServices } from 'react-icons/md';
import Search from './Search';
export default function Service(props){
   
        return (
            <div className='container'>
                <h1 style={{textAlign:"center"}}><MdMiscellaneousServices/> Les Services :</h1>
                <Search placeholder='Chercher un service par son nom /sa date /un mot de sa description..'/>
                
                <div className='row'>
                    <div className="col toast show" role="alert" aria-live="assertive" aria-atomic="true">
                        <div className="toast-header">
                            <strong className="me-auto">Service 1</strong>
                            <small>19/12/2021</small>
                        </div>
                        <div className="toast-body">
                            Description .
                        </div>
                    </div>

                    <div className=" col toast show" role="alert" aria-live="assertive" aria-atomic="true">
                    <div className="toast-header">
                        <strong className="me-auto">Service 1</strong>
                        <small>19/12/2021</small>
                    </div>
                    <div className="toast-body">
                        Description .
                    </div>
                    </div>
                    <div className="col toast show" role="alert" aria-live="assertive" aria-atomic="true">
                        <div className="toast-header">
                            <strong className="me-auto">Service 1</strong>
                            <small>19/12/2021</small>
                        </div>
                        <div className="toast-body">
                            Description .
                        </div>
                    </div>

                    <div className=" col toast show" role="alert" aria-live="assertive" aria-atomic="true">
                    <div className="toast-header">
                        <strong className="me-auto">Service 1</strong>
                        <small>19/12/2021</small>
                    </div>
                    <div className="toast-body">
                        Description .
                    </div>
                    </div>
                    <div className="col toast show" role="alert" aria-live="assertive" aria-atomic="true">
                        <div className="toast-header">
                            <strong className="me-auto">Service 1</strong>
                            <small>19/12/2021</small>
                        </div>
                        <div className="toast-body">
                            Description .
                        </div>
                    </div>

                    <div className=" col toast show" role="alert" aria-live="assertive" aria-atomic="true">
                    <div className="toast-header">
                        <strong className="me-auto">Service 1</strong>
                        <small>19/12/2021</small>
                    </div>
                    <div className="toast-body">
                        Description .
                    </div>
                    </div>
                </div>
                
            </div>
        )
}
