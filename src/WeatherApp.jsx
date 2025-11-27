import { useState } from "react";
import SearchBox from "./Searchbox.jsx";
import Sidebar from "./Sidebar.jsx";
import './WeatherApp.css';

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({});
    
    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }
    
    // Get weather icon
    const getWeatherIcon = () => {
        if (!weatherInfo.weather) return "☀️";
        const weather = weatherInfo.weather.toLowerCase();
        if (weather.includes('smoke') || weather.includes('pollution')) return "💨";
        if (weather.includes('rain')) return "🌧️";
        if (weather.includes('snow')) return "❄️";
        if (weather.includes('cloud')) return "☁️";
        if (weather.includes('clear') || weather.includes('sun')) return "☀️";
        if (weather.includes('thunder')) return "⛈️";
        return "🌤️";
    };

    return (
        <div className="app-container">
            <Sidebar />
            
            <div className="main-content">
                {/* Search Bar */}
                <div className="search-header">
                    <SearchBox updateInfo={updateInfo} />
                </div>

                {/* Main Weather Display */}
                <div className="weather-grid">
                    {/* Left Column - Current Weather */}
                    <div className="current-weather">
                        <div className="city-info">
                            <h1 className="city-name">{weatherInfo.city || "Search for a city"}</h1>
                            <p className="rain-chance">
                                Chance of rain: {weatherInfo.humidity || 0}%
                            </p>
                        </div>
                        
                        <div className="temp-display">
                            <div className="temperature">
                                {weatherInfo.temp ? Math.round(weatherInfo.temp) : "--"}°
                            </div>
                            <div className="weather-icon-large">
                                {getWeatherIcon()}
                            </div>
                        </div>

                        {/* Today's Forecast */}
                        <div className="hourly-forecast">
                            <h3>TODAY'S FORECAST</h3>
                            <div className="forecast-hours">
                                <div className="hour-item">
                                    <div className="time">6:00 AM</div>
                                    <div className="hour-icon">☁️</div>
                                    <div className="hour-temp">
                                        {weatherInfo.temMin ? Math.round(weatherInfo.temMin) : "--"}°
                                    </div>
                                </div>
                                <div className="hour-item">
                                    <div className="time">9:00 AM</div>
                                    <div className="hour-icon">🌤️</div>
                                    <div className="hour-temp">
                                        {weatherInfo.temp ? Math.round(weatherInfo.temp - 3) : "--"}°
                                    </div>
                                </div>
                                <div className="hour-item">
                                    <div className="time">12:00 PM</div>
                                    <div className="hour-icon">☀️</div>
                                    <div className="hour-temp">
                                        {weatherInfo.temp ? Math.round(weatherInfo.temp) : "--"}°
                                    </div>
                                </div>
                                <div className="hour-item">
                                    <div className="time">3:00 PM</div>
                                    <div className="hour-icon">☀️</div>
                                    <div className="hour-temp">
                                        {weatherInfo.temMax ? Math.round(weatherInfo.temMax) : "--"}°
                                    </div>
                                </div>
                                <div className="hour-item">
                                    <div className="time">6:00 PM</div>
                                    <div className="hour-icon">☀️</div>
                                    <div className="hour-temp">
                                        {weatherInfo.temp ? Math.round(weatherInfo.temp - 1) : "--"}°
                                    </div>
                                </div>
                                <div className="hour-item">
                                    <div className="time">9:00 PM</div>
                                    <div className="hour-icon">🌤️</div>
                                    <div className="hour-temp">
                                        {weatherInfo.temMin ? Math.round(weatherInfo.temMin + 5) : "--"}°
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Air Conditions */}
                        <div className="air-conditions">
                            <div className="section-header">
                                <h3>AIR CONDITIONS</h3>
                                <button className="see-more">See more</button>
                            </div>
                            <div className="conditions-grid">
                                <div className="condition-item">
                                    <div className="condition-label">
                                        <span className="icon">🌡️</span>
                                        Real Feel
                                    </div>
                                    <div className="condition-value">
                                        {weatherInfo.feelsLike ? Math.round(weatherInfo.feelsLike) : "--"}°
                                    </div>
                                </div>
                                <div className="condition-item">
                                    <div className="condition-label">
                                        <span className="icon">💨</span>
                                        Wind
                                    </div>
                                    <div className="condition-value">0.2 km/h</div>
                                </div>
                                <div className="condition-item">
                                    <div className="condition-label">
                                        <span className="icon">💧</span>
                                        Chance of rain
                                    </div>
                                    <div className="condition-value">{weatherInfo.humidity || 0}%</div>
                                </div>
                                <div className="condition-item">
                                    <div className="condition-label">
                                        <span className="icon">☀️</span>
                                        UV Index
                                    </div>
                                    <div className="condition-value">3</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - 7-Day Forecast */}
                    <div className="weekly-forecast">
                        <h3>7-DAY FORECAST</h3>
                        <div className="forecast-list">
                            <div className="forecast-day">
                                <span className="day">Today</span>
                                <div className="day-weather">
                                    <span className="day-icon">☀️</span>
                                    <span className="day-condition">Sunny</span>
                                </div>
                                <span className="day-temps">
                                    <span className="high">{weatherInfo.temMax ? Math.round(weatherInfo.temMax) : "36"}</span>
                                    /<span className="low">{weatherInfo.temMin ? Math.round(weatherInfo.temMin) : "22"}</span>
                                </span>
                            </div>
                            <div className="forecast-day">
                                <span className="day">Tue</span>
                                <div className="day-weather">
                                    <span className="day-icon">☀️</span>
                                    <span className="day-condition">Sunny</span>
                                </div>
                                <span className="day-temps">
                                    <span className="high">37</span>/<span className="low">21</span>
                                </span>
                            </div>
                            <div className="forecast-day">
                                <span className="day">Wed</span>
                                <div className="day-weather">
                                    <span className="day-icon">☀️</span>
                                    <span className="day-condition">Sunny</span>
                                </div>
                                <span className="day-temps">
                                    <span className="high">37</span>/<span className="low">21</span>
                                </span>
                            </div>
                            <div className="forecast-day">
                                <span className="day">Thu</span>
                                <div className="day-weather">
                                    <span className="day-icon">☁️</span>
                                    <span className="day-condition">Cloudy</span>
                                </div>
                                <span className="day-temps">
                                    <span className="high">37</span>/<span className="low">21</span>
                                </span>
                            </div>
                            <div className="forecast-day">
                                <span className="day">Fri</span>
                                <div className="day-weather">
                                    <span className="day-icon">☁️</span>
                                    <span className="day-condition">Cloudy</span>
                                </div>
                                <span className="day-temps">
                                    <span className="high">37</span>/<span className="low">21</span>
                                </span>
                            </div>
                            <div className="forecast-day">
                                <span className="day">Sat</span>
                                <div className="day-weather">
                                    <span className="day-icon">🌧️</span>
                                    <span className="day-condition">Rainy</span>
                                </div>
                                <span className="day-temps">
                                    <span className="high">37</span>/<span className="low">21</span>
                                </span>
                            </div>
                            <div className="forecast-day">
                                <span className="day">Sun</span>
                                <div className="day-weather">
                                    <span className="day-icon">☀️</span>
                                    <span className="day-condition">Sunny</span>
                                </div>
                                <span className="day-temps">
                                    <span className="high">37</span>/<span className="low">21</span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}