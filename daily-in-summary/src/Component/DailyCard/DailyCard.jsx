import React, {Component} from 'react'
import ItemTitle from "../ItemTitle.jsx"
import CalendarItem from "./CalendarItem.jsx"
import './DailyCard.css'

class DailyCard extends Component{
    styles = {
        height: "94%",
        width: "45%",
        backgroundColor: "#262524",
        borderRadius: "30px",
        border: "solid 2px #262524",
        padding: "10px"
    }

    flexBoxStyle = {
        position: "relative",
        height: "calc(90% - 60px)",
        width: "calc(100%-20px)",
        overflow: "auto",
        // border: "solid 1px white",
        // borderRadius: "30px",
        // display: "flex",
        // flexDirection: "column",
        // alignItems: "flexStart",
    }

    title = {
        display: "flex",
        flexDirection: "row",
        alignItems: "flexStart",
        marginBottom: "50px"
    }

    eventModifyAdd = () => {
        console.log("Button add clicked")
    }

    eventModifySub = () => {
        console.log("Button sub clicked")
    }


    render(){
        const d = new Date();
        let cardTitle = "Today " + (d.getMonth() + 1) + " | " + d.getDate();
        return(
            <div style = {this.styles}>
                <div style = {this.title}>
                    <ItemTitle color="white" text= {cardTitle} />
                    <img src={require("../ButtonSet/addButton.png")} alt="add button" style={{marginLeft:"auto", marginRight:"10px"}} onClick={this.eventModifyAdd}/>
                    <img src={require("../ButtonSet/subButton.png")} alt="sub button"  onClick={this.eventModifySub}/>
                </div>

                <div style = {this.flexBoxStyle} className="flexBoxStyle">
                    <CalendarItem text={"First Event"}/>
                    <CalendarItem text={"First Event"}/>
                    <CalendarItem text={"First Event"}/>
                    <CalendarItem text={"First Event"}/>
                    <CalendarItem text={"First Event"}/>
                </div>
            </div>
        )
    }
}

export default DailyCard;