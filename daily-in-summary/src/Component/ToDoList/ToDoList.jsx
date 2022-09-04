import React, {Component} from 'react';
import ItemTitle from '../ItemTitle.jsx'
import ToDoItems from './ToDoItems.jsx'
import NotePage from './NotePage'

class ToDoList extends Component{
    styles = {
        height: "48vh",
        width: "48vw",
        backgroundColor: "rgba(20, 20, 20, 0.77)",
    }

    title = {
        position:"relative",
        top: "30px",
        display: "flex",
        flexDirection: "row",
        alignItems: "flexStart",
        width:"100%"
    }

    state = {
        pages: 1,
        currentPage: 1,
    }

    render(){
        return(
            <div style={this.styles}>
                <div style={this.title}>
                    <ItemTitle styleChoice={0} color="#03d3fc" text={"My Notes today"}/>
                    <img src={require("../ButtonSet/subButton.png")} alt="sub button"  
                            style={{marginLeft:"auto", marginRight:"10px",scale: "0.5"}}
                            onClick={this.eventModifySub}/>
                    <img src={require("../ButtonSet/addButton.png")} alt="add button" 
                            style={{scale: "0.5"}} 
                            onClick={this.eventModifyAdd}/>
                </div>
                <ToDoItems />
                <NotePage />
            </div>
        );
    }

    eventModifyAdd = () => {
        this.setState({pages: this.state.pages + 1});
        console.log(this.state.pages)
    }

    eventModifySub = () => {
        this.setState({pages: this.state.pages - 1});
        console.log(this.state.pages)
    }
}

export default ToDoList;