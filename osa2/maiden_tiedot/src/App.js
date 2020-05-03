import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import CountryDisplay from './components/CountryDisplay'
import axios from 'axios'

const App = () => {
    const [countries, setCountries] = useState([])
    const [newFilter, setNewFilter] = useState('')

    const handleFilterChange = (event) => {
        console.log(event.target.value)
        setNewFilter(event.target.value)
    }

    let isCountryMatch = (country) => country.name.toLowerCase().match(newFilter.toLowerCase())
    const countriesToShow = countries.filter(isCountryMatch)

    useEffect(() => {
        console.log('effect')
        axios
          .get('https://restcountries.eu/rest/v2/all')
          .then(response => {
            console.log('promise fulfilled')
            setCountries(response.data)
          })
      }, [])
      console.log(countries);
      
    return (
        <div>
            <h2>Country information</h2>
            <Filter value={newFilter} onChange={handleFilterChange}/>
            <CountryDisplay countries={countriesToShow}/>
        </div>
    )
}

export default App