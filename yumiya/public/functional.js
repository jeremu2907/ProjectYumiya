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
    return await (await fetch(`${SERVER_URL}/db/getUserData?user=` + USER_EMAIL)).json()
}

async function updateUserData(){
  const resp = await fetch(`${SERVER_URL}/db/updateUserData`, { 
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

  const jsonData = await resp.json();
  return jsonData;
}