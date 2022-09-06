import React, {Component} from 'react';
import './TextArea.css'

class ToDoItems extends Component{
    constructor(props) {
        super(props);

        this.state = JSON.parse(window.localStorage.getItem('state')) || {
            lines : "New Note"
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
                                
    //Used to persist state of what is written in Note area
    setState(state){
        window.localStorage.setItem('state', JSON.stringify(state));
        super.setState(state)
    }

    textChange(event) {
        this.setState({lines: event.target.value})
    }

    render(){
        return(
            <textarea style={this.styles} value={this.state.lines} onChange={this.textChange} />
        )
    }
}

export default ToDoItems;