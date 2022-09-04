import React, {Component} from 'react'
import ItemTitle from '../ItemTitle.jsx'

class MapInfo extends Component{
    styles={
        position: 'relative',
        width: "30%",
        height: "calc(100% - 30px)",
        alignSelf: "flex-end",
        top:"30px"
    }
    render(){
        return(
            <div style={this.styles}>
                <ItemTitle color={"white"} text={'Map Info'} />
            </div>
        )
    }
}

export default MapInfo