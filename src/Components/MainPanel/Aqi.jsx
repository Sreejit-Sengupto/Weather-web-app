import React from "react";
// import { process } from "../../../env";
function Aqi() {
  const [aq, setAq] = React.useState(null);

  let style;
  let airQuality;
  if (aq) {
    style = {
      backgroundColor:
        aq[0].main.aqi === 1
          ? "#4BB543"
          : aq[0].main.aqi === 2
          ? "#FFB20F"
          : aq[0].main.aqi === 3
          ? "#FF6700"
          : aq[0].main.aqi === 4
          ? "#E71D36"
          : "#7B0828",
    };
    airQuality =
      aq[0].main.aqi === 1
        ? "Good"
        : aq[0].main.aqi === 2
        ? "Fair"
        : aq[0].main.aqi === 3
        ? "Moderate"
        : aq[0].main.aqi === 4
        ? "Poor"
        : "Very Poor";
  }

  const lat = localStorage.getItem("lat");
  const lng = localStorage.getItem("lng");

  React.useEffect(() => {
    fetch(
      `https://skyvue.onrender.com/aqi?lat=${localStorage.getItem(
        "lat"
      )}&lon=${localStorage.getItem("lng")}`
    )
      .then((repsonse) => repsonse.json())
      .then((response) => setAq(response.list));
  }, [lat, lng]);
  return (
    aq && (
      <div className="text-[#E7E7EB] font-raleway mt-20 flex flex-col justify-center items-center">
        <p className="text-2xl mb-5">AQI</p>
        <div className="flex flex-col justify-center items-center border rounded-md w-[80%]">
          <p
            style={style}
            className="rounded-md p-2 my-2 font-semibold font-raleway"
          >
            {airQuality}
          </p>
          <p className="py-1">
            CO - {aq[0].components.co}
            <span className="text-[#A09FB1]">μg/m3</span>
          </p>
          <p className="py-1">
            NO - {aq[0].components.no}
            <span className="text-[#A09FB1]">μg/m3</span>
          </p>
          <p className="py-1">
            NO2 - {aq[0].components.no2}
            <span className="text-[#A09FB1]">μg/m3</span>
          </p>
          <p className="py-1">
            O3 - {aq[0].components.o3}
            <span className="text-[#A09FB1]">μg/m3</span>
          </p>
          <p className="py-1">
            SO2 - {aq[0].components.so2}
            <span className="text-[#A09FB1]">μg/m3</span>
          </p>
          <p className="py-1">Fine particle matter - {aq[0].components.pm2_5}</p>
          <p className="py-1">Coarse particle matter - {aq[0].components.pm10}</p>
          <p className="py-1">
            NH3 - {aq[0].components.nh3}
            <span className="text-[#A09FB1]">μg/m3</span>
          </p>
        </div>
      </div>
    )
  );
}

export default Aqi;
