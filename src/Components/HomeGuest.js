import React, {useState} from 'react'
import { AiFillAlert } from 'react-icons/ai';
import ScanAnomalie from './ScanAnomalie'
import FormAnomalie from './FormAnomalie'

export default function HomeGuest(props){
    const [isScan, setisScan] = useState(true);
    const [isForm, setisForm] = useState(false);
    const showScanBox= (() => {
        setisScan(true);
        setisForm(false);
      });
      const showFormBox=(() => {
        setisScan(false);
        setisForm(true);
      })
        return (
            <div className='container' >
                <h1 style={{textAlign:"center"}}><AiFillAlert/> Signaler  une anomalie :</h1>
                <div style={{width:'40%'}} className="container">
                    <div className='row'>
                    <button 
                        type="button" 
                        className={"col btn btn-dark " + (isScan ? "disabled" : "")}
                        onClick={showScanBox}
                    >
                            Scan
                    </button>
                    <button 
                        type="button" 
                        className={"col btn btn-dark " + (isForm ? "disabled" : "")}
                        onClick={showFormBox}
                    >
                            Form
                    </button>
                    
                    </div>
                    
                </div> 
                <br/>
                <div style={{width:'40%'}}  className="container alert alert-dismissible alert-secondary">
                    {isScan && <ScanAnomalie/>}
                    {isForm && <FormAnomalie/>}
                </div>
                
                  
            </div>
        )
}
