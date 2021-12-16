import React,{ useState } from 'react'
import { MdPersonSearch } from "react-icons/md";
import { MdPersonAdd } from 'react-icons/md';
import AddUser from './AddUser'


const Search = (props)=>{
    const [showAdd, setShowAdd] = useState(false);
    const handleCloseAdd = () => setShowAdd(false);
    const rowEventsAdd = () => { setShowAdd(true); }

    return(
        <div>
                <div class="input-group mb-3">
               < span class="input-group-text">
                <button type="button" className="btn btn-outline-success" onClick={rowEventsAdd}> <MdPersonAdd/> Ajouter</button>
               </span>
                    <input type="search"
                         className="form-control"
                         placeholder={props.placeholder}
                         onChange={props.handleChange}
                         />
                    <span class="input-group-text"><MdPersonSearch/></span>
                </div>
                <AddUser rowEventsAdd={showAdd} handleClose={handleCloseAdd} />
        </div>
    )
}
export default  Search; 
