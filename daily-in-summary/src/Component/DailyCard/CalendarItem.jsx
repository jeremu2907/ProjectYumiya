import React, {Component} from 'react'
import '../ItemTitle.css'
class CalendarItem extends Component{
    styles = {
        position: "relative",
        height: "180px",
        width: "97%",
        backgroundColor: "rgba(255, 255, 255, 0.05)",
        borderRadius: "30px",
        marginBottom: "10px",
        overflowX: "hidden",
        color: "white"
    }

    title = {
        position: "relative",
        left: "10px"
    }

    eventDetail = {
        position: "relative",
        left: "10px"
    }

    render(){
        return(
            <div style = {this.styles}>
                <h3 style = {this.title} className = "globalFont">{this.props.text}</h3>
                <ul className = "globalFont">
                    <li>Time</li>
                    <li>Place</li>
                    <li>Link</li>
                    <li>Note</li>
                </ul>
            </div>
        )
    }
}

export default CalendarItem;