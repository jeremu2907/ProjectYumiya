import React, {Component} from 'react';
import './ItemTitle.css'

class ItemTitle extends Component{
    constructor(props) {
        super(props);

        this.state = JSON.parse(window.localStorage.getItem('title')) || {
            title : "Today's Note"
        }
    
        this.changeTitle = this.changeTitle.bind(this);
    }

    styles={
        color: this.props.color,
        fontSize: "30px",
        fontWeight: "bold",
        position: "relative",
        left: "20px",
        backgroundColor: 'rgba(0,0,0,0)'
    }

    setState(state){
        window.localStorage.setItem('title', JSON.stringify(state));
        super.setState(state)
    }

    changeTitle(event) {
        this.setState({title: event.target.value})
    }

    render(){
        return(
            (this.props.styleChoice === 0)?
            //Changeable title
            <textarea className = "editableTitle globalFont" 
                        style = {this.styles} 
                        onChange={this.changeTitle}>
                {this.state.title}
            </textarea> :
            //Not changeable title
            <div className = "globalFont" style = {this.styles}>
                {this.props.text}
            </div>
        )
    }
}
export default ItemTitle;