import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import WeatherDetails from './components/WeatherDetails'
import CountryData from './services/CountryData'
import WeatherData from './services/WeatherData'
import CountryDisplay from './components/CountryDisplay'

const App = () => {
    const [countries, setCountries] = useState([])
    const [newFilter, setNewFilter] = useState('')
    const [currentWeather, setCurrentWeather] = useState('')

    const handleFilterChange = (event) => {
        console.log(event.target.value)
        setNewFilter(event.target.value)
    }

    const updateWeather = (country) => {
        console.log("updateWeather", country.capital)

        if (currentWeather && currentWeather.location.name === country.capital) {
            console.log("weather is already up to date")
            return
        }

        WeatherData
            .getCurrentWeatherForLocation(country)
            .then(responseData => {
                console.log('weather data retrieved: ', responseData)
                setCurrentWeather(responseData)
            })
    }

    const countriesToShow = () => countries.filter((country) => country.name.toLowerCase().match(newFilter.toLowerCase()))

    const weatherToShow = () => {
        console.log('weatherToShow')
        let Countries = countriesToShow()
        
        if (Countries.length === 1) {
            updateWeather(Countries[0])
        } else if (currentWeather) {
            setCurrentWeather('')
        }

        return currentWeather
    }

    const handleShowCountry = (country) => {
        console.log(`handleShowCountry ${country.name}`)
        setNewFilter(country.name)
    }

    useEffect(() => {
        console.log('useEffect')
        CountryData
            .getAll()
            .then(responseData => {
                console.log('countries retrieved: ', responseData)
                setCountries(responseData)
            })
    }, [])

    console.log("Re-rendering.......")

    return (
        <div>
            <h2>Country information</h2>
            <Filter value={newFilter} onChange={handleFilterChange} />
            <CountryDisplay countries={countriesToShow()} handleShowCountry={handleShowCountry}/>
            <WeatherDetails weather={weatherToShow()} />
        </div>
    )
}

export default App