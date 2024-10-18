import {useNavigate} from "react-router-dom"
import {useCookies} from "react-cookie"
import {useState, useEffect} from "react"
import WeatherBlock from "../weather-block/WeatherBlock.jsx"
import './Dashboard.css'
import {format} from 'date-fns';
import {getWeatherDescription, getWeatherUniCode} from "../utils/weather.js"
import {reverseGeocode} from "../utils/place.js";

function Dashboard() {
    const [cookies, setCookies] = useCookies(['isLoggedIn'])
    const navigate = useNavigate()
    const [location, setLocation] = useState(null)
    const [place, setPlace] = useState("")
    const [weatherData, setWeatherData] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(success, error)
        } else {
            setDefaultLocation()
        }
    }, [error])

    async function success(position) {
        const latitude = position.coords.latitude
        const longitude = position.coords.longitude
        setPlace(await reverseGeocode(latitude, longitude))
        setLocation({latitude, longitude})
    }

    function error() {
        setDefaultLocation()
    }

    function setDefaultLocation() {
        const latitude = 50.4504
        const longitude = 30.5245
        setPlace('Kyiv (Ukraine)')
        setLocation({latitude, longitude})
    }

    useEffect(() => {
        if (location) {
            fetch(`https://api.open-meteo.com/v1/forecast?latitude=${location.latitude}&longitude=${location.longitude}&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_sum,precipitation_probability_max,wind_speed_10m_max`)
                .then((res) => res.json())
                .then((data) => {
                    setWeatherData(data.daily)
                    setIsLoading(false)
                })
                .catch((error) => {
                    console.error('Error fetching weather data:', error)
                    setIsLoading(false)
                })
        }
    }, [location])

    useEffect(() => {
        if (!cookies.isLoggedIn) {
            navigate('/')
        }
    }, [cookies, navigate])

    const handleLogOut = () => {
        setCookies('isLoggedIn', false)
        navigate('/')
    };

    if (isLoading) {
        return <div className="loader"></div>;
    }

    return (
        <>

            <div className="top-section">
                <span className="main-emblem">Weather</span>
                <button className="sign-out-button" onClick={handleLogOut}>
                    Log out
                </button>
            </div>

            <div className="main-container">
                <span id={'place'}>{place}, {location.latitude}, {location.longitude}</span>
                <div className="weather-container">
                    {weatherData && weatherData.time.slice(0, 5).map((day, index) => (
                        <WeatherBlock
                            key={index}
                            weatherImage={getWeatherUniCode(weatherData.weather_code[index])}
                            weatherDescription={getWeatherDescription(weatherData.weather_code[index])}
                            day={format(weatherData.time[index], 'EEE, d MMM')}
                            maxTemp={weatherData.temperature_2m_max[index]}
                            minTemp={weatherData.temperature_2m_min[index]}
                            precipitationProbability={weatherData.precipitation_probability_max[index]}
                            maxWindSpeed={weatherData.wind_speed_10m_max[index]}
                            precipitationSum={weatherData.precipitation_sum[index]}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}

export default Dashboard