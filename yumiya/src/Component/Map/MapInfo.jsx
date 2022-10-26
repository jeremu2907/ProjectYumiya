import React, {Component} from 'react'
import ItemTitle from '../ItemTitle.jsx'
import './weather.js'

class MapInfo extends Component{
    constructor(){
        super();

        this.state = {
            weatherData: "",
            currentWeatherData: "",
            desc: "",
            nodata: false,
            locationData: "No Event Selected",
        }

        // console.log(this.state.weatherData)

        //Get Current Location via geolocation then display data,
        //Else display nothing
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((LatLon) => {
                
                let lat = LatLon.coords.latitude;
                let lon = LatLon.coords.longitude;
                let apiCall = "https://api.openweathermap.org/data/3.0/onecall?lat="+lat+"&lon="+lon+"&exclude=minutely,daily,alerts&appid=413c4ae08ad7457250848cc6fc7a7fe4"
                
                fetch(apiCall)
                .then(response => {
                // indicates whether the response is successful (status code 200-299) or not
                if (!response.ok) {
                    throw new Error(`Request failed with status ${response.status}`)
                }
                return response.json()
                })
                .then(data => {
                    this.setState({weatherData: data.hourly.slice(0, 24)});
                    this.setState({currentWeatherData: data.current});
                    this.setState({desc: data.current.weather[0].description});
                    console.log(this.state.desc);
                })
                .catch(error => console.log(error))
            });
        } else {
            this.setState({nodata: true})
            console.log("Geolocation is not supported by this browser.");
        }

    }
    styles={
        position: 'relative',
        width: "30%",
        height: "calc(100% - 30px)",
        // alignSelf: "flex-end",
    }
    render(){
        return(
            <div style={this.styles}>
                <ItemTitle color={"#03d3fc"} text={'Map'} />
                <div style={{justifyContent:"center"}}>
                    <div style={{color:"white"}} className = "globalFont">
                        <p id="EventLocationName">No Event Selected</p>
                        <p id="EventLocation"></p>
                        <p id="EventDistance"></p>
                        <p id="EventETA"></p>

                    </div>
                        
                </div>
                <ItemTitle color={"#03d3fc"} text={'Weather'} />
                <div style={{justifyContent:"center"}}>
                    {this.state.nodata ?
                        <p style={{color:"white"}} className = "globalFont">{this.state.nodata}</p>

                    :   <div style={{color:"white"}} className = "globalFont">
                            <p>{this.temperatureString()}</p>
                            <p>{this.getWeatherDesc()}</p>
                        </div>
                    }
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

    // handleClick = () => {
    //     console.log("hello");
    //     fetch("http://127.0.0.1:5000/")
    //         .then(response => { console.log(response)})
    // }

}

export default MapInfo