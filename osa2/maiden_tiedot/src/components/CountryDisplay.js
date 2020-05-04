import React from 'react'
import CountryDetails from './CountryDetails'
import CountryList from './CountryList'

const CountryDisplay = ({countries, handleShowCountry}) => {
    console.log("CountryDisplay, number of countries to show: ", countries.length);

    if (countries.length === 0) {
        return <div>No matches</div>
    } else if (countries.length > 10) {
        return <div>Too many matches ({countries.length}), specify another filter</div>
    } else if (countries.length === 1) {
        return <CountryDetails country={countries[0]} />
    } else {
        return <CountryList countries={countries} handleShowCountry={handleShowCountry} />
    }
}

export default CountryDisplay