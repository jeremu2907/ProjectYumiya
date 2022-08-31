import React, {Component} from 'react'
import ItemTitle from "../ItemTitle.jsx"
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
        border: "solid 2px #262524",
        borderRadius: "30px",
        display: "flex",
        flexDirection: "column",
        alignItems: "flexStart"
    }

    render(){
        const d = new Date();
        let cardTitle = "Today   " + (d.getMonth() + 1) + "/" + d.getDate();
        return(
            <div style = {this.styles}>
                <ItemTitle color="black" text= {cardTitle} />
                <div style = {this.flexBoxStyle} className="flexBoxStyle">
                    <div>Hello</div>
                    <div>Hi</div>
                </div>
            </div>
        )
    }
}

export default DailyCard;