import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsuis");
  }

  if (unit === "celsius") {
    return (
      <div>
        <span className="degrees" id="todays-temperature">
          {Math.round(props.celsius)}
        </span>
        <span className="deg-celsius">
          ℃ |{" "}
          <a href="/" onClick={showFahrenheit}>
            ℉
          </a>
        </span>
      </div>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <div>
        <span className="degrees" id="todays-temperature">
          {Math.round(fahrenheit)}
        </span>
        <span className="deg-celsius">
          <a href="/" onClick={showCelsius}>
            ℃
          </a>{" "}
          | ℉
        </span>
      </div>
    );
  }
}
