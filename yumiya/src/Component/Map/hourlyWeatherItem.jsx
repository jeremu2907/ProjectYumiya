import React, {Component} from 'react'

export default class HourlyItem extends Component{

    styles = {
        marginLeft:'40px',
        color: 'white',
        width: 'auto',
        borderRight: '2px solid white'
    }

    render(){
        return(
            <div style={this.styles}>
                <div style={{ marginTop:'0px',fontSize: '20px',width: '250px'}}>{this.props.time}</div>
                <p style={{fontSize: '13px', marginTop: '0', color: '#03d3fc'}}>{this.props.date}</p>
                <p>Temp: {this.tempString()}</p>
                {(this.props.rain !== "")? <p>Rain: {this.props.rain}</p> : <p>No rain</p>}
                <p>Humidity: {this.props.humid}%</p>
                <p>Summary: {this.props.desc}</p>
            </div>
        )
    }

    tempString(){
        let kelvin = this.props.temp;
        let cel = (kelvin - 273.15).toFixed(1);
        let far = (cel * 9/5 + 32).toFixed(1);
        let ret = `${cel} °C | ${far} °F`;
        return ret;
    }
}