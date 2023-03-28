import React from "react";
import style from "../container/App.css"

const Searchbox = ({searchfield, searchChange}) => {
    return(
        <div>
            <input type="search" placeholder="Search robots" onChange= {searchChange} class="search"/>
            <br />
        </div>
    )
}

export default Searchbox;