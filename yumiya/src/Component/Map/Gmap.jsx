import React, {Component} from 'react'
import './map.css'

/*global google*/

export default class Gmap extends Component{
    render(){
        return(
            <div id="map"style={{position: "relative", height: "90%", width : "100%", alignSelf: "center"}}>
            </div>
        )
    }

    componentDidMount(){
        if (navigator.geolocation) {

            navigator.geolocation.getCurrentPosition((coord) => {
                // eslint-disable-next-line
                var directionsRenderer = new google.maps.DirectionsRenderer();
                // eslint-disable-next-line
                const map = new google.maps.Map(document.getElementById("map"),
                    {
                        center: new google.maps.LatLng(coord.coords.latitude, coord.coords.longitude),
                        zoom: 15, 
                        mapTypeId: google.maps.MapTypeId.ROADMAP
                    }
                )
            })
            document.getElementById("map").innerHTML = "Map Loading..."

        } else {
            document.getElementById("map").innerHTML = "Geolocation is not supported by this browser.";
        }
    }
}