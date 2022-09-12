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
                <h1>Name</h1>
                <input type="text"></input>
                <h1>Date and Time</h1>
                <DatePicker style = {{border: "0", width: "auto"}} selected={startDate} onChange={(date) => setStartDate(date)} showTimeSelect dateFormat="Pp"/>
                <h1>Location</h1>
                <input type="text"></input>
                <h1>Notes</h1>
                <textarea style = {{height: "100px"}}></textarea>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: "space-evenly"}}>
                    <button>Add Event</button>
                    <button onClick={() => {document.getElementById("addEvent").style.visibility = "hidden"}}>Cancel</button>
                </div>
            </div>
    )
}