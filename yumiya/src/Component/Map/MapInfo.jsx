import React, {Component} from 'react'
import ItemTitle from '../ItemTitle.jsx'
import './weather.js'
import './map.css'

class MapInfo extends Component{
    constructor(){
        super();

        this.state = {
            weatherData: "",
            currentWeatherData: "",
            desc: "",
            nodata: false,
            locationData: "No Event Selected",
            expanded: false
        }
    }
    styles={
        position: 'relative',
        width: "30%",
        height: "calc(100% - 30px)",
        fontSize : "14px",
        // alignSelf: "flex-end",
        overflowWrap: "break-word",
        overflowY: "auto",
    }

    render(){
        return(
            <div style={this.styles} className="infoArea">
                <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
                    <ItemTitle color={"#03d3fc"} text={'Map'} />
                    <button id="expandWeather" onClick={this.expandPanel}>⛅</button>
                </div>
                <div style={{justifyContent:"center"}}>
                    <div style={{color:"white"}} className = "globalFont">
                        <p id="EventLocationName">No Event Selected</p>
                        <p id="EventLocation"></p>
                        <p id="EventDistance"></p>
                        <p id="EventDuration"></p>
                        <p id="EventETA"></p>
                    </div>
                        
                </div>
                <ItemTitle color={"#03d3fc"} text={'Weather'} />
                <div style={{justifyContent:"center"}}>
                    <div style={{color:"white"}} className = "globalFont">
                        <p id="currTemp">...loading</p>
                        <p id="currDesc"></p>
                    </div>
                </div>
                {/* <button style={{height: "50px", width: "100px", backgroundColor: "white"}} onClick={this.handleClick}>Button</button> */}
            </div>
        )
    }

    temperatureString(){
        let kelvin = this.state.currentWeatherData.temp;
        let cel = (kelvin - 273.15).toFixed(1);
        let far = (cel * 9/5 + 32).toFixed(1);
        let ret = `${cel} °C | ${far} °F`;
        return ret;
    }
    getWeatherDesc(){
        let desc = this.state.desc;
        return desc.charAt(0).toUpperCase() + desc.slice(1);
    }

    expandPanel = () => {
        if(!this.state.expanded){
            console.log("expand");
            this.setState({expanded: true});
            document.getElementById("mapGUI").style.opacity = "1";
            document.getElementById("mapGUI").style.height = "78vh";
            document.getElementById("NoteContainer").style.height = "16vh";
            document.getElementById("NoteContainer").style.opacity = "0.5";
            document.getElementById("firstRow").style.height = "calc(100% - 250px)";
            document.getElementById("dailyWeather").style.height = '250px';
            setTimeout(() => {
                document.getElementById("weatherContainer").style.paddingTop = '20px';
                document.getElementById("weatherContainer").style.paddingBottom = '20px';
            },200)
        } else {
            console.log("collapse");
            this.setState({expanded: false});
            document.getElementById("NoteContainer").style.opacity = "1";
            document.getElementById("mapGUI").style.height = "47vh";
            document.getElementById("NoteContainer").style.height = "47vh";
            document.getElementById("dailyWeather").style.height = '0px';
            document.getElementById("firstRow").style.height = "100%";
            document.getElementById("weatherContainer").style.paddingTop = '0px';
            document.getElementById("weatherContainer").style.paddingBottom = '0px';
        }
    }
}

export default MapInfo