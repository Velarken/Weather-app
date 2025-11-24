import { useState, useEffect} from "react";
import DayForecast from "./weatherComponents/DayForecast";
import weatherIcons from "../data/weatherIcons.js";
import weeklyForecast from '../data/testingData.js'
import WeatherCard from "./weatherComponents/WeatherCard.jsx";

const WeatherPanel = ({
    displayData,
}) => {
    const [isLoadingOver,setIsLoadingOver] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setIsLoadingOver(true)
        }, 1500);
    }, [isLoadingOver]); // dependency so that each page load can show a brief loading screen
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
                <WeatherCard 
                    cardType={'Precipitaion'}
                    cardData={day.precipDetails}
                />
                <WeatherCard
                    cardType={'Winds'}
                    cardData={day.windDetails}
                />

            </>
        )
    })
    
    return (
        <>
            {!isLoadingOver 
                ? <p>Loading...</p>
                : (
                    <>
                        <div className='weekOverview flex-row'>
                            {weeklyWeather}
                        </div>
                        <div className="weatherCardContainer">
                            {/* Current day weather specifics go on cards displayed dynamically here in an accordian format */}
                        </div>
                    </>
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