import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./App.css";

export default function WeatherForecast() {
  return (
    <div>
      <div className="row">
        <div className="col">
          
          <div className="forecast-dates">Thur</div> <WeatherIcon code="01d" size={35} />{" "}
          <div>
            <span className="forecast-temp-max">19</span>{" "}
            <span className="forecast-temp-min">10</span>
          </div>
        </div>
      </div>
    </div>
  );
}
