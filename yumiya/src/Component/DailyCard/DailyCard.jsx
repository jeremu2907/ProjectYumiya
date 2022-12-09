import React, {Component} from 'react'
// import ItemTitle from "../ItemTitle.jsx"
import $ from 'jquery'
import CalendarItem from "./CalendarItem.jsx"
import {listUpcomingEvents} from "./updateEvent.js"
import './DailyCard.css'
import '../ButtonSet/button.css'

class DailyCard extends Component{
    constructor(props){
        super(props)

        this.state = {
            selectedEvents: new Set(),
            eventList: []
        }
    }

    styles = {
        height: "calc(96vh + 2.5px)",
        width: "calc(95% - 20px)",
        backgroundColor: "rgba(0,0,0, 0.7)",
        padding: "10px",
        paddingTop: "0",
        minWidth: "189px",
        // borderRadius: "10px",
    }

    flexBoxStyle = {
        position: "relative",
        height: "calc(90% - 20px)",
        width: "calc(100%-20px)",
        overflow: "auto",
        // borderTopLeftRadius: "30px",
        // borderBottomLeftRadius: "30px",
    }

    title = {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent:"center",
        marginBottom: "10px",
        marginTop: "10px",
    }

    eventModifyAdd = () => {
        document.getElementById("addEvent").style.visibility = "visible";
    }

    eventModifySub = async () => {
        /* global gapi */
        let a = Array.from(this.state.selectedEvents)
        //Perform delete on every event that is selected
        for(let i = 0; i < a.length; i++){
            console.log(a[i]);
            var request = gapi.client.calendar.events.delete({
                'calendarId': 'primary',
                'eventId': a[i]
            });
            request.execute((response) => {
                if(response.error || response === false){
                    alert("Failed to delete one or more events")
                }
                this.rret();
            });
        };
        //Reset selected events to 0
        this.setState({selectedEvents: new Set()});
    }

    

    render(){
        return(
            <div id="DailyCardContainer" style = {this.styles}>
                <div style = {this.title}>
                    {/* <ItemTitle color="#03d3fc" text= {cardTitle}/> */}
                    <div style={{position: 'relative'}}>
                        <h1 style={{fontSize: '30px',color:'white',fontWeight: 'normal',margin: '0'}} 
                            className="globalFont">{this.getTime().format('hh:mm A')}</h1>
                        <p style={{margin: '0', color:'#03d3fc'}} className='globalFont'>{this.getTime().format("dddd MMM/DD")}</p>
                    </div>

                    <button style={{marginLeft:"auto", marginRight:"10px"}}
                            onClick={this.eventModifySub}
                            className = "AddSubButton">
                            -
                    </button>
                    <button 
                            onClick={this.eventModifyAdd}
                            className = "AddSubButton">
                            +
                    </button>
                    <button className = "AddSubButton" onClick={this.rret}>↻</button>
                </div>

                <div style = {this.flexBoxStyle} className="flexBoxStyle">
                    {/* This will keep updating if there promise is not resolved (called at ../../public/index.js when
                    user log in) */}
                    {/* {   !JSON.parse(window.localStorage.getItem("eventList")) ||
                        JSON.parse(window.localStorage.getItem("eventList"))    */}
                    {
                        (this.state.eventList.length === 0)?
                        <CalendarItem name="Loading Events..."/>
                        :
                        this.state.eventList
                            .map(event => <CalendarItem 
                                key={event.id} 
                                name={event.name}
                                date={event.date}
                                time={event.dateTime}
                                location={event.location}
                                description={event.description}
                                id={event.id}
                                parentCallback = {this.handleUserSelection}
                                />)
                    }
                </div>
            </div>
        )
    }

    getTime(){
        /*global moment*/
        return moment(Date.now())
    }

    rret = () => {
        console.log('Calendar Refresh')
        listUpcomingEvents().then((value) => {
            if(value !== 1){
                // this.forceUpdate();
                this.setState({eventList: value})
            }
        })
    }

    //This funciton is for updating the calendar automatically every 1minute
    componentDidMount(){
        /*global logged*/
        let tryLoad = setInterval(() => {
            if(logged === true)
                this.rret()
            if(this.state.eventList.length !== 0)
                clearInterval(tryLoad)
        },2000)

        //query in newEvent.jsx
        $("#setNewEvent").on('click',() => {
            setTimeout(() => {
                this.rret();
            },2000);
        });

        setInterval(()=>{ 
            this.rret()
        },1000 * 60)
    }
    handleUserSelection = (selected, status) => {
        if(!status)
            this.state.selectedEvents.add(selected)
        else
            this.state.selectedEvents.delete(selected)
    }
}

export default DailyCard;