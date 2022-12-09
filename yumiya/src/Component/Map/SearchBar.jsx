import React, { useState } from 'react'
import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng
} from "react-places-autocomplete";
import './mapGUI.css'
import { displayToMap } from './searchBox.js'

export function SearchBar() {

    const [address, setAddress] = useState("");
    // const [coordinates, setCoordinates] = React.useState({    For use when coordinate is needed
    const [setCoordinates] = useState({
      lat: null,
      lng: null
    });

    const handleSelect = async value => {
      const results = await geocodeByAddress(value);
      const latLng = await getLatLng(results[0]);
      setAddress(value);
      setCoordinates(latLng);
    };


    // const [startDate, setStartDate] = useState(new Date());

    return(
        <div style = {{display: "flex", flexDirection: "row", alignItems: "center"}}>
            <div id="searchBox" style={{alignSelf:"flex-start",marginTop: "5px"}} onClick={() => {displayToMap(document.getElementsByName("searchLocation")[0].value)}}>Search</div>
            <PlacesAutocomplete
                value={address}
                onChange={setAddress}
                onSelect={handleSelect}>
                {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                <div style={{width: "calc(100% - 30px)"}}>
                    {/* {console.log(coordinates.lat)}
                    {console.log(coordinates.lng)} */}

                    <input {...getInputProps({ placeholder: "Search a place" })} name="searchLocation" className = "searchPlace"/>
                    <div>
                    {loading ? <div>...Loading</div> : null}

                    {suggestions.map(suggestion => {
                        // console.log(suggestions)
                        const style = {
                        backgroundColor: suggestion.active ? "rgb(62, 163, 235)" : "rgba(0,0,0,0",
                        width: "calc(100% - 30px)",
                        position: "float",
                        padding: "5px 0 5px 10px",
                        fontFamily: `'Montserrat', sans-serif`,
                        fontSize: '15px',
                        color: "white",
                        borderBottom: "1px solid rgb(67, 67, 67)",
                        transition: 'background-color 0.3s',
                        cursor: "default"
                        };

                        return (
                            <div {...getSuggestionItemProps(suggestion, { style })} key = {suggestion.description}>
                                {suggestion.description}
                            </div>
                        );
                    })}
                    </div>
                </div>
                )}
            </PlacesAutocomplete>
        </div>
    )
}