import React from 'react'
import './App.css'
import ToDoList from './ToDoList.jsx'
import MapGUI from './MapGUI.jsx'
import DailyCard from './DailyCard.jsx'


function App() {
  return (
    <div className = "content-area">
      <div className = "content-area-right">
        <DailyCard />
      </div>
      <div className = "content-area-left">
        <ToDoList className="noteArea"/>
        <MapGUI className="noteArea"/>
      </div>
    </div>
  );
}

export default App;
