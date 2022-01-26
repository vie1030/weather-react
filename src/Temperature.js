import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

import "./temperature.css";

export default function Temperature() {
  return (
    <div className="Temperature ">
      <span className="sunny">
        <ReactAnimatedWeather
          icon="SNOW"
          color="blue"
          size={75}
          animate="true"
        />
      </span>
      <span className="float-left"></span>
      <strong id="temperature">3</strong>
      <span className="units">
        <a href="/"> °C </a>|<a href="/"> °F </a>
      </span>
    </div>
  );
}
