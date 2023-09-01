import React from "react";
import WeatherCard from "./WeatherCard";
import Aqi from "./Aqi";
import Forecast from "./Forecast";
import Footer from "../../Footer";

function MainPanel({ weatherData }) {
  return (
    <div className="mx-auto">
        <Forecast />
      <div className="lg:mx-auto lg:w-full lg:flex lg:flex-col">
        <p className="text-[#E7E7EB] text-2xl mt-10 flex justify-center items-center">
          Today&apos;s Highlights
        </p>
        {weatherData && (
          <div className="flex flex-col lg:flex-row justify-center items-center flex-wrap">
            <WeatherCard
              title={"Wind Status"}
              value={`${(parseInt(weatherData.wind.speed) * 18) / 5}kmph`}
              windDirection={weatherData.wind.deg}
            />
            <WeatherCard
              title={"Humidity"}
              value={`${weatherData.main.humidity}%`}
            />
            <WeatherCard
              title={"Visibility"}
              value={`${parseInt(weatherData.visibility) / 1000}km`}
            />
            <WeatherCard
              title={"Air Pressure"}
              value={`${weatherData.visibility}mb`}
            />
          </div>
        )}
        <Aqi />
      </div>
        {weatherData && <Footer />}
    </div>
  );
}

export default MainPanel;
