import SidePanel from "./Components/Sidepanel/SidePanel";
import React from "react";
import MainPanel from "./Components/MainPanel/MainPanel";
// import { process } from "../env";

function App() {
  const [weatherData, setWeatherData] = React.useState(null);
  // const url = 'https://skyvue.netlify.app/.netlify/functions/fetchAPI'
  React.useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          localStorage.setItem("lat", latitude);
          localStorage.setItem("lng", longitude);
          fetch(
            `https://skyvue.onrender.com?lat=${latitude}&lon=${longitude}`
          )
            .then((response) => response.json())
            .then((response) => setWeatherData(response));
        },
        (error) => {
          console.error("Error getting location:", error.message);
          console.log(
            "Getting weather details of default city. Enter location manually to get weather details"
          );
          localStorage.setItem("lat", 25.3176);
          localStorage.setItem("lng", 82.9739);
          fetch(
            `https://skyvue.onrender.com?lat=25.3176&lon=82.9739`
          )
            .then((response) => response.json())
            .then((response) => setWeatherData(response));
        }
      );
    }
  }, []);

  // React.useEffect(() => {
  //   fetch('http://localhost:5000/')
  //     .then(response => response.json())
  //     .then(response => console.log(response))
  //     .catch(error => console.log(error))
  // }, [])

  return (
    <div className="flex flex-col lg:flex-row lg:justify-between">
      <SidePanel weatherData={weatherData} setWeatherData={setWeatherData} />
      <MainPanel weatherData={weatherData} />
    </div>
  );
}

export default App;