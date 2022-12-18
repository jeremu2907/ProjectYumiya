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
    return await (await fetch("http://localhost:5050/db/getUserData?user=" + USER_EMAIL)).json()
}

// async () => {
//   return await fetch("http://localhost:5050/db/getUserData?user=" + USER_EMAIL)
//   // .then(response => {
//   //   return response.json()
//   // })
//   // .then(data => {
//   //   console.log(data)
//   //   return data
//   // })
// }

async function updateUserData(){
  fetch("http://localhost:5050/db/updateUserData", { 
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