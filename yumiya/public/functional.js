//Custom background on load
document.body.style.backgroundImage = window.localStorage.getItem("currBG");

//Selectively clearing localStorage
var localData = window.localStorage
for(var i in localData){
  if(i !== "currBG"){
    window.localStorage.removeItem(i)
  }
}

/* global USER_EMAIL */
async function getUserData(){
    return await (await fetch("https://ymysvr.jeremynguyen.tech/db/getUserData?user=" + USER_EMAIL)).json()
}

async function updateUserData(){
  fetch("https://ymysvr.jeremynguyen.tech/db/updateUserData", { 
    method: "POST" , 
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        user: USER_EMAIL,
        shortcutList: window.localStorage.getItem("shortcuts"),
        noteList: window.localStorage.getItem('state')
    })
  })
}