import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import WeatherForecastDay from "./WeatherForecastDay";
import "./App.css";
import axios from "axios";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);
  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="weather-forecast">
        <div className="row">
          {forecast.map(function(dailyForecast, index){
            if (index < 5) {
return (
  <div className="col" key={index}>
    <WeatherForecastDay data={dailyForecast} />
  </div>
);}
          })}
        
        </div>
      </div>
    );
  } else {
    let apiKey = "3c949ba49d38be2487ee278e0d2d4059";
    let latitude = props.coords.lat;
    let longitude = props.coords.lon;

    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude={part}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
