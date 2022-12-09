/* exported gapiLoaded */
/* exported gisLoaded */
/* exported handleAuthClick */
/* exported handleSignoutClick */

// TODO(developer): Set to client ID and API key from the Developer Console

// Discovery doc URL for APIs used by the quickstart
const DISCOVERY_DOC = 'https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest';

// Authorization scopes required by the API; multiple scopes can be
// included, separated by spaces.
const SCOPES = 'https://www.googleapis.com/auth/calendar https://www.googleapis.com/auth/calendar.events';

let tokenClient;
let gapiInited = false;
let gisInited = false;
let logged = false;

// document.getElementById('authorize_button').style.visibility = 'hidden';
// document.getElementById('signout_button').style.visibility = 'hidden';

// Signs user in
function handleAuthClick() { 
    tokenClient.callback = async (resp) => {
      if (resp.error !== undefined) {
        throw (resp);
      }
      //document.getElementById('signout_button').style.visibility = 'visible';
      unlockPage();
      console.log("App Start")
      document.getElementById("root").style.visibility = "visible";
      logged = true;
      // document.getElementById("logo").style.visibility = "hidden";
      // window.localStorage.setItem("eventList",JSON.stringify(await listUpcomingEvents()));
      console.clear();
    };

  if (gapi.client.getToken() === null) {
    // Prompt the user to select a Google Account and ask for consent to share their data
    // when establishing a new session.
    tokenClient.requestAccessToken({prompt: 'consent'});
  } else {
    // Skip display of account chooser and consent dialog for an existing session.
    tokenClient.requestAccessToken({prompt: ''});
  }
}

function unlockPage(){
  // document.getElementById('authorize_button').innerText = 'Refresh';
  // document.getElementById('authorize_button').style.top = "0px";
  // document.getElementById('authorize_button').style.left = "0px";
  // document.getElementById('authorize_button').style.transform = "translate(0,0)"
  // document.getElementById('authorize_button').style.fontSize = "20px"
  // document.getElementById('authorize_button').style.padding = "5px"
  document.getElementById('authorize_button').style.visibility = 'hidden';
  document.getElementById('login-container').style.visibility = 'hidden';
  // document.getElementById('login-container').style.left = '0';
  // document.getElementById('login-container').style.marginLeft = '2px';
  // document.getElementById('logo').style.fontSize = '10px';
  // document.getElementById('login-container').style.transform = 'translate(0,0)'
}


/**
* Callback after api.js is loaded.
*/
function gapiLoaded() {
    try{
      gapi.load('client', intializeGapiClient);
    } catch {
      console.log("Not Logged in");
    }
}

/**
* Callback after the API client is loaded. Loads the
* discovery doc to initialize the API.
*/
async function intializeGapiClient() {
  var API_KEY = "x";

  fetch("http://localhost:5050/id").then(resp => {
    return resp.json();
  }).then((data) => {
    API_KEY = data.val2;
  }).then(async () => {
    try{
      await gapi.client.init({
      apiKey: API_KEY,
      discoveryDocs: [DISCOVERY_DOC],
      });
      gapiInited = true;
      maybeEnableButtons();
    } catch {
      console.log("User not logged in")
    }
  })
}

/**
* Callback after Google Identity Services are loaded.
*/
function gisLoaded() {
  var CLIENT_ID = "x";

  fetch("http://localhost:5050/id").then(resp => {
    return resp.json();
  }).then((data) => {
    CLIENT_ID = data.val1;
  }).then(() => {
    try {
      tokenClient = google.accounts.oauth2.initTokenClient({
      client_id: CLIENT_ID,
      scope: SCOPES,
      callback: '', // defined later
      });
      gisInited = true;
      maybeEnableButtons();
    } catch {
  
    }
  })
}

/**
* Enables user interaction after all libraries are loaded.
*/
function maybeEnableButtons() {
    if (gapiInited && gisInited) {
    document.getElementById('authorize_button').style.visibility = 'visible';
    }
}

/**
*  Sign out the user upon button click.
// */
// function handleSignoutClick() {
//     const token = gapi.client.getToken();
//     if (token !== null) {
//     google.accounts.oauth2.revoke(token.access_token);
//     gapi.client.setToken('');
//     document.getElementById('content').innerText = '';
//     document.getElementById('authorize_button').innerText = 'Authorize';
//     document.getElementById('signout_button').style.visibility = 'hidden';
//     }
// }

/**
* Print the summary and start datetime/date of the next ten events in
* the authorized user's calendar. If no events are found an
* appropriate message is printed.
*/
async function listUpcomingEvents() {
  /* global gapi */
  let response;
  try {
  const request = {
      'calendarId': 'primary',
      'timeMin': (new Date()).toISOString(),
      'showDeleted': false,
      'singleEvents': true,
      'maxResults': 10,
      'orderBy': 'startTime',
  };
  response = await gapi.client.calendar.events.list(request);
  } catch (err) {
    console.log("Not Logged in");
    return;
  }

  const events = response.result.items;
  if (!events || events.length === 0) {
      console.log( 'No events found.');
      return;
  }
  
  let eventList = Array()
  for(let i = 0; i < events.length; i++){
      const event = {
          name : events[i].summary,
          dateTime : events[i].start.dateTime,
          date : events[i].start.date,
          id : events[i].id,
          location: events[i].location,
          description: events[i].description
      }

      eventList.push(event)
  }

  return eventList;
}
