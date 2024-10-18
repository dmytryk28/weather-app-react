import './WeatherBlock.css'

function WeatherBlock(props) {
    const {
        // eslint-disable-next-line react/prop-types
        precipitationSum, weatherDescription, maxWindSpeed, precipitationProbability, minTemp, day, weatherImage, maxTemp
    } = props;
    return (
        <>
            <div className="weather-block">
                <p className="day">{day}</p>
                <p className="image">{weatherImage}</p>
                <p>{weatherDescription}</p>
                <span className="bold high">↑ </span>
                <span className="temperature">{maxTemp} °C</span>
                <p></p>
                <span className="bold low">↓ </span>
                <span className="temperature">{minTemp} °C</span>
                <p className="bold">Max wind speed:</p>
                <p className="temperature">{maxWindSpeed} km/h</p>
                <p className="bold">Precipitation probability:</p>
                <p className="temperature">{precipitationProbability}%</p>
                <p className="bold">Precipitation amount:</p>
                <p className="temperature">{precipitationSum} mm</p>
            </div>
        </>
    )
}

export default WeatherBlock