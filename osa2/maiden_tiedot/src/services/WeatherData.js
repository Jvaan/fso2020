import axios from 'axios'

const api_key = process.env.REACT_APP_WEATHERSTACK_APIKEY
const currentWeatherBaseUrl = 'http://api.weatherstack.com/current'
const units ='m'

const getCurrentWeatherForLocation = (country) => {
    let requestUrl = `${currentWeatherBaseUrl}?access_key=${api_key}&query=${country.capital},${country.name}&units=${units}`
    console.log(requestUrl);
    return axios.get(requestUrl).then(response => response.data)
}

export default { getCurrentWeatherForLocation }