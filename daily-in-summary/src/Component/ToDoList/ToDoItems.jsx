import React, {Component} from 'react';
import './TextArea.css'

class ToDoItems extends Component{
    constructor(props) {
        super(props);

        this.state = JSON.parse(window.localStorage.getItem('state')) || {
            noteContent: ["There is something", "Else in here", "what?"],
        }
    
        this.textChange = this.textChange.bind(this);
    }

    styles = {
        position: "relative",
        width: "95%",
        height: "calc(80% - 45px)",
        border: "none",
        color: "white",
        backgroundColor: "rgba(0,0,0,0)",
        fontSize: "20px",
        top: "30px",
        left: "50%",
        transform: "translate(-50%)",
        marginBottom: "30px"
    }

    // state = {
    //     noteContent: ["There is something", "Else in here", "what?"],
    // }
                                
    //Used to persist state of what is written in Note area
    setState(state){
        window.localStorage.setItem('state', JSON.stringify(state));
        super.setState(state)
    }

    textChange(event) {
        const temp = this.state.noteContent;
        temp[this.props.currentPage - 1] = event.target.value;
        this.setState({noteContent: temp})
    }

    render(){
        console.log(this.state)
        return(
            <textarea style={this.styles} value={this.state.noteContent[this.props.currentPage - 1]} 
            onChange={this.textChange} />
        )
    }
}

export default ToDoItems;