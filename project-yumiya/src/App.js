import React from 'react'
import './App.css'
import ToDoList from './Component/ToDoList/ToDoList.jsx'
import MapGUI from './Component/Map/MapGUI.jsx'
import DailyCard from './Component/DailyCard/DailyCard.jsx'

// function checkEvent(){
//   while(!window.localStorage.getItem("eventList"))
//     console.log("nothing")
//   return "<DailyCard />"
// } 

function App() {
  return (
    <div className = "content-area">
      {/* <img src={require("./icon.png")} className="logo" alt="logo"></img> */}
      {/* <div src={require("./icon.png")} className="logo" alt="logo"></div> */}
      <div id="dailyCard" className = "content-area-left">
        <DailyCard />
      </div>
      <div className = "content-area-right">
        <ToDoList className="noteArea"/>
        <MapGUI className="noteArea"/>
      </div>
    </div>
    
  );
}

export default App;
