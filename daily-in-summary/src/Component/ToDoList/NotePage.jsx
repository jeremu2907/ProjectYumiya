import React, {Component} from 'react'

class NotePage extends Component{
    state = {
        page: 1
    }

    pageCircle = {
        position: "relative",
        backgroundColor : "rgb(224, 96, 49)",
        height: "20px",
        width: "20px",
        borderRadius: "10px",
        left: "50%",
        marginLeft: "10px"
    }

    render(){
        return(
            <div style = {{display: "flex", flexDirection: "row", alignItems: "flexStart"}}>
                <div style={this.pageCircle}></div>
                <div style={this.pageCircle}></div>
                <div style={this.pageCircle}></div>
                <div style={this.pageCircle}></div>
            </div>
        )
    }
}

export default NotePage