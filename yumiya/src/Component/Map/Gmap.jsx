import React, {Component} from 'react'

export default class Gmap extends Component{
    constructor(){
        super();
        this.state = {
            url:""
        }
    }
      
    render(){
        return(
            <div id="map"style={{height: "95%", width : "65%"}}>
                {(this.state.url !== "")? <iframe src={this.state.url} 
                width="100%" height="100%" style={{border:0}}
                title="temporary map"></iframe>
                :
                <h1>Map loading...</h1>}
            </div>
        )
    }

    componentDidMount(){
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((coord) => {
                this.setState({url: "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d6700!2d"+coord.coords.longitude.toString()+"!3d"+coord.coords.latitude.toString()+"!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1662340469758!5m2!1sen!2sus"})
            });

        } else {
            document.getElementById("map").innerHTML = "Geolocation is not supported by this browser.";
        }
    }
}