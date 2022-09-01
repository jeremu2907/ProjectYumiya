import React, {Component} from 'react'
import ItemTitle from "../ItemTitle.jsx"
import CalendarItem from "./CalendarItem.jsx"
import './DailyCard.css'

class DailyCard extends Component{
    styles = {
        height: "calc(100% - 40px)",
        width: "90%",
        backgroundColor: "#262524",
        borderRadius: "30px",
        border: "solid 2px #262524",
        padding: "10px"
    }

    flexBoxStyle = {
        position: "relative",
        height: "80%",
        width: "calc(100%-20px)",
        border: "solid 1px #262524",
        borderRadius: "30px",
        display: "flex",
        flexDirection: "column",
        alignItems: "flexStart",
        overflowY: "auto",
    }

    eventModifyAdd = () => {
        console.log("Button add clicked")
    }

    eventModifySub = () => {
        console.log("Button sub clicked")
    }


    render(){
        const d = new Date();
        let cardTitle = "Today ____________________________________ " + (d.getMonth() + 1) + " | " + d.getDate();
        return(
            <div style = {this.styles}>
                <ItemTitle color="white" text= {cardTitle} />
                <img src={require("./addButton.png")} alt="add button" onClick={this.eventModifyAdd}/>
                <img src={require("./subButton.png")} alt="sub button" onClick={this.eventModifySub}/>
                <div style = {this.flexBoxStyle} className="flexBoxStyle">
                    <CalendarItem text={"First Event"}/>
                    <CalendarItem text={"Second Event"}/>
                    <CalendarItem text={"Third Event"}/>
                </div>
            </div>
        )
    }
}

export default DailyCard;