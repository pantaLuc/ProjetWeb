import React,{ useState } from 'react'
import { BiSearchAlt } from "react-icons/bi";


export default function Search(props){

    return(
        <div>
                <div className="input-group mb-2">
                    <input type="search"
                         className="form-control"
                         placeholder={props.placeholder}
                         onChange={props.handleChange}
                         />
                    <span className="input-group-text"><BiSearchAlt/></span>
                </div>
        </div>
    )
}
