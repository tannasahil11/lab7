import '../styles/Home.css';
import axios from 'axios';
import {useEffect, useState} from 'react';

function Home(){
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        axios.get("/api/weather")
            .then((response) => {
                setWeatherData(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching weather data: ", error);
                setLoading(false);
            });
    }, []);
    
    return(
        <div className="container">
            {!loading && weatherData ? (
                <div className="weather-info">
                    <p>{weatherData.city}, {weatherData.country}</p>
                    <p>Current Temp: {weatherData.temperature.current}°C</p>
                </div>
            ) : (
                <div className="weather-info">
                    <p>Loading weather data...</p>
                </div>
            )}
            
            <div className="col">
                <h3>Hey, I'm Sahil Tanna</h3>
                <p>Resilient and learning-focused computer science student with a knack for sustainable software development practices, actively seeking co-op opportunities for Summer 2025. Proficient in building responsive, scalable and secure solutions.</p>
            </div>
        </div>
    )
}

export default Home