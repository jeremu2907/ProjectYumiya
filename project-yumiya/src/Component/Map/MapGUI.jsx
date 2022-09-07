import React, {Component} from 'react'
import MapInfo from './MapInfo.jsx'
import Gmap from './Gmap.jsx'

class MapGUI extends Component{
    styles = {
        height: "48vh",
        width: "calc(48vw)",
        backgroundColor: "rgba(20, 20, 20, 0.77)",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly"
    }
    render(){
        return(
            <div style = {this.styles}>
                <Gmap />
                <MapInfo />
            </div>
        )
    }
}

export default MapGUI;