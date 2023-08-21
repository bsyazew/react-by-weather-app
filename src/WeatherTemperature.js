import React from "react";
import "./App.css";

export default function WeatherTemperature(props) {
  return (
    <div>
      <span className="degrees" id="todays-temperature">
        {Math.round(props.celsius)}
      </span>
      <span className="deg-celsius">℃</span>
    </div>
  );
}
