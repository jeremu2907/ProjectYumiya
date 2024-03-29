import React from 'react'
import './App.css'
import ToDoList from './Component/ToDoList/ToDoList.jsx'
import MapGUI from './Component/Map/MapGUI.jsx'
import DailyCard from './Component/DailyCard/DailyCard.jsx'
import {NewEvent} from "./Component/NewEvent.jsx"
import Menu from './Component/Menu/Menu.jsx'

function App() {
  return (
    <div style={{height: "100vh", width: "100vw"}}>
      <Menu/>
      <div className = "content-area">
        <div id="dailyCard" className = "content-area-left">
          <DailyCard />
        </div>
        <div id="content-area-right" className = "content-area-right">
          <ToDoList className="noteArea"/>
          <MapGUI className="noteArea"/>
        </div>
      </div>
      <div id="addEvent" style = {{position: "fixed",top: "0px", height: "100vh", width: "100vw", backgroundColor: "rgba(20, 20, 20, 0.8)", visibility: "hidden", backdropFilter: "blur(2px)"}}>
        {NewEvent()};
        {/* {console.log(process.env.API_KEY)} */}
      </div>
    </div>
  );
}

export default App;
