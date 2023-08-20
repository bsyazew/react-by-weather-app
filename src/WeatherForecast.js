import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./App.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }
  console.log(props);
  let apiKey = "3c949ba49d38be2487ee278e0d2d4059";
  let latitude = props.coords.lat;
  let longitude = props.coords.lon;

  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude={part}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);

  return (
    <div>
      <div className="row">
        <div className="col">
          <div className="forecast-dates">Thur</div>{" "}
          <WeatherIcon code="01d" size={35} />{" "}
          <div>
            <span className="forecast-temp-max">19</span>{" "}
            <span className="forecast-temp-min">10</span>
          </div>
        </div>
      </div>
    </div>
  );
}
