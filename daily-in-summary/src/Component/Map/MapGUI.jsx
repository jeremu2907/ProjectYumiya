import React, {Component} from 'react'
import MapInfo from './MapInfo.jsx'

class MapGUI extends Component{
    styles = {
        height: "48vh",
        width: "calc(48vw)",
        backgroundColor: "rgba(20, 20, 20, 0.77)",
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