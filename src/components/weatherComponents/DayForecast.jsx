import '../../styles/DayForecast.css'
import { useState } from "react";

const DayForecast = ({
    minTemp,
    maxTemp,
    humidity,
    precipChance,
    windSpeed,
    windGust,
    conditions,
    conditionsDescription,
    weatherIcon,

}) => {
    const [dayIcon,setDayIcon] = useState(null);
    
    return (
        <div className="dayDisplay">
            <img src={weatherIcon} alt={conditionsDescription} />
            <div className="conditions">
                <h3>{conditions}</h3>
                <p>{conditionsDescription}</p>
            </div>
            <div className="dailyTemps flex-row">
                <div className="minTemps flew-col">
                    <h3>{minTemp}</h3>
                    <p>Minimum Temperature</p>
                </div>
                <div className="maxTemps flex-col">
                    <h3>{maxTemp}</h3>
                    <p>Maximum Temperature</p>
                </div>
            </div>
            <div className="precip flex-row">
                <div className="humidity flex-col">
                    <h3>{humidity}</h3>
                    <p>Humidity</p>
                </div>
                <div className="precipChance flex-col">
                    <h3>{precipChance}</h3>
                    <p>Chance of Precipitation</p>
                </div>
            </div>
            <div className="winds flex-row">
                <div className="windSpeed flex-col">
                    <h3>{windSpeed}</h3>
                    <p>Wind Speed</p>
                </div>
                <div className="windGust flex-col">
                    <h3>{windGust}</h3>
                    <p>Wind Gust</p>
                </div>
            </div>
        </div>
    )
}
export default DayForecast;