import React from "react";
import ForecastCard from "./ForecastCard";

function Forecast() {
  const [forecastData, setForecastData] = React.useState(null);
  const lat = localStorage.getItem("lat");
  const lon = localStorage.getItem("lng");

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const d = new Date();
  const date = d.getDate();
  const day = d.getDay();
  const month = d.getMonth();

  const secondDay = day + 2 > 6 ? days[6 - day] : days[day + 2]
  const thirdDay = day + 2 > 6 ? days[6 - day + 1] : days[day + 2]
  const fourthDay = day + 2 > 6 ? days[6 - day + 2] : days[day + 2]
  const fifthDay = day + 2 > 6 ? days[6 - day + 3] : days[day + 2]

  React.useEffect(() => {
    fetch(
      `https://skyvue.onrender.com/forecast?lat=${localStorage.getItem(
        "lat"
      )}&lon=${localStorage.getItem("lng")}`
    )
      .then((response) => response.json())
      .then((response) => setForecastData(response));
  }, [lat, lon]);

  return (
    forecastData && (
      <div className="flex flex-row justify-start lg:justify-around items-center flex-wrap mx-auto w-[80%] lg:w-full">
        <ForecastCard
          weather={forecastData.list[0].weather[0].main}
          min_temp={parseInt(forecastData.list[0].main.temp_min) - 273}
          max_temp={parseInt(forecastData.list[0].main.temp_max) - 273}
          day={"Tommorow"}
        />
        <ForecastCard
          weather={forecastData.list[1].weather[0].main}
          min_temp={parseInt(forecastData.list[1].main.temp_min) - 273}
          max_temp={parseInt(forecastData.list[1].main.temp_max) - 273}
          day={`${secondDay}, ${date + 2} ${months[month]}`}
        />
        <ForecastCard
          weather={forecastData.list[2].weather[0].main}
          min_temp={parseInt(forecastData.list[2].main.temp_min) - 273}
          max_temp={parseInt(forecastData.list[2].main.temp_max) - 273}
          day={`${thirdDay}, ${date + 3} ${months[month]}`}
        />
        <ForecastCard
          weather={forecastData.list[3].weather[0].main}
          min_temp={parseInt(forecastData.list[3].main.temp_min) - 273}
          max_temp={parseInt(forecastData.list[3].main.temp_max) - 273}
          day={`${fourthDay}, ${date + 4} ${months[month]}`}
        />
        <ForecastCard
          weather={forecastData.list[4].weather[0].main}
          min_temp={parseInt(forecastData.list[4].main.temp_min) - 273}
          max_temp={parseInt(forecastData.list[4].main.temp_max) - 273}
          day={`${fifthDay}, ${date + 5} ${months[month]}`}
        />
      </div>
    )
  );
}

export default Forecast;
