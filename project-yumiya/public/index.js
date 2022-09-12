/* exported gapiLoaded */
/* exported gisLoaded */
/* exported handleAuthClick */
/* exported handleSignoutClick */

// TODO(developer): Set to client ID and API key from the Developer Console
const CLIENT_ID = '461862675457-a3lrck82d2d9j0jq9srot6es33gsq86u.apps.googleusercontent.com';
const API_KEY = 'AIzaSyC_kenObLSxyH_DyPx2nIV5eQIsNHDZtW0';

// Discovery doc URL for APIs used by the quickstart
const DISCOVERY_DOC = 'https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest';

// Authorization scopes required by the API; multiple scopes can be
// included, separated by spaces.
const SCOPES = 'https://www.googleapis.com/auth/calendar';

let tokenClient;
let gapiInited = false;
let gisInited = false;

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
    document.getElementById("root").style.visibility = "visible";
    document.getElementById("logo").style.visibility = "hidden"
    // window.localStorage.removeItem("eventList")
    window.localStorage.setItem("eventList",JSON.stringify(await listUpcomingEvents()));
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
  document.getElementById('authorize_button').innerText = 'Refresh';
  document.getElementById('authorize_button').style.top = "0px";
  document.getElementById('authorize_button').style.left = "0px";
  document.getElementById('authorize_button').style.transform = "translate(0,0)"
  document.getElementById('authorize_button').style.fontSize = "20px"
  document.getElementById('authorize_button').style.padding = "5px"
}


/**
* Callback after api.js is loaded.
*/
function gapiLoaded() {
    gapi.load('client', intializeGapiClient);
}

/**
* Callback after the API client is loaded. Loads the
* discovery doc to initialize the API.
*/
async function intializeGapiClient() {
    await gapi.client.init({
    apiKey: API_KEY,
    discoveryDocs: [DISCOVERY_DOC],
    });
    gapiInited = true;
    maybeEnableButtons();
}

/**
* Callback after Google Identity Services are loaded.
*/
function gisLoaded() {
    tokenClient = google.accounts.oauth2.initTokenClient({
    client_id: CLIENT_ID,
    scope: SCOPES,
    callback: '', // defined later
    });
    gisInited = true;
    maybeEnableButtons();
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
      'calendarId': 'c15306c1epdedq0ag8rgci6i8s@group.calendar.google.com',
      'timeMin': (new Date()).toISOString(),
      'showDeleted': false,
      'singleEvents': true,
      'maxResults': 10,
      'orderBy': 'startTime',
  };
  response = await gapi.client.calendar.events.list(request);
  } catch (err) {
      console.log(err.message);
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
          id : events[i].id,
          location: events[i].location,
          description: events[i].description
      }

      eventList.push(event)
  }

  return eventList;
}