import React from "react";
import axios from "axios";
import ReactAnimatedWeather from "react-animated-weather";

export default function Weather(props) {
  function handleResponse(response) {
    alert(
      `The weather in ${response.data.name} is ${response.data.main.temp}°C`
    );
  }
  let apiKey = "867dcf6bb3756e0001b67ad06b6f1ecd";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);
  return (
    <span className="weather-icon">
      <ReactAnimatedWeather
        icon="SNOW"
        color="white"
        size={100}
        animate={true}
      />
    </span>
  );
}
