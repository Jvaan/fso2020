import React from 'react'

const WeatherDetails = ({ weather }) => {

    if (!weather) return <div></div>

    return (
        <div>
            <h3>weather in {weather.location.name}</h3>
            <div><b>temperature:</b> {weather.current.temperature} Celsius</div>
            <div>
                {weather.current.weather_icons.map((image_src, i) =>
                    <img key={i} src={image_src} width="50" alt="weather icon" />
                )}
            </div>
            <div><b>wind:</b> {weather.current.wind_speed} mph, direction {weather.current.wind_dir} Celsius</div>
        </div>
    )
}

export default WeatherDetails