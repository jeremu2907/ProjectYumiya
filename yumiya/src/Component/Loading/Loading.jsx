import React from 'react'
import './Loading.css'

function Loading() {
  return (
    <div style={{position: "absolute", height: "100%", width: "100%", zIndex: "5",
                display: "flex", justifyContent:"center", alignItems: "center"}}>
        <img className="loading" src="./iconLogin.png" alt="loading"></img>
    </div>
  );
}

export default Loading;