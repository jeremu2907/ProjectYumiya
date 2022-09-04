import React, {Component} from 'react'
import MapInfo from './MapInfo.jsx'

class MapGUI extends Component{
    styles = {
        height: "48vh",
        width: "calc(48vw)",
        backgroundColor: "#262524",
        borderRadius: "30px",
        // border: "solid 2px #white",
        display: "flex",
        flexDirection: "column",
    }
    render(){
        return(
            <div style = {this.styles}>
                <MapInfo />
            </div>
        )
    }
}

export default MapGUI;