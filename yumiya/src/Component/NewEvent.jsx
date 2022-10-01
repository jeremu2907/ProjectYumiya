import React, { useState } from 'react'
import ItemTitlte from './ItemTitle'
import '../App.css'
import './NewEvent.css'

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete";


//Function will be called everytime user create new event
//Used to add local GMT to fit api time format
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
        borderRadius: "10px"
    }

    // function to put all details to localStorage to be included in http request
    const setEventInfo = () => {
      /* global gapi*/
      let name = document.getElementsByName("createEventName")[0].value
      let dateTime = document.getElementsByName("createEventDateTime")[0].value
      let location = document.getElementsByName("createEventLocation")[0].value
      let notes = document.getElementsByName("createEventNotes")[0].value

      //Time formatting///////////////////////////////////////////////////
      //Format reference 	yyyy-mm-ddTHH:mm:ss+00:00
      dateTime = dateTime.replace("  ","T")
      //add the current timezone to dateTime string ex: -05:00
      dateTime += appendTimeZone();
      let dateTimeEnd = (parseInt(dateTime.substr(11, 2)) + 1) % 24
      //If end date is a new day, add day
      let temp = dateTime
      if(dateTimeEnd === 0){
        temp = dateTime.substr(0,8) + (parseInt(dateTime.substr(8, 2)) + 1) % 31 + dateTime.substr(10,15)
      }
      if(Math.log10(dateTimeEnd) < 1)
      dateTimeEnd = '0' + dateTimeEnd
      // console.log(dateTime)
      // console.log(dateTimeEnd)
      dateTimeEnd = temp.substr(0,11) + dateTimeEnd + temp.substr(13,12)
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
      
      //Close NewEvent componenet
      document.getElementById("addEvent").style.visibility = "hidden"
        
    }
    const [address, setAddress] = React.useState("");
    const [setCoordinates] = React.useState({
      lat: null,
      lng: null
    });

    const handleSelect = async value => {
      const results = await geocodeByAddress(value);
      const latLng = await getLatLng(results[0]);
      setAddress(value);
      setCoordinates(latLng);
    };


    const [startDate, setStartDate] = useState(new Date());

    return(
            <div style = {styles} className="globalFont">
                <ItemTitlte color="#01b1da" text="Create New Event" />

                <h5>Name</h5>
                <input name="createEventName" type="text" className = "newEventBox"></input>

                <h5>Date and Time</h5>
                <DatePicker dateFormat = "yyyy-MM-dd'  'HH:mm:ss" className = "newEventBox" name="createEventDateTime" style = {{border: "0", width: "auto"}} selected={startDate} onChange={(date) => setStartDate(date)} showTimeSelect/>
                
                <h5>Location</h5>
                {/* <input name="createEventLocation" type="text" className = "newEventBox"></input> */}
                <PlacesAutocomplete
                  value={address}
                  onChange={setAddress}
                  onSelect={handleSelect}>
                  {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                    <div>

                      <input {...getInputProps({ placeholder: "Type address" })} name="createEventLocation" className = "newEventBox"/>

                      <div>
                        {loading ? <div>...loading</div> : null}

                        {suggestions.map(suggestion => {
                          // console.log(suggestions)
                          const style = {
                            backgroundColor: suggestion.active ? "#41b6e6" : "#fff",
                            width: "500px",
                            position: "float",
                            padding: "2px"
                          };

                          return (
                            <div {...getSuggestionItemProps(suggestion, { style })} key = {Math.random()*100000000}>
                              {suggestion.description}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </PlacesAutocomplete>
                
                <h5>Notes</h5>
                <textarea name="createEventNotes" style = {{height: "200px"}} className = "newEventBox"></textarea>
                
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: "space-evenly", marginTop: "10px"}}>
                    <button onClick={setEventInfo}>Add Event</button>
                    <button onClick={() => {document.getElementById("addEvent").style.visibility = "hidden"}}>Cancel</button>
                </div>
            </div>
    )
}