import React, {Component} from 'react'
import MapInfo from './MapInfo.jsx'

class MapGUI extends Component{
    styles = {
        height: "45vh",
        width: "calc(48vw - 4px)",
        backgroundColor: "white",
        borderRadius: "30px",
        border: "solid 2px #262524",
        display: "flex",
        flexDirection: "column"
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