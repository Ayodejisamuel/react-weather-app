import "./current-weather.css"
 

function CurrentWeather({data}) {

    return (

        <div className="weather">
            <div className="top">
                <div>
                <p className="today">Today</p>
                    <p className="cityy">{data.city}</p>
                 
                    <p className="weather-description">{data.weather[0].description}</p>

                </div>
                <img alt="weather-img" className="weather-icon" src={`icon/${data.weather[0].icon}.png`}></img>
            </div>
            <div className="bottom">
                <p className="temperature">{Math.round(data.main.temp) - 273}°C</p>
                <div className="details">
                    <div className="parameter-row">
                        <span className="parameter-label">Feels like</span>
                        <span className="value">{Math.round(data.main.feels_like) - 273}°C</span>

                    </div>

                    <div className="parameter-row">
                        <span className="parameter-label">Wind</span>
                        <span className="value">{Math.round(data.wind.speed)}m/s</span>

                    </div>


                    <div className="parameter-row">
                        <span className="parameter-label">Humidity</span>
                        <span className="value">{Math.round(data.main.humidity)} g.m-3</span>

                    </div>

                    <div className="parameter-row">
                        <span className="parameter-label">Pressure</span>
                        <span className="value"> {Math.round(data.main.pressure)}hPa</span>

                    </div>
                </div>
            </div>

        </div>

    )
}

export default CurrentWeather;
