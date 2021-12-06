import React from 'react'
import { MdPersonSearch } from "react-icons/md";

const Search = (props)=>{
    return(
        <div>
                <div class="input-group mb-2">
                    <input type="search"
                         className="form-control"
                         placeholder={props.placeholder}
                         onChange={props.handleChange}
                         />
                    <span class="input-group-text"><MdPersonSearch/></span>
                </div>
        </div>
    )
}
export default  Search; 
