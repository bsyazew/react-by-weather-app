import React, { useState } from "react";
import axios from "axios";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      city: response.data.name,
      date: "Monday 23:22",
      description: response.data.weather[0].description,
      iconUrl: "https://openweathermap.org/img/wn/10d@2x.png",
    });
  }

  if (weatherData.ready) {
    return (
      <div>
        <div className="bar">
          <div className="mb-3">
            <div className="row">
              <div className="col-6">
                <form id="search-form">
                  <input
                    type="text"
                    className="form-control"
                    id="city-input"
                    placeholder="Enter City"
                    autocomplete="off"
                    autoFocus="on"
                  />
                  <div className="col-3">
                    <button type="sbumit" className="btn btn-dark btn-1">
                      Search
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="city" id="displayed-city">
          {weatherData.city}
        </div>
        <div className="today">{weatherData.date}</div>
        <div className="today text-capitalize" id="description">
          {weatherData.descritption}
        </div>
        <div className="col-6">
          <div className="weather-temp">
            <ul className="features">
              <li>
                Humidity:{" "}
                <span id="humidity">{Math.round(weatherData.humidity)}</span>%
              </li>
              <li>
                Wind: <span id="wind">{Math.round(weatherData.wind)}</span>Km/H
              </li>
            </ul>
            <ul id="temp">
              <li>
                <div>
                  <img
                    src={weatherData.iconUrl}
                    alt={weatherData.description}
                    className="todays-weather-description"
                    id="icon"
                  ></img>
                </div>

                <span className="degrees" id="todays-temperature">
                  {Math.round(weatherData.temperature)}
                </span>
                <span className="deg-celsius">℃</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "b2d9fa1f2b35557e4615dd5fab218834";

    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "loading...";
  }
}
