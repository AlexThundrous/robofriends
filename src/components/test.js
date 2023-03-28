import React from 'react';
import style from './test.css'

const  Card = ({name, email, id}) => {
    return(
        <div id = "sup">
        <img src= {`https://robohash.org/${id}?200x200`}/>
        <br />
        <h2> {name} </h2>
        <h4> {email} </h4>
        </div>
    )
};

export default Card;