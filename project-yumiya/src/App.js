import React from 'react'
import './App.css'
import ToDoList from './Component/ToDoList/ToDoList.jsx'
import MapGUI from './Component/Map/MapGUI.jsx'
import DailyCard from './Component/DailyCard/DailyCard.jsx'
import {NewEvent} from "./NewEvent.jsx"

export function addEvent(){
  document.getElementById("addEvent").style.visibility = "visible"
}

function App() {
  return (
    <div>
      <div className = "content-area">
        <div id="dailyCard" className = "content-area-left">
          <DailyCard />
        </div>
        <div className = "content-area-right">
          <ToDoList className="noteArea"/>
          <MapGUI className="noteArea"/>
        </div>
      </div>
      <div id="addEvent" style = {{position: "fixed",top: "0px", height: "100vh", width: "100vw", backgroundColor: "rgba(20, 20, 20, 0.8)", visibility: "hidden"}}>
        {NewEvent()};
      </div>
    </div>
  );
}

export default App;
