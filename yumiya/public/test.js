
var logged = false
const SCOPES = "https://www.googleapis.com/auth/calendar https://www.googleapis.com/auth/calendar.events";
const DISCOVERY_DOC = ['https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'];
let tokenClient

async function handleCredentialResponse(response) {
    try{
        await tokenClient.requestAccessToken();
        await gapi.load('client', start);

    } catch (e) {}
}
window.onload = function () {
    fetch("http://localhost:5050/id").then(resp => {
  // fetch("https://calendar-342103.uc.r.appspot.com/id").then(resp => {
    return resp.json();
  }).then((data) => {
    tokenClient = google.accounts.oauth2.initTokenClient({
        client_id: data.val1,
        scope: SCOPES,
        callback: '', // defined later
    });
  })

    // google.accounts.id.initialize({
    //     client_id: "461862675457-a3lrck82d2d9j0jq9srot6es33gsq86u.apps.googleusercontent.com",
    //     callback: handleCredentialResponse
    // });
    // google.accounts.id.renderButton(
    //     document.getElementById("buttonDiv"),
    //     { theme: "filled_black", size: "large", shape: "pill" }  // customization attributes
    // );
    // google.accounts.id.prompt(); // also display the One Tap dialog
}

function start() {
    // 2. Initialize the JavaScript client library.
    fetch("http://localhost:5050/id").then(resp => {
    // fetch("https://calendar-342103.uc.r.appspot.com/id").then(resp => {
        return resp.json();
    }).then((data) => {
        gapi.client.init({
            'apiKey': data.val2,
            // Your API key will be automatically added to the Discovery Document URLs.
            'discoveryDocs': DISCOVERY_DOC,
            // clientId and scope are optional if auth is not required.
          //   'clientId': CLIENT_ID,
          //   'scope': SCOPES,
        }).then(() => {
            logged = true;
            document.getElementById('login-container').style.visibility = 'hidden';
            document.getElementById("root").style.visibility = "visible";
        },error => {
            console.log(error)
        })
    })
};