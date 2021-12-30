import React, {useState} from 'react'
import { GoLocation } from "react-icons/go";
import { FcSearch } from "react-icons/fc";
import SignalerAnomalie from './SignalerAnomalie';
import Header from './Header';
import QrReader from 'react-qr-reader'
import { useNavigate } from "react-router-dom";

export default function ScanAnomalie(props) {
    const navigate = useNavigate();
    const [result, setResult] = useState("");
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const rowEvents = () => { setShow(true); }
    const handleScan = (data) => {
        if (data) {
          setResult(data);
          window.location.href = data

        }
      }
    const handleError = (err) => {
        console.error(err)
      }
        return (
            <div>
                <form>
                <legend><GoLocation color='#ffffff'/> Localiser la ressource</legend>
                <div className="form-group">
                    <label for="formFile" className="form-label mt-4">Scannerle QR code de la ressource :</label>
                  <QrReader
                        delay={300}
                        onError={handleError}
                        onScan={handleScan}
                        style={{ width: '100%' }}
                        />
                        <p>{result}</p>
                </div>
                <button onClick={rowEvents} type="button" className="container btn btn-lg btn-outline-info"><FcSearch/> Chercher</button>
                </form>
                <SignalerAnomalie rowEvents={show} handleClose={handleClose} />
            </div>
        )
}
