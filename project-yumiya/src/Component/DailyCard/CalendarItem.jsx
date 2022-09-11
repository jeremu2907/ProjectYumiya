import React, {Component} from 'react'
import '../ItemTitle.css'
import './CalendarItem.css'

class CalendarItem extends Component{
    constructor(props){
        super(props);

        this.state = {
            // EventID: Math.random(),
            Time: props.time,
            // Place: "1234 N Road, City, State Zip",
            // Link: "somewhere.com",
            // Note: "This is a test",
        }
    }

    styles = {
        position: "relative",
        height: "180px",
        width: "97%",
        backgroundColor: "rgba(255, 255, 255, 0.05)",
        borderRadius: "30px",
        marginBottom: "10px",
        overflowX: "hidden",
        color: "white",
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
            <div style = {this.styles} className="box" onClick={this.selectItem}>
                <h3 style = {this.title} className = "globalFont">{this.props.text}</h3>
                <ul className = "globalFont">
                    <li>{this.state.Time}</li>
                    {/* <li>{this.state.Place}</li>
                    <li>{this.state.Link}</li>
                    <li>{this.state.Note}</li> */}
                </ul>
            </div>
        )
    }

    selectItem = () => {
        this.props.parentCallback(this.state.EventID)
        // listUpcomingEvents()
    }
}

export default CalendarItem;