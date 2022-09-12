import React, { useState } from 'react'
import ItemTitlte from './Component/ItemTitle'
import './App.css'

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

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
    const [startDate, setStartDate] = useState(new Date());
    return(
            <div style = {styles} className="globalFont">
                <ItemTitlte color="#01b1da" text="Create New Event" />
                <h5>Name</h5>
                <input type="text"></input>
                <h5>Date and Time</h5>
                <DatePicker style = {{border: "0", width: "auto"}} selected={startDate} onChange={(date) => setStartDate(date)} showTimeSelect dateFormat="Pp"/>
                <h5>Location</h5>
                <input type="text"></input>
                <h5>Notes</h5>
                <textarea style = {{height: "100px"}}></textarea>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: "space-evenly", marginTop: "10px"}}>
                    <button>Add Event</button>
                    <button onClick={() => {document.getElementById("addEvent").style.visibility = "hidden"}}>Cancel</button>
                </div>
            </div>
    )
}