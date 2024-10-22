import React, { useEffect, useState } from 'react'

function WeatherApp() {
    const [weather, setWeather] = useState(null);

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;

                fetch(`api${latitude} ${longitude}`)
                    .then((response) => response.json())
                    .then((data) => setWeather(data));
            })
        }
    }, [])

    return (
        <div>
            {
                weather ? (
                    <div>
                        {weather.main.temp}
                    </div>
                ) : (
                    <p>Loading...</p>
                )
            }

        </div>
    )
}

export default WeatherApp