import React, {Component} from 'react';
import ItemTitle from '../ItemTitle.jsx'
import ToDoItems from './ToDoItems.jsx'

class ToDoList extends Component{
    styles = {
        height: "45vh",
        width: "48vw",
        backgroundColor: "#262524",
        borderRadius: "30px",
        margin: "20px"
    }
    render(){
        return(
            <div style={this.styles}>
                <ItemTitle color="white" text={"My To-Do List today"} />
                <ToDoItems />
            </div>
        );
    }
}

export default ToDoList;