import React from "react";

export default function Weather() {
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
        New york
      </div>
      <div className="today">Monday, 12:23</div>
      <div className="today" id="description">
        clouds
      </div>
      <div className="col-6">
        <div className="weather-temp">
          <ul className="features">
            <li>
              Humidity: <span id="humidity">33</span>%
            </li>
            <li>
              Wind: <span id="wind">33</span>Km/H
            </li>
          </ul>
          <ul id="temp">
            <li>
              <div>
                <img
                  src="https://openweathermap.org/img/wn/10d@2x.png"
                  alt="Clouds"
                  className="todays-weather-description"
                  id="icon"
                ></img>
              </div>

              <span className="degrees" id="todays-temperature">
                90
              </span>
              <span className="deg-celsius">℃</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}