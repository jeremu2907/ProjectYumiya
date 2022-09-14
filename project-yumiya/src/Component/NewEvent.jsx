import React, { useState } from 'react'
import ItemTitlte from './ItemTitle'
import '../App.css'
import './NewEvent.css'

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function appendTimeZone(){
  let offset = new Date().getTimezoneOffset()
  offset = offset / 60
  let append = ""
  if(offset > 0){
    append += '-'
  }
  else{
    append += "+"
  }
  offset = Math.abs(offset)
  if(Math.log10(offset) < 1){
    append += "0"
  }
  append += offset + ":00"
  return append
}

export function NewEvent() {
    let styles = { position: "fixed",
        height: "auto",
        width: "auto",
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        padding: "30px",
        fontSize: "24px",
        borderRadius: "30px"
    }

    // function to put all details to localStorage to be included in http request
    const setEventInfo = () => {
        /* global gapi*/
        let name = document.getElementsByName("createEventName")[0].value
        let dateTime = document.getElementsByName("createEventDateTime")[0].value
        let location = document.getElementsByName("createEventLocation")[0].value
        let notes = document.getElementsByName("createEventNotes")[0].value

        //Time formatting///////////////////////////////////////////////////
        dateTime = dateTime.replace("  ","T")
        //add the current timezone to dateTime string ex: -05:00
        dateTime += appendTimeZone();
        let dateTimeEnd = (parseInt(dateTime.substr(11, 2)) + 1)
        if(Math.log10(dateTimeEnd) < 1)
        dateTimeEnd = '0' + dateTimeEnd
        // console.log(dateTime)
        // console.log(dateTimeEnd)
        dateTimeEnd = dateTime.substr(0,11) + dateTimeEnd + dateTime.substr(13,12)
        // console.log(dateTimeEnd)
        var event = {
            'summary': name,
            'location': location,
            'description': notes,
            'start': {
                'dateTime': dateTime,
            },
            'end': {
              'dateTime': dateTimeEnd
            },
          };
          
          var request = gapi.client.calendar.events.insert({
            'calendarId': 'primary',
            'resource': event
          });
          
          request.execute(function(event) {
            if(event.error || event === false){
                        alert("Failed to add event")
                    }
          });

        // const eventDetail = {
        //     "summary": name,
        //     "start":{
        //         "dateTime": dateTime.substr(0, dateTime.indexOf(',')).replace('/','-'),
        //     },
        //     // "eventTime": dateTime.substr(dateTime.indexOf(',') + 2, dateTime.length - dateTime.indexOf(',')),
        //     "location": location,
        //     "description": notes
        // }
        // // console.log(eventDetail)
        document.getElementById("addEvent").style.visibility = "hidden"
        // // window.localStorage.setItem("createNewEvent",JSON.stringify(eventDetail))
        // // const event = JSON.parse(window.localStorage.getItem("createNewEvent"));
        // /* global gapi*/
        // var request = gapi.client.calendar.events.insert({
        //     'calendarId': 'primary',
        //     'resource': eventDetail
        // });
        // request.execute(function(response) {
        //     if(response.error || response === false){
        //         alert("Failed to add event")
        //     }
        // });
    }
    const [startDate, setStartDate] = useState(new Date());
    return(
            <div style = {styles} className="globalFont">
                <ItemTitlte color="#01b1da" text="Create New Event" />
                <h5>Name</h5>
                <input name="createEventName" type="text" className = "newEventBox"></input>
                <h5>Date and Time</h5>
                <DatePicker dateFormat = "yyyy-MM-dd'  'hh:mm:ss" className = "newEventBox" name="createEventDateTime" style = {{border: "0", width: "auto"}} selected={startDate} onChange={(date) => setStartDate(date)} showTimeSelect/>
                <h5>Location</h5>
                <input name="createEventLocation" type="text" className = "newEventBox"></input>
                <h5>Notes</h5>
                <textarea name="createEventNotes" style = {{height: "200px"}} className = "newEventBox"></textarea>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: "space-evenly", marginTop: "10px"}}>
                    <button onClick={setEventInfo}>Add Event</button>
                    <button onClick={() => {document.getElementById("addEvent").style.visibility = "hidden"}}>Cancel</button>
                </div>
            </div>
    )
}