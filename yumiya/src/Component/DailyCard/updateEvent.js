// This function invoked seconds once the calendar is loaded

export async function listUpcomingEvents() {
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
        
    } catch {
        return 1;
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