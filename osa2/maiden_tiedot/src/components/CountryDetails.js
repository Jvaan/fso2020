import React from 'react'

const CountryDetails = ({ country }) => {
    console.log("CountryDetails: ", country)

    if (!country) {
        return <div>No country yet</div>
    }

    return (
        <>
            <h2>{country.name}</h2>
            <div>capital: {country.capital}</div>
            <div>population: {country.population}</div>
            <h3>languages:</h3>
            <ul>
                {country.languages.map((language) =>
                    <li key={language.name}>
                        {language.name}
                    </li>
                )}
            </ul>
            <img src={country.flag} width="200" alt="flag" />
        </>
    )
}

export default CountryDetails