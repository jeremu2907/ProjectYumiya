import React, {Component} from 'react'
import MapInfo from './MapInfo.jsx'
import Gmap from './Gmap.jsx'
import HourlyWeather from './hourlyWeather.jsx'
import './mapGUI.css'

class MapGUI extends Component{

    styles = {
        height: "47vh",
        width: "95%",
        backgroundColor: "rgba(20, 20, 20, 0.77)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        borderRadius: "10px",
        padding: "5px",
    }
    row = {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
        height: '100%'
    }
    render(){
        return(
            <div id="mapGUI" style = {this.styles}>
                <div id="firstRow" style={this.row}>
                    <Gmap />
                    <MapInfo />
                </div>
                <HourlyWeather/>
            </div>
        )
    }
}

export default MapGUI;