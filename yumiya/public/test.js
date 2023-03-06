
var logged = false  //To be used to start syncing calendar
const SCOPES = "https://www.googleapis.com/auth/calendar https://www.googleapis.com/auth/calendar.events https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile";
const DISCOVERY_DOC = ['https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest', "https://www.googleapis.com/discovery/v1/apis/people/v1/rest"];
let tokenClient     //To authenticate
var readyToRender = false   //To signal ../src/index.js to render app content

let USER_EMAIL = undefined;     //Used to access DB
var syncDB = false;              //Note area will set to true if there are changes, else set to false to avoid too many API calls
var STOP_SYNC = true;

//Function called when user log in
function handleCredentialResponse(response) {
    try{
        tokenClient.requestAccessToken()
    } catch (e) {}
}

//Check if gapi is still in session
$(window).focus(function() {
    gapi.client.people.people.get({
        "resourceName": "people/me",
        "personFields": "emailAddresses",
        "access_token": "sdfsdfsdfsd"
    }).then(response => {
        USER_EMAIL = response.result.emailAddresses[0].value;
        if(!USER_EMAIL){
            location.reload();
        } else {
            STOP_SYNC = false;
        }}
    )
});

 //Handles after gapi logging in
window.onload = function () {
    gapi.load('client', start);

    // fetch("http://localhost:5050/id").then(resp => {
    fetch("https://calendar-342103.uc.r.appspot.com/id").then(resp => {
        return resp.json();
    }).then((data) => {
        tokenClient = google.accounts.oauth2.initTokenClient({
            client_id: data.val1,
            prompt : '',
            scope: SCOPES,
            callback: (tokenResponse) => {
                if(tokenResponse){
                    //Unlocking app
                    logged = true;
                    document.getElementById('login-container').style.visibility = 'hidden';
                    document.getElementById("root").style.visibility = "visible";
                }
            }
        });
    })

    //Get user email
    let checkEmail = setInterval(() => {
        if(logged){
            gapi.client.people.people.get({
                "resourceName": "people/me",
                "personFields": "emailAddresses",
                "access_token": "sdfsdfsdfsd"
            }).then(response => {
                USER_EMAIL = response.result.emailAddresses[0].value;
                if(USER_EMAIL !== undefined){
                    clearInterval(checkEmail)   //Stop checking for email after successful check
                    STOP_SYNC = false;

                    getUserData()               //Fetch user data from db to initiate app
                    .then(response => {
                        window.localStorage.setItem("state", response.noteList);
                        window.localStorage.setItem("shortcuts", response.shortcutList);
                    })
                    .then(() => {
                        readyToRender = true;  //After fetching user data from db allow app to render
                    })

                    //Handles syncing content
                    setInterval(() => {         //If signal says sync then sync (see notearea and shortcut)
                        if(syncDB && !STOP_SYNC){
                            updateUserData()
                            .then(() => {
                                getUserData()               //Fetch user data from db
                                .then(response => {
                                    window.localStorage.setItem("state", response.noteList);
                                    window.localStorage.setItem("shortcuts", response.shortcutList);
                                })
                            })
                            syncDB = false
                        }
                    }, 5000)
                }
            })
        }
    }, 2000)
    
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
    //Initialize the JavaScript client library.
    // fetch("http://localhost:5050/id").then(resp => {
    fetch("https://calendar-342103.uc.r.appspot.com/id").then(resp => {
        return resp.json();
    }).then((data) => {
        gapi.client.init({
            'apiKey': data.val2,
            'discoveryDocs': DISCOVERY_DOC,
        }).then(() => {
        }, (error) => {
            // console.log(error)
        })
    })
};