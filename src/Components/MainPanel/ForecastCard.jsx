import shower from "/Shower.png";
import thunderstorm from "/Thunderstorm.png";
import lightRain from "/LightRain.png";
import snow from "/Snow.png";
import clear from "/Clear.png";
import clouds from "/HeavyCloud.png";
import lightCloud from "/LightCloud.png"
import hail from "/Hail.png";

function ForecastCard({ weather, min_temp, max_temp, day }) {
  return (
    <div className="text-white bg-[#1E213A] lg:w-[120px] h-[177px] flex flex-col justify-around items-center px-4 font-raleway mt-10 mx-2 rounded-md">
        <p>{day}</p>
      <img
          src={weather === "Rain" ? shower : weather === "Thunderstorm" ? thunderstorm : weather === "Drizzle" ? lightRain : weather === "Snow" ? snow : weather === "Clear" ? clear : weather === "Mist" || weather === "Haze" ? clouds : weather === "Clouds" ? lightCloud : hail}
          alt=""
          className="w-14"
        />

        <div className="flex justify-between items-center w-full text-[#E7E7EB]">
            <p>{max_temp}<span>&deg;C</span></p>
            <p className="text-[#A09FB1]">{min_temp}<span>&deg;C</span></p>
        </div>
    </div>
  )
}
export default ForecastCard
