import React from 'react'
import './App.css'
import ToDoList from './ToDoList.jsx'
import MapGUI from './MapGUI.jsx'


function App() {
  return (
    <div className = "content-area">
      <ToDoList className="noteArea"/>
      <MapGUI />
    </div>
  );
}

export default App;
