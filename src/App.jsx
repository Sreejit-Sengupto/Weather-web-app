import SidePanel from "./Components/Sidepanel/SidePanel";
import React from "react";
import { process } from "../env";
import MainPanel from "./Components/MainPanel/MainPanel";

function App() {
  const [weatherData, setWeatherData] = React.useState(null);
  const url = 'https://skyvue.netlify.app/.netlify/functions/fetchAPI'
  React.useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          localStorage.setItem("lat", latitude);
          localStorage.setItem("lng", longitude);
          fetch(
            url
          )
            .then((response) => response.json())
            .then((response) => console.log(response))
            // .then((response) => setWeatherData(response));
        },
        (error) => {
          console.error("Error getting location:", error.message);
          console.log(
            "Getting weather details of default city. Enter location manually to get weather details"
          );
          localStorage.setItem("lat", 25.3176);
          localStorage.setItem("lng", 82.9739);
          fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=25.3176&lon=82.9739&appid=${process.env.API_KEY}`
          )
            .then((response) => response.json())
            .then((response) => setWeatherData(response));
        }
      );
    }
  }, []);

  return (
    <div className="flex flex-col lg:flex-row">
      <SidePanel weatherData={weatherData} setWeatherData={setWeatherData} />
      <MainPanel weatherData={weatherData} />
    </div>
  );
}

export default App;
