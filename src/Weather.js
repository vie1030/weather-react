import React, { useState } from "react";
import axios from "axios";

export default function WeatherSearch() {
  const [city, setCity] = useState(" ");
  const [outcome, setOutcome] = useState(false);
  const [forecast, setForecast] = useState({});

  function displayForecast(response) {
    setOutcome(true);
    setForecast({
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "867dcf6bb3756e0001b67ad06b6f1ecd";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayForecast);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <input type="search" placeholder="Type a city" onChange={updateCity} />
      <input type="submit" value="Search" />
    </form>
  );

  if (outcome) {
    return (
      <div className="WeatherSearch">
        {form}
        <ul>
          <li>Temperature: {Math.round(forecast.temperature)} °C</li>
          <li>Description: {forecast.description}</li>
          <li>Humidity: {forecast.humidity}%</li>
          <li>Wind: {forecast.wind}km/h</li>
          <li>
            <img src={forecast.icon} alt={forecast.description} />{" "}
          </li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
