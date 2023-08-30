import { ImCompass } from "react-icons/im";
import { Progress } from "@chakra-ui/react";

function WeatherCard({ title, value, windDirection }) {
  // For calculating wind direction in compass terms.
  const direction = parseInt(windDirection);
  const directionName =
    direction >= 0 && direction < 22.5
      ? "N"
      : direction >= 22.5 && direction < 45
      ? "NNE"
      : direction >= 45 && direction < 67.5
      ? "NE"
      : direction >= 67.5 && direction < 90
      ? "ENE"
      : direction >= 90 && direction < 112.5
      ? "E"
      : direction >= 112.5 && direction < 135
      ? "ESE"
      : direction >= 135 && direction < 157.5
      ? "SE"
      : direction >= 157.5 && direction < 180
      ? "SSE"
      : direction >= 180 && direction < 202.5
      ? "S"
      : direction >= 202.5 && direction < 225
      ? "SSW"
      : direction >= 225 && direction < 247.5
      ? "SW"
      : direction >= 247.5 && direction < 270
      ? "WSW"
      : direction >= 270 && direction < 292.5
      ? "W"
      : direction >= 292.5 && direction < 315
      ? "WNW"
      : direction >= 315 && direction < 337.5
      ? "NW"
      : direction >= 337.5 && direction < 360
      ? "NNW"
      : direction == 360
      ? "N"
      : "";

  return (
    <div className="bg-[#1E213A] flex flex-col justify-center items-center font-raleway text-[#E7E7EB] mx-2 h-60 mt-10 p-6 min-w-[80%] lg:min-w-[40%] rounded-md">
      <p>{title}</p>
      <p className="text-6xl py-7 font-semibold">{value}</p>
      {windDirection && (
        <p className="flex">
          <ImCompass className="mr-1" />
          {directionName}
        </p>
      )}
      {title === "Humidity" && (
        <>
        <div className="flex justify-between items-center w-[80%]">
            <p>0</p>
            <p>100</p>
        </div>
          <Progress
            value={parseInt(value)}
            width={"80%"}
            borderRadius={"80px"}
            colorScheme={"yellow"}
          />
        </>
      )}
    </div>
  );
}

export default WeatherCard;
