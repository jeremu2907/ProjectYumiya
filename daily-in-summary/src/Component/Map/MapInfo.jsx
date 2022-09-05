import React, {Component} from 'react'
import ItemTitle from '../ItemTitle.jsx'

class MapInfo extends Component{
    styles={
        position: 'relative',
        width: "30%",
        height: "calc(100% - 30px)",
        alignSelf: "flex-end",
    }
    render(){
        return(
            <div style={this.styles}>
                <ItemTitle color={"#03d3fc"} text={'Map Info'} />
                <div style={{justifyContent:"center"}}>
                    <ul style={{color:"white"}} className = "globalFont">
                        <li>Place</li>
                        <li>ETA</li>
                        <li>Distance</li>
                        <li>Duration</li>
                        <li>Traffic Condition</li>
                        <li>Weather Condition</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default MapInfo