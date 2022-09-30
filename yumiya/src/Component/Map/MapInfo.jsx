import React, {Component} from 'react'
import ItemTitle from '../ItemTitle.jsx'
import './weather.js'

class MapInfo extends Component{
    constructor(){
        super();
        this.state = {
            weatherData: ""
        }
        fetch("https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&exclude=minutely,daily,alerts&appid=413c4ae08ad7457250848cc6fc7a7fe4")
            .then(response => {
            // indicates whether the response is successful (status code 200-299) or not
            if (!response.ok) {
                throw new Error(`Request failed with status ${response.status}`)
            }
            return response.json()
            })
            .then(data => {
                // console.log(data)
                this.state.weatherData = data.hourly
            })
            .catch(error => console.log(error))

    }
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