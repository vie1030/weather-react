import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

import "./temperature.css";

export default function Temperature() {
  return (
    <div className="Temperature ">
      <span className="sunny">
        <ReactAnimatedWeather
          icon="CLEAR_DAY"
          color="#F8E167"
          size={75}
          animate="true"
        />
      </span>
      <span className="float-left"></span>
      <strong id="temperature">3</strong>
      <span className="units">
        °C |<a href="/"> °F </a>
      </span>
    </div>
  );
}
