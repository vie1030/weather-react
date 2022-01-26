import React from "react";

import "./App.css";

export default function Forecast() {
  return (
    <div className="Forecast">
      <li>
        High <span id="highTemperature">5</span> °C
      </li>
      <li>
        Low <span id="lowTemperature">-1</span> °C
      </li>
      <li>
        Feels like <span id="feel">0</span> °C
      </li>
    </div>
  );
}
