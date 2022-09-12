// This function invoked seconds once the calendar is loaded

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
            name : events[i].summary,
            dateTime : events[i].start.dateTime,
            date : events[i].start.date,
            id : events[i].id,
            location: events[i].location,
            description: events[i].description
        }
  
        eventList.push(event)
        // console.log(event)
    }
    
    //Pushing to localStorage
    window.localStorage.setItem("eventList",JSON.stringify(eventList))
}