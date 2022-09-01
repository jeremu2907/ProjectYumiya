import React, {Component} from 'react'
import ItemTitle from '../ItemTitle.jsx'

class MapInfo extends Component{
    styles={
        position: 'relative',
        width: "30%",
        height: "100%",
        alignSelf: "flex-end",
        borderLeft: "solid 2px white",
        
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