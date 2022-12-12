/*global google*/
/*global moment*/

function setDetail(data){
    console.log(data)
    if(data.rows[0].elements[0].distance.value !== undefined)
            document.getElementById("EventDistance").innerHTML = "Distance: " + (data.rows[0].elements[0].distance.value/1000).toFixed(2) + " km | " + (data.rows[0].elements[0].distance.value/1609).toFixed(2) + " mi";
    else
        document.getElementById("EventDistance").innerHTML = "";

    if(data.rows[0].elements[0].duration !== undefined){
        document.getElementById("EventDuration").innerHTML = "Duration: " + data.rows[0].elements[0].duration.text;
        let eta = Date.now() + data.rows[0].elements[0].duration.value * 1000; //In millisecond
        document.getElementById("EventETA").innerHTML = "ETA: " + moment(eta).format('hh:mm A');
    }
}

export function displayToMap(destination){
    document.getElementById("EventLocationName").innerHTML = destination;
    document.getElementById("EventLocation").innerHTML = null;

    //While fetching from server, display loading
    document.getElementById("EventDistance").innerHTML = "Loading...";
    document.getElementById("EventDuration").innerHTML = "";
    document.getElementById("EventETA").innerHTML = "";

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((coord) => {
            //Display location on map and route
            var directionsService = new google.maps.DirectionsService();
            var directionsRenderer = new google.maps.DirectionsRenderer();
            let map;

            map = new google.maps.Map(document.getElementById("map"),
                {
                    center: {
                        lat: coord.coords.latitude,
                        lng: coord.coords.longitude
                    },
                    zoom: 15, 
                    mapTypeId: google.maps.MapTypeId.ROADMAP
                }
            )

            directionsRenderer.setMap(map);
            let rorigin = new google.maps.LatLng(coord.coords.latitude, coord.coords.longitude);
            let rdestination = destination;
            let request = {
                origin: rorigin,
                destination: rdestination,
                travelMode : 'DRIVING'
            }
            directionsService.route(request, (result, status) => {
                if (status === 'OK') {
                directionsRenderer.setDirections(result);
                }
            });

            //Calling API if geolocation is enabled
            fetch("http://localhost:5050/eta?destination=" + destination + "&lat=" + coord.coords.latitude + "&lon=" + coord.coords.longitude)
            // fetch("https://calendar-342103.uc.r.appspot.com/eta?destination=" + destination + "&lat=" + coord.coords.latitude + "&lon=" + coord.coords.longitude)
            .then((resp) => {
                return resp.json();
            }).then((data) => {
                setDetail(data);
            })
        })
    }
}

// document.getElementById("searchBox").onclick(displayToMap(document.getElementById("searchLocation").value))
// document.getElementById("searchBox").onclick(console.log(document.getElementById("searchLocation").innerHTML))