import axios from 'axios'

const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
    return axios.get(baseUrl).then(response => response.data)
}

const addPerson = (person) => {
    return axios.post(baseUrl, person).then(response => response.data)
}

export default {getAll, addPerson}