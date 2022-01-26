import React from "react";
import ReactDOM from "react-dom";
import Search from "./Search";
import City from "./City";
import Date from "./Date";
import Forecast from "./Forecast";
import Temperature from "./Temperature";

import "./App.css";

export default function WeatherApp() {
  return (
    <div className="container">
      <div className="weather-app-view">
        <div className="weather-app">
          <Search />

          <div className="overviewToday">
            <City />
            <ul>
              <li>
                <Date />
              </li>
            </ul>
          </div>
          <div className="row">
            <div className="col-6">
              <div className="clearfix weather-temperature">
                <Temperature />
              </div>
            </div>
            <div className="col-6">
              <ul>
                <Forecast />
              </ul>
            </div>
          </div>
          <div className="weather-forecast" id="forecast"></div>
        </div>

        <footer class="coder">
          This is{" "}
          <a href="https://github.com/vie1030/weather-react">open-source</a> and
          coded by Vie
        </footer>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<WeatherApp />, rootElement);
