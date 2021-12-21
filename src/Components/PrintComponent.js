
import React, { useRef } from "react";
import { Button } from "react-bootstrap";
import ReactToPrint from "react-to-print";
import RessourceQrCode from "./RessourceQrCode";
import { MdOutlineQrCode2 } from 'react-icons/md';
import { AiTwotonePrinter } from 'react-icons/ai';

export default function PrintComponent() {
  let componentRef = useRef();

  return (
      <div>
        {/* button to trigger printing of target component */}
        <ReactToPrint
          trigger={() => <a><AiTwotonePrinter/><MdOutlineQrCode2/></a>}
          content={() => componentRef}
        />

        {/* component to be printed */}
        <div style={{ display: "none" }}>
            <RessourceQrCode ref={(el) => (componentRef = el)} />
        </div>
      </div>
  );
}