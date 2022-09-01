import React, {Component} from 'react'
import ItemTitle from "../ItemTitle.jsx"
import CalendarItem from "./CalendarItem.jsx"
import './DailyCard.css'

class DailyCard extends Component{
    styles = {
        height: "calc(100% - 40px)",
        width: "50%",
        backgroundColor: "white",
        borderRadius: "30px",
        border: "solid 2px #262524",
        padding: "10px"
    }

    flexBoxStyle = {
        position: "relative",
        height: "85%",
        width: "calc(100%-20px)",
        border: "solid 1px #262524",
        borderRadius: "30px",
        display: "flex",
        flexDirection: "column",
        alignItems: "flexStart",
        overflowY: "hidden",
    }

    render(){
        const d = new Date();
        let cardTitle = "Today    " + (d.getMonth() + 1) + "/" + d.getDate();
        return(
            <div style = {this.styles}>
                <ItemTitle color="black" text= {cardTitle} />
                <button><img src="daily-in-summary\src\ButtonSet\addButton.png" alt="add button"/></button>
                <button></button>
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