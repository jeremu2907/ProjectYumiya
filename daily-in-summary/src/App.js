import React from 'react'
import './App.css'
import ToDoList from './Component/ToDoList/ToDoList.jsx'
import MapGUI from './Component/Map/MapGUI.jsx'
import DailyCard from './Component/DailyCard/DailyCard.jsx'


function App() {
  return (
    <div className = "content-area">
      <div className = "content-area-left">
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
