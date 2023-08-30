/* eslint-disable react/prop-types */
import DrawerMenu from "../../Utils/DrawerMenu";
import shower from "/Shower.png";
import thunderstorm from "/Thunderstorm.png";
import lightRain from "/LightRain.png";
import snow from "/Snow.png";
import clear from "/Clear.png";
import clouds from "/HeavyCloud.png";
import lightCloud from "/LightCloud.png"
import hail from "/Hail.png";
import { BiCurrentLocation } from "react-icons/bi";
import React from "react";
import WeatherInfo from "../WeatherInfo/WeatherInfo";
import Loader from "../../Utils/Loader";
import ImageLoader from "../../Utils/ImageLoader";

function SidePanel({ weatherData, setWeatherData }) {
  function getCurrentLocation() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          localStorage.setItem('lat', latitude);
          localStorage.setItem('lng', longitude);
          fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${process.env.API_KEY}`
          )
            .then((response) => response.json())
            .then((response) => setWeatherData(response));
        },
        (error) => {
          alert("Error getting location:", error.message);
        }
      );
    }
  }

  return (
    <div className="bg-[#1E213A] lg:w-[25%] h-screen lg:h-auto overflow-auto">
      <div className="mx-5 pt-3 text-[#E7E7EB] flex justify-between items-center">
        <DrawerMenu setWeatherData={setWeatherData} />
        <button
          className="text-3xl bg-[#6E707A4D] p-2 rounded-[50%]"
          onClick={getCurrentLocation}
        >
          <BiCurrentLocation />
        </button>
      </div>
      <div className="bg-clouds bg-no-repeat bg-contain bg-center mt-12 w-full">
        {weatherData ? <img
          src={weatherData.weather[0].main === "Rain" ? shower : weatherData.weather[0].main === "Thunderstorm" ? thunderstorm : weatherData.weather[0].main === "Drizzle" ? lightRain : weatherData.weather[0].main === "Snow" ? snow : weatherData.weather[0].main === "Clear" ? clear : weatherData.weather[0].main === "Mist" || weatherData.weather[0].main === "Haze" ? clouds : weatherData.weather[0].main === "Clouds" ? lightCloud : hail}
          alt=""
          className="mx-auto top-[13rem] lg:right-full lg:left-[6rem] object-contain"
        /> : <ImageLoader />}
      </div>
      {weatherData ? (
        <WeatherInfo weatherData={weatherData} />
      ): <Loader />}
    </div>
  );
}

export default SidePanel;
