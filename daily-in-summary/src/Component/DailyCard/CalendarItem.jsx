import React, {Component} from 'react'
import '../ItemTitle.css'
class CalendarItem extends Component{
    styles = {
        position: "relative",
        height: "20%",
        width: "100%",
        backgroundColor: "orange",
        borderRadius: "30px",
        marginBottom: "5px"
    }

    title = {
        position: "absolute",
        left: "10px"
    }

    render(){
        return(
            <div style = {this.styles}>
                <h3 style = {this.title} className = "globalFont">{this.props.text}</h3>
            </div>
        )
    }
}

export default CalendarItem;