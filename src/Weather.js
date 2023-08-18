import React, { useState } from "react";
import axios from "axios";

export default function Weather() {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState(null);
  function handleResponse(response) {
    setWeatherData({
      temperature: response.data.main.temp,
     
      humidity: response.data.main.humidity,
      city: response.data.name,
      description: response.data.weather[0].description,
      iconUrl: "https://openweathermap.org/img/wn/10d@2x.png",
    });
    setReady(true);
  }

  if (ready) {
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
        <div className="today">Monday, 12:23</div>
        <div className="today text-capitalize" id="description">
          {weatherData.descritption}
        </div>
        <div className="col-6">
          <div className="weather-temp">
            <ul className="features">
              <li>
                Humidity: <span id="humidity">{weatherData.humidity}</span>%
              </li>
              <li>
                Wind: <span id="wind">{weatherData.wind}</span>Km/H
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
    const apiKey = "8c78e9e7e9928cd1a2a6f923072c3dec";
    let city = "New York";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "loading...";
  }
}
