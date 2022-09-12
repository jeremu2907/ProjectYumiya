import React, {Component} from 'react'
import ItemTitle from "../ItemTitle.jsx"
import CalendarItem from "./CalendarItem.jsx"
import {listUpcomingEvents} from "./updateEvent.js"
import "../ToDoList/TextArea.css"
import './DailyCard.css'

class DailyCard extends Component{
    constructor(props){
        super(props)

        this.state = {
            selectedEvents: new Set(),
            eventList: {}
        }

        
    }

    styles = {
        height: "94%",
        width: "60%",
        backgroundColor: "rgba(20, 20, 20, 0.77)",
        border: "solid 2px #262524",
        padding: "10px",
        minWidth: "189px"
    }

    flexBoxStyle = {
        position: "relative",
        height: "calc(90% - 60px)",
        width: "calc(100%-20px)",
        overflow: "auto",
        borderTopLeftRadius: "30px",
        borderBottomLeftRadius: "30px",
    }

    title = {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent:"center",
        marginBottom: "30px",
        marginTop: "30px"
    }

    eventModifyAdd = () => {
        document.getElementById("addEvent").style.visibility = "visible"
    }

    eventModifySub = () => {
        /* global gapi */
        let a = Array.from(this.state.selectedEvents)
        for(let i = 0; i < a.length; i++){
            console.log(a[i]);
            var request = gapi.client.calendar.events.delete({
                'calendarId': 'c15306c1epdedq0ag8rgci6i8s@group.calendar.google.com',
                'eventId': a[i]
            });
            request.execute(function(response) {
                if(response.error || response === false){
                    alert("Failed to delete one or more events")
                }
            });
        };
        
        this.setState({selectedEvents: new Set()});
    }

    

    render(){
        // const d = new Date();
        // let cardTitle = "Today " + (d.getMonth() + 1) + " | " + d.getDate();
        let cardTitle = "Upcoming events";
        return(
            <div style = {this.styles}>
                <div style = {this.title}>
                    <ItemTitle color="#03d3fc" text= {cardTitle}/>
                    <img src={require("../ButtonSet/subButton.png")} alt="sub button"  
                            style={{marginLeft:"auto", marginRight:"10px",scale: "0.5"}}
                            onClick={this.eventModifySub}
                            className = "AddSubButton"/>
                    <img src={require("../ButtonSet/addButton.png")} alt="add button" 
                            style={{scale: "0.5"}} 
                            onClick={this.eventModifyAdd}
                            className = "AddSubButton"/>
                </div>

                <div style = {this.flexBoxStyle} className="flexBoxStyle">
                    {/* This will keep updating if there promise is not resolved (called at ../../public/index.js when
                    user log in) */}
                    {   !JSON.parse(window.localStorage.getItem("eventList")) ||
                        JSON.parse(window.localStorage.getItem("eventList"))   
                            .map(event => <CalendarItem 
                                key={event.id} 
                                // key={Math.random()}
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

    //This funciton is for updating the calendar automatically 
    componentDidMount(){
        setInterval(() => {
            listUpcomingEvents()
            this.forceUpdate()
        },1000)
    }
    handleUserSelection = (selected) => {
        this.state.selectedEvents.add(selected)
        this.setState({selectedEvents: this.state.selectedEvents})
        // listUpcomingEvents().then(events => {
        //     this.setState({eventList: events})
        // })
    }
}

export default DailyCard;