import React from 'react'

const Country = ({ country, showCountryDetails }) => {
    return (
        <li>
            {country.name}  
            <button onClick={showCountryDetails}>show</button>
        </li>
    )
}

export default Country