import React, {Component} from 'react'
import '../ItemTitle.css'
import './CalendarItem.css'
import { SERVER_URL } from '../../global'
/*global moment*/
/*global google*/

class CalendarItem extends Component{

    state = {
        status : false,
        detail : false
    }

    styles = {
        position: "relative",
        height: "auto",
        width: "calc(97% - 30px)",
        backgroundColor: "rgba(0,0,0, 0.7)",
        // borderRadius: "30px",
        // marginBottom: "10px",
        overflowWrap: "anywhere",
        overflowX: "hidden",
        color: "white",
        padding: "15px",
        minHeight: "100px",
        borderTop: "solid 1px grey"
    }

    title = {
        position: "relative",
        margin: "0px 0px 0px 20px"
    }

    eventDetail = {
        position: "relative",
        
    }

    deleteIndic = {
        position: "relative",
        height: "15px", width: "15px",
        borderRadius: "7.5px",
        backgroundColor: "rgba(255, 255, 255, 0.05)",
        border: "solid 1px rgba(255, 255, 255, 0.2)"
    }

    render(){
        return(
            <div style = {this.styles} className="box" onClick={this.selectDetail}>
                {/* Selection indicator */}
                <div style = {{display: "flex", flexDirection: "row"}}>
                <div id = {this.props.id} style = {this.deleteIndic} onClick={this.selectItemAction}></div>
                <h3 style = {this.title} className = "globalFont">{this.props.name}</h3>
                </div>
                {/* Props passed in from DailyCard.jsx */}
                <div className = "globalFont" style={{paddingLeft: "10px"}}>
                    <div style={{color: "#03d3fc"}}>
                        {(this.props.time === undefined)? <p>{this.props.date}</p> : ((this.props.time.indexOf("T") === -1)? <p style={{marginBottom: "0px"}}>{this.props.time}</p> : <p style={{marginBottom: "0px"}}>{this.props.time.substr(0, this.props.time.indexOf("T"))}</p>)}
                    </div>
                    {(this.props.time === undefined || this.props.time.indexOf("T") === -1)? "" : <p style={{marginTop: "0px", fontSize: "12px"}}>{this.props.time.substr(this.props.time.indexOf("T") + 1, 5)}</p>}
                    {(this.props.location === "")? "" : <p>{this.props.location}</p>}
                    {(this.props.description === "")? "" : <p>{this.props.description}</p>}
                </div>
            </div>
        )
    }

    // When the event is clicked mark the event and pass signal to DailyCard, waiting to be removed
    selectItemAction = () => {
        this.props.parentCallback(this.props.id, this.props.calID, this.state.status)
        if(!this.state.status)
            document.getElementById(this.props.id).style.backgroundColor = "#03d3fc"
        else
            document.getElementById(this.props.id).style.backgroundColor = "rgba(255, 255, 255, 0.05)"
        
        this.setState({status: !this.state.status})
    }

    //Still needs to check if we have moved location before assigning html
    setDetail = (data, lat, lon) => {
        if(data.rows[0].elements[0].distance.value !== undefined)
            document.getElementById("EventDistance").innerHTML = "Distance: " + (data.rows[0].elements[0].distance.value/1000).toFixed(2) + " km | " + (data.rows[0].elements[0].distance.value/1609).toFixed(2) + " mi";
        else
            document.getElementById("EventDistance").innerHTML = "";

        if(data.rows[0].elements[0].duration !== undefined){
            document.getElementById("EventDuration").innerHTML = "Duration: " + data.rows[0].elements[0].duration.text;
            let eta = Date.now() + data.rows[0].elements[0].duration.value * 1000; //In millisecond
            document.getElementById("EventETA").innerHTML = "ETA: " + moment(eta).format('hh:mm A');
            
            //Display location on map and route
            var directionsService = new google.maps.DirectionsService();
            var directionsRenderer = new google.maps.DirectionsRenderer();
            let map;

           
            map = new google.maps.Map(document.getElementById("map"),
                {
                    center: {
                        lat: lat,
                        lng: lon
                    },
                    zoom: 15, 
                    mapTypeId: google.maps.MapTypeId.ROADMAP
                }
            )

            directionsRenderer.setMap(map);
            let rorigin = data.origin_addresses[0];
            let rdestination = data.destination_addresses[0];
            let request = {
                origin: rorigin,
                destination: rdestination,
                travelMode : 'DRIVING'
            }
            directionsService.route(request, (result, status) => {
                if (status === 'OK') {
                directionsRenderer.setDirections(result);
                }
            });
        }
    }

    selectDetail = () => {
        //When selecting an event, map info will display information
        //And eta, distance
        if(this.props.name !== undefined){
            document.getElementById("EventLocationName").innerHTML = this.props.name;
        }
        else{
            document.getElementById("EventLocationName").innerHTML = "Event Has No Name";
        }

        //Default value if there is no infomation
        document.getElementById("EventDistance").innerHTML = "No distance info";
        document.getElementById("EventDuration").innerHTML = "No estimated travel duration";
        document.getElementById("EventETA").innerHTML = "No ETA"

        if(this.props.location !== undefined){

            //While fetching from server, display loading
            document.getElementById("EventDistance").innerHTML = "Loading...";
            document.getElementById("EventDuration").innerHTML = "";
            document.getElementById("EventETA").innerHTML = "";

            document.getElementById("EventLocation").innerHTML = this.props.location;

            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition((coord) => {

                    //Finds in local storage first to avoid calling api
                    let data = JSON.parse(window.localStorage.getItem(this.props.id));
                    if(data !== null){
                        console.log("Event in cache")
                        this.setDetail(data, coord.coords.latitude, coord.coords.longitude);
                        return;
                    } else {
                        console.log("Event not in cache")
                    }

                    //Calling API if geolocation is enabled
                    // fetch("http://localhost:5050/eta?destination=" + this.props.location + "&lat=" + coord.coords.latitude + "&lon=" + coord.coords.longitude)
                    fetch(`${SERVER_URL}/eta?destination=` + this.props.location + "&lat=" + coord.coords.latitude + "&lon=" + coord.coords.longitude)
                    .then((resp) => {
                        return resp.json();
                    }).then((data) => {
                        window.localStorage.setItem(this.props.id, JSON.stringify(data));
                        this.setDetail(data);
                    })
                });
            } else {
                document.getElementById("map").innerHTML = "Geolocation is not supported by this browser.";
            }
        }
        else{
            document.getElementById("EventLocation").innerHTML = "No Location Information";
        }


    }
}

export default CalendarItem;