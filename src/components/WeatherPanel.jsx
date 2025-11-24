import { useState, useEffect } from "react";
import DayForecast from "./weatherComponents/DayForecast";
import weatherIcons from "../weatherIcons";
import weeklyForecast from '../weatherData.js'

const WeatherPanel = ({
    displayData,
}) => {
    const [isLoadingOver,setIsLoadingOver] = useState(false)
    useEffect(() => {
        setTimeout(() => {
            setIsLoadingOver(true)
        }, 1500);
        console.table(displayData)
    }, []);
    const weeklyWeather = weeklyForecast.map((day) => {
        return (
            <>
                <DayForecast
                    minTemp={day.min}
                    maxTemp={day.max}
                    humidity={day.humid}
                    precipChance={day.precip}
                    windSpeed={day.wind}
                    windGust={day.gust}
                    conditions={day.conditions}
                    conditionsDescription={day.desc}
                    weatherIcon={day.icon}
                />
            </>
        )
    })
    
    return (
        <>
            {!isLoadingOver 
                ? <p>Loading...</p>
                : (
                    <div className='weekOverview flex-row'>
                        {weeklyWeather}
                    </div>
                )
            }
        </>
    )
};

export default WeatherPanel;

/* 
    <DayForecast 
        minTemp={25}
        maxTemp={65}
        humidity={6}
        precipChance={0}
        windSpeed={2}
        windGust={10}
        conditions={'mostly sunny'}
        conditionsDescription={'sunny miday with storms forming in the afternoon.'}
        weatherIcon={weatherIcons[0].src}
    />
*/