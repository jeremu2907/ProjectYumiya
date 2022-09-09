import React, {Component} from 'react'
import ItemTitle from "../ItemTitle.jsx"
import CalendarItem from "./CalendarItem.jsx"
import './DailyCard.css'

class DailyCard extends Component{
    constructor(props){
        super(props)

        this.state = {
            selectedEvents: new Set()
        }
    }

    styles = {
        height: "94%",
        width: "45%",
        backgroundColor: "rgba(20, 20, 20, 0.77)",
        border: "solid 2px #262524",
        padding: "10px"
    }

    flexBoxStyle = {
        position: "relative",
        height: "calc(90% - 60px)",
        width: "calc(100%-20px)",
        overflow: "auto",
    }

    title = {
        display: "flex",
        flexDirection: "row",
        alignItems: "flexStart",
        marginBottom: "30px",
        marginTop: "30px"
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
                    <ItemTitle color="#03d3fc" text= {cardTitle} />
                    <img src={require("../ButtonSet/subButton.png")} alt="sub button"  
                            style={{marginLeft:"auto", marginRight:"10px",scale: "0.5"}}
                            onClick={this.eventModifySub}/>
                    <img src={require("../ButtonSet/addButton.png")} alt="add button" 
                            style={{scale: "0.5"}} 
                            onClick={this.eventModifyAdd}/>
                </div>

                <div style = {this.flexBoxStyle} className="flexBoxStyle">
                    <CalendarItem parentCallback={this.handleUserSelection} text={"First Event"}/>
                    <CalendarItem parentCallback={this.handleUserSelection} text={"First Event"}/>
                    <CalendarItem parentCallback={this.handleUserSelection} text={"First Event"}/>
                    <CalendarItem parentCallback={this.handleUserSelection} text={"First Event"}/>
                    <CalendarItem parentCallback={this.handleUserSelection} text={"First Event"}/>
                    <CalendarItem parentCallback={this.handleUserSelection} text={"First Event"}/>
                    <CalendarItem parentCallback={this.handleUserSelection} text={"First Event"}/>
                    <CalendarItem parentCallback={this.handleUserSelection} text={"First Event"}/>
                </div>
            </div>
        )
    }

    handleUserSelection = (selected) => {
        this.state.selectedEvents.add(selected)
        this.setState({selectedEvents: this.state.selectedEvents})
    }
}

export default DailyCard;