import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div>
      <div className="city" id="displayed-city">
        {props.data.city}
      </div>
      <div className="today">
        <FormattedDate date={props.data.date} />
      </div>
      <div className="today text-capitalize" id="description">
        {props.data.descritption}
      </div>
      <div className="col-6">
        <div className="weather-temp">
          <ul className="features">
            <li>
              Humidity:{" "}
              <span id="humidity">{Math.round(props.data.humidity)}</span>%
            </li>
            <li>
              Wind: <span id="wind">{Math.round(props.data.wind)}</span>Km/H
            </li>
          </ul>
          <ul id="temp">
            <li>
              <div className="todays-weather-description">
                {props.data.description}
              </div>
              <div>
                <WeatherIcon code={props.data.icon} />
              </div>

              <span className="degrees" id="todays-temperature">
                {Math.round(props.data.temperature)}
              </span>
              <span className="deg-celsius">℃</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
