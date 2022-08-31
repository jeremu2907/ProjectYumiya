import React, {Component} from 'react';

class ToDoItems extends Component{
    styles = {
        position: "relative",
        color: "white",
        fontSize: "20px",
        top: "30px",
        left: "40px"
    }

    render(){
        return(
            <ul style = {this.styles}>
                <li>First thing</li>
                <li>Second thing</li>
                <li>Third thing</li>
            </ul>
        )
    }
}

export default ToDoItems;