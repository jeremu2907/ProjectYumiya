import React, {Component} from 'react'

export default class Gmap extends Component{
    render(){
        return(
            <div style={{height: "95%", width : "65%"}}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13734.763990317664!2d-96.35452724999999!3d30.614477849999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1662340469758!5m2!1sen!2sus" 
                width="100%" height="100%" style={{border:0}}
                title="temporary map"></iframe>
            </div>
        )
    }
}