import React, {Component} from 'react'
import ItemTitle from "./ItemTitle.jsx"

class DailyCard extends Component{
    styles = {
        height: "100%",
        width: "50%",
        backgroundColor: "#262524",
        borderRadius: "30px",
    }

    render(){
        return(
            <div style = {this.styles}>
                <ItemTitle color="white" text="Today" />
            </div>
        )
    }
}

export default DailyCard;