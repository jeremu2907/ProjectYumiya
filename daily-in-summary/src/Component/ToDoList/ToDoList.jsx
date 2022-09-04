import React, {Component} from 'react';
import ItemTitle from '../ItemTitle.jsx'
import ToDoItems from './ToDoItems.jsx'

class ToDoList extends Component{
    styles = {
        height: "48vh",
        width: "48vw",
        backgroundColor: "#262524",
        borderRadius: "30px",
    }

    title = {
        position:"relative",
        top: "30px",
        display: "flex",
        flexDirection: "row",
        alignItems: "flexStart",
        width:"90%"
    }
    render(){
        return(
            <div style={this.styles}>
                <div style={this.title}>
                    <ItemTitle color="white" text={"My To-Do List today"} />
                    <img src={require("../ButtonSet/addButton.png")} alt="add button" style={{marginLeft:"auto", marginRight:"10px"}} onClick={this.eventModifyAdd}/>
                    <img src={require("../ButtonSet/subButton.png")} alt="sub button"  onClick={this.eventModifySub}/>
                </div>
                <ToDoItems />
            </div>
        );
    }
}

export default ToDoList;