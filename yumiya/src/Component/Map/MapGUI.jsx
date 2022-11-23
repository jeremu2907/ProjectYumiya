import React, {Component} from 'react'
import MapInfo from './MapInfo.jsx'
import Gmap from './Gmap.jsx'
import HourlyWeather from './hourlyWeather.jsx'
import './mapGUI.css'

class MapGUI extends Component{

    styles = {
        height: "47vh",
        width: "calc(95% - 10px)",
        backgroundColor: "rgba(0,0,0, 0.7)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        // borderRadius: "10px",
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