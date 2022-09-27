import React, {Component} from 'react'
import '../ItemTitle.css'
import './CalendarItem.css'

class CalendarItem extends Component{
    // constructor(props){
    //     super(props);

    //     // this.state = {
    //     //     id: props.id,
    //     //     time: props.time,
    //     //     location: props.location,
    //     //     description: props.description,
    //     //     name: props.name
    //     //     // Place: "1234 N Road, City, State Zip",
    //     //     // Link: "somewhere.com",
    //     //     // Note: "This is a test",
    //     // }
    // }

    state = {
        status : false
    }

    styles = {
        position: "relative",
        height: "auto",
        width: "calc(97% - 30px)",
        backgroundColor: "rgba(255, 255, 255, 0.05)",
        borderRadius: "30px",
        marginBottom: "10px",
        overflowX: "hidden",
        color: "white",
        padding: "15px",
        minHeight: "100px"
    }

    title = {
        position: "relative",
        
    }

    eventDetail = {
        position: "relative",
        
    }

    render(){
        return(
            <div style = {this.styles} className="box" onClick={this.selectItem}>
                {/* Selection indicator */}
                <div id = {this.props.id} style = {{height: "20px", width: "20px", borderRadius: "10px",backgroundColor: "rgba(255, 255, 255, 0.05)"}}></div>
                <h3 style = {this.title} className = "globalFont">{this.props.name}</h3>
                {/* Props passed in from DailyCard.jsx */}
                <div className = "globalFont" style={{paddingLeft: "10px"}}>
                    {(this.props.time === undefined)? <p>{this.props.date}</p> : ((this.props.time.indexOf("T") === -1)? <p>{this.props.time}</p> : <p>{this.props.time.substr(0, this.props.time.indexOf("T"))}</p>)}
                    {(this.props.time === undefined || this.props.time.indexOf("T") === -1)? "" : <p>{this.props.time.substr(this.props.time.indexOf("T") + 1, 5)}</p>}
                    {(this.props.location === "")? "" : <p>{this.props.location}</p>}
                    {(this.props.description === "")? "" : <p>{this.props.description}</p>}
                </div>
            </div>
        )
    }

    // When the event is clicked mark the event and pass signal to DailyCard, waiting to be removed
    selectItem = () => {
        this.props.parentCallback(this.props.id, this.state.status)
        if(!this.state.status)
            document.getElementById(this.props.id).style.backgroundColor = "#03d3fc"
        else
            document.getElementById(this.props.id).style.backgroundColor = "rgba(255, 255, 255, 0.05)"
        
        this.setState({status: !this.state.status})
    }
}

export default CalendarItem;