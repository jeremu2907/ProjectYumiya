import React, {Component} from 'react';
import './TextArea.css'

class ToDoItems extends Component{
    constructor(props) {
        super(props);

        this.state = JSON.parse(window.localStorage.getItem('state')) || {
            noteContent: Array(props.pages).fill("")
        }

        this.textChange = this.textChange.bind(this);
    }

    styles = {
        position: "relative",
        width: "95%",
        height: "calc(80%)",
        border: "none",
        color: "white",
        backgroundColor: "rgba(0,0,0,0)",
        left: "50%",
        transform: "translate(-50%)",
    }
                                
    //Used to persist state of what is written in Note area
    setState(state){
        window.localStorage.setItem('state', JSON.stringify(state));
        super.setState(state)
    }

    textChange(event) {
        //Make a copy of noteContent
        //Change what is edited
        //Save to localStorage
        let temp = this.state.noteContent;

        //If added a new page, push a nother element to array
        //Else simply update the current array
        if(this.props.currentPage > this.state.noteContent.length)
            temp.push(event.target.value);
        else
            temp[this.props.currentPage - 1] = event.target.value;
        this.setState({noteContent: temp})
    }

    deletePage(){
        if(this.props.pages < this.state.noteContent.length){
            this.state.noteContent.splice(this.props.currentPage - 1, 1)
            this.setState({noteContent: this.state.noteContent})
        }
    }

    render(){
        this.deletePage();
        return(
            <textarea style={this.styles} value={ (this.props.currentPage <= this.state.noteContent.length)?
                this.state.noteContent[this.props.currentPage - 1] : "New Note"} 
                onChange={this.textChange}/>
        )
    }
}

export default ToDoItems;