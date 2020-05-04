import React from 'react'
import Country from './Country'

const CountryList = ({ countries, handleShowCountry }) => {
    return (
        <ul>
            {countries.map((country, i) =>
                <Country key={i} country={country} showCountryDetails={() => handleShowCountry(country)}/>
            )}
        </ul>
    )
}

export default CountryList