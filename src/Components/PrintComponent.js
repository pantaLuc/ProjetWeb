
import React, { useRef } from "react";
import { Button } from "react-bootstrap";
import ReactToPrint from "react-to-print";
import RessourceQrCode from "./RessourceQrCode";
import { MdOutlineQrCode2 } from 'react-icons/md';
import { AiTwotonePrinter } from 'react-icons/ai';

export default function PrintComponent(props) {
  let componentRef = useRef();

  return (
      <div>
        <ReactToPrint
          trigger={() => <a><AiTwotonePrinter/><MdOutlineQrCode2/></a>}
          content={() => componentRef}
        />

        {/* component to be printed */}
        <div style={{ display: "none" }}>
            <RessourceQrCode ref={(el) => (componentRef = el)} ressource={props.ressource}/>
        </div>
      </div>
  );
}