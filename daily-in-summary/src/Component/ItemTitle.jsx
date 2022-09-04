import React from 'react';
import './ItemTitle.css'

function ItemTitle(props){
    var styles={
        color: props.color,
        fontSize: "30px",
        fontWeight: "bold",
        position: "relative",
        left: "20px",
        writable: true
    }
    return(
        <div className = "globalFont" style = {styles}>
            {props.text}
        </div>
    )
}

export default ItemTitle;