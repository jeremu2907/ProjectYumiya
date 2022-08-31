import React, {Component} from 'react'
import MapInfo from './MapInfo.jsx'

class MapGUI extends Component{
    styles = {
        height: "42vh",
        width: "48vw - 20px",
        backgroundColor: "white",
        borderRadius: "30px",
        border: "solid 20px #262524",
        margin: "20px",
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