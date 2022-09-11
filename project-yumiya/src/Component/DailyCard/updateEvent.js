// This function updates every 2 seconds once the calendar is loaded

export async function listUpcomingEvents() {
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
    
    let eventList = []
    for(let i = 0; i < events.length; i++){
        const event = {
            eventName : events[i].summary,
            eventTime : events[i].start.dateTime,
            eventID : events[i].id
        }
  
        eventList.push(event)
    }
    
    //Pushing to localStorage
    window.localStorage.setItem("eventList",JSON.stringify(eventList))
}