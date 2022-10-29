import React, {Component} from 'react'
import MapInfo from './MapInfo.jsx'
import Gmap from './Gmap.jsx'
import './mapGUI.css'

class MapGUI extends Component{
    styles = {
        height: "47vh",
        // width: "calc(48vw)",
        width: "95%",
        backgroundColor: "rgba(20, 20, 20, 0.77)",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
        borderRadius: "10px",
        padding: "5px",
    }
    render(){
        return(
            <div id="mapGUI" style = {this.styles}>
                <Gmap />
                <MapInfo />
            </div>
        )
    }
}

export default MapGUI;