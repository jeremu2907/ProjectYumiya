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
        transform: "translate(-50%)",
        marginBottom: "30px"
    }

    state = {
        lines: ["Email boss", "Buy gifts", "Meet Josh", "Fix Deprecated methods"]
    }

    render(){
        return(
            <textarea style={this.styles}>
                - Some text here
            </textarea>
        )
    }
}

export default ToDoItems;