// This function invoked seconds once the calendar is loaded
function compare( a, b ) {
    if ( a.date < b.date ){
      return -1;
    }
    else if ( a.date > b.date ){
      return 1;
    }
    else {
        if ( a.dateTime < b.dateTime ){
            return -1;
        }
        else if ( a.dateTime > b.dateTime ){
            return 1;
        }
        else return 0;
    }
}

export async function listUpcomingEvents() {
    /* global gapi */
    let response;
    let eventList = []

    let calendarList = await gapi.client.calendar.calendarList.list();
    // console.log(calendarList.result.items)
    for(const r in calendarList.result.items){
        console.log(calendarList.result.items[r].id)
        try {
            const request = {
                'calendarId': calendarList.result.items[r].id,
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
    }

    eventList.sort( compare )
    return eventList
}