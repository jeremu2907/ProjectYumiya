import React, {Component} from 'react'
import '../ItemTitle.css'
class CalendarItem extends Component{
    styles = {
        position: "relative",
        height: "auto",
        width: "100%",
        backgroundColor: "orange",
        borderRadius: "30px",
        marginBottom: "5px",
        overflowX: "hidden"
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
                <ul>
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