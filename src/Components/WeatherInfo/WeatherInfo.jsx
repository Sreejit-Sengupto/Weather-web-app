/* eslint-disable react/prop-types */
import { ImLocation } from 'react-icons/im'
function WeatherInfo({ weatherData }) {
    const description = weatherData.weather[0].description;
    const months = [ "January", "February", "March", "April", "May", "June", 
    "July", "August", "September", "October", "November", "December" ];
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const date = new Date();
    const d = date.getDate();
    const day = date.getDay();
    const month = date.getMonth();
  return (
    <div className='text-white w-full flex flex-col justify-center items-center'>
      <p className='font-raleway text-[5rem] text-[#E7E7EB] font-semibold my-12'>{(parseInt(weatherData.main.temp) - 273.0)} <span className='text-4xl ml-[-20px] text-[#A09FB1]'>&deg;C</span> </p>

      <p className='font-raleway text-4xl text-[#A09FB1] mb-12'>{description.charAt(0).toUpperCase() + description.substring(1)}</p>
      <p className="font-raleway text-sm text-[#88869D]">Today &#x2022; {days[day]}, {d} {months[month]}</p>
      <p className='flex justify-center items-center mt-5 mb-10 font-raleway text-[#88869D]'><ImLocation className='mr-2'/> {weatherData.name}</p>
    </div>
  )
}

export default WeatherInfo
