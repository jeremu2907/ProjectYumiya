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
        pages: 3,
        currentPage: 1,
        noteContent: ["There is something", "Else in here", "what?"],
    }

    pageSelector = {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
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

                <ToDoItems text = {this.state.noteContent[this.state.currentPage-1]}/>

                <div style={this.pageSelector}>
                    <NotePage />
                    <img src={require("./leftButton.png")} alt="move to left button"  
                                style={{ width:"23px", height:"23px",marginRight:"10px"}}
                                onClick={this.moveleft}/>
                    <img src={require("./rightButton.png")} alt="move to right button" 
                                style={{width:"23px", height:"23px"}} 
                                onClick={this.moveright}/>
                </div>
            </div>
        );
    }

    eventModifyAdd = () => {
        this.setState({pages: this.state.pages + 1})
    }

    eventModifySub = () => {
        this.setState({pages: this.state.pages - 1});
    }

    moveleft = () => {
        if(this.state.currentPage > 1){
            this.setState({currentPage: this.state.currentPage - 1})
            console.log(this.state.currentPage)
        }
    }

    moveright = () => {
        if(this.state.currentPage < this.state.pages){
            this.setState({currentPage: this.state.currentPage + 1})
            console.log(this.state.currentPage)
        }
    }
}

export default ToDoList;