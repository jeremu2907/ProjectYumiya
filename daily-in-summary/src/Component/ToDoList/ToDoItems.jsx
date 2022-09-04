import React, {Component} from 'react';
import './TextArea.css'

class ToDoItems extends Component{
    styles = {
        position: "relative",
        width: "95%",
        height: "calc(80% - 45px)",
        border: "none",
        color: "white",
        backgroundColor: "#262524",
        fontSize: "20px",
        top: "30px",
        left: "50%",
        transform: "translate(-50%)"
    }

    render(){
        return(
            <textarea style={this.styles}>
            </textarea>
        )
    }
}

export default ToDoItems;