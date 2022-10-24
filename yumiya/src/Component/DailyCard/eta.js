
function eta(){
    let apiCall = "https://maps.googleapis.com/maps/api/distancematrix/json?destinations=Richardson,%20Custer%20Parkway,%20Richardson,%20TX,%20USA&origins=5218BarcelonaDr,Garland,TX&key=AIzaSyC_kenObLSxyH_DyPx2nIV5eQIsNHDZtW0"
    //         const Http = new XMLHttpRequest();
    //         Http.open("GET", apiCall);
    //         Http.send();

    //         Http.onreadystatechange = (e) => {
    //         console.log(Http.responseText)
    //         }
                
                fetch(apiCall)
                .then(response => {
                // indicates whether the response is successful (status code 200-299) or not
                if (!response.ok) {
                    throw new Error(`Request failed with status ${response.status}`)
                }
                return response.json()
                })
                .then(data => {
                    this.setState({weatherData: data.hourly.slice(0, 24)});
                    this.setState({currentWeatherData: data.current});
                    this.setState({desc: data.current.weather[0].description});
                    console.log(this.state.desc);
                })
                .catch(error => console.log(error))
}

eta();