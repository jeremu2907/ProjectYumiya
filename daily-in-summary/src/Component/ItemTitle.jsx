import React from 'react';

function ItemTitle(props){
    var styles={
        color: props.color,
        fontSize: "30px",
        position: "relative",
        left: "40px",
        top: "20px",
        writable: true
    }
    return(
        <div style = {styles}>
            {props.text}
        </div>
    )
}

export default ItemTitle;