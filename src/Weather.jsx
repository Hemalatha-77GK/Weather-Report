import axios from "axios"
import { useState } from "react"

function Weather()
{
    const [city,setcity]=useState("")
    const [weather,setweather]=useState("")
    const [temp,settemp]=useState("")
    const [desc,setdesc]=useState("")



    function handleCity(event)
    {
        setcity(event.target.value)
    }
function getWeather()
{
    var weatherdata=axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=63d63764ea83959b354e69cd678d5ac1`)

    weatherdata.then(function(success){
        console.log(success.data)
        setweather(success.data.weather[0].main)
        setdesc(success.data.weather[0].description)
        settemp(success.data.main.temp)

    })
}
    return(
        <div className="flex items-center justify-center min-h-screen bg-black p-6">
  <div className="bg-[#F9D35E] rounded-3xl shadow-2xl p-10 w-full max-w-lg text-center">
    <h1 className="text-4xl font-extrabold text-black mb-6 drop-shadow-lg">🌦️ Weather Report</h1>
    <p className="text-black mb-8 text-lg">Instant updates for your favorite cities!</p>

    <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
      <input
        onChange={handleCity}
        type="text"
        placeholder="Enter city name"
        className="flex-1 p-3 rounded-full border-2 border-black text-black placeholder-black bg-white focus:outline-none focus:ring-2 focus:ring-black transition-all"
      />
      <button
        onClick={getWeather}
        className="bg-black text-[#F9D35E] font-bold py-2 px-6 rounded-full hover:bg-gray-800 transition-all"
      >
        Search
      </button>
    </div>

    {/* Weather Details */}
    <div className="mt-10 space-y-4 text-black">
      <div className="flex justify-between px-6">
        <span className="font-semibold">Weather:</span>
        <span>{weather || "--"}</span>
      </div>
      <div className="flex justify-between px-6">
        <span className="font-semibold">Temperature:</span>
        <span>{temp ? `${temp} °C` : "-- °C"}</span>
      </div>
      <div className="flex justify-between px-6">
        <span className="font-semibold">Description:</span>
        <span>{desc || "--"}</span>
      </div>
        </div>
    </div>
  </div>
    )
}
export default Weather