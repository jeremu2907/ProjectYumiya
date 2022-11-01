import React, {Component} from 'react'
import './mapGUI.css'
import HourlyItem from './hourlyWeatherItem'
/* global moment */
export default class HourlyWeather extends Component {
    constructor(){
        super();

        this.state = {
            weatherData: "",
        }

        ////////////////////////////////////////////////////////////////////////////////////
        //                            TEST CODE
        ////////////////////////////////////////////////////////////////////////////////////
        fetch("http://localhost:5000/sampleWeatherData").then(resp => {
            return resp.json();
        }).then(data => {
            console.log(data)
            this.setState({weatherData: data.hourly})
        })

        ////////////////////////////////////////////////////////////////////////////////////
        //                            PRODUCTION CODE
        ////////////////////////////////////////////////////////////////////////////////////

        // if (navigator.geolocation) {
        //     navigator.geolocation.getCurrentPosition((LatLon) => {
                
        //         let lat = LatLon.coords.latitude;
        //         let lon = LatLon.coords.longitude;
        //         let apiCall = `https://api.openweathermap.org/data/3.0/onecall?lat=`+lat+`&lon=`+lon+`&exclude=minutely,daily,current,alerts&appid=`
        //         fetch("http://localhost:5000/wkey").then(resp => {
        //             return resp.json();
        //         }).then(data => {
        //             apiCall += data.val
        //         }).then(() => {
        //             fetch(apiCall)
        //             .then(response => {
        //                 // indicates whether the response is successful (status code 200-299) or not
        //                 if (!response.ok) {
        //                     throw new Error(`Request failed with status ${response.status}`)
        //                 }
        //                 return response.json()
        //             })
        //             .then(data => {
        //                 this.setState({weatherData: data.hourly.slice(0, 24)});
        //             })
        //             .catch(error => console.log(error))
        //         })
        //     });
        // } else {
        //     this.setState({nodata: true})
        //     console.log("Geolocation is not supported by this browser.");
        // }
    }
    styles = {
        position: 'relative', 
        backgroundColor:'rgba(0,0,0,0)', 
        width: '95%',
        height: "0px",
        alignSelf: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    }

    weatherInfoStyle = {
        overflowX: 'auto',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        overflowY: 'hidden',
    }

    render(){
        return(
            <div id="dailyWeather" style={this.styles} className='globalFont'>
                <div id="weatherContainer" style={this.weatherInfoStyle}>
                    {(this.state.weatherData === "")? <h1>Loading...</h1> : 
                        this.state.weatherData.map(hourData => <HourlyItem 
                            temp={hourData.temp}
                            time={moment.unix(hourData.dt).format('hh:mm A')}
                            date={moment.unix(hourData.dt).format("MMM/DD")}
                            humid={hourData.humidity}
                            desc={hourData.weather[0].description}
                            icon={hourData.weather[0].icon}
                        />)
                    }
                </div>
            </div>
        )
    }
}