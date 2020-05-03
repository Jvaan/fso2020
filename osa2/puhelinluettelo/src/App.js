import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import axios from 'axios'

const App = () => {
    const [persons, setPersons] = useState([])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [newFilter, setNewFilter] = useState('')

    const addName = (event) => {
        console.log(`Adding new name ${newName}`)
        event.preventDefault()

        if (!newName) {
            alert(`Name is mandatory`)
            return
        }

        if (!newNumber) {
            alert(`Number is mandatory`)
            return
        }

        if (persons.findIndex((person) => person.name === newName) >= 0) {
            alert(`${newName} is already added to phonebook`)
            return
        }

        const personObject = {
            name: newName,
            id: newName,
            number: newNumber
        }

        setPersons(persons.concat(personObject))
        setNewName('')
        setNewNumber('')
    }

    const handleNameChange = (event) => {
        console.log(event.target.value)
        setNewName(event.target.value)
    }

    const handleNumberChange = (event) => {
        console.log(event.target.value)
        setNewNumber(event.target.value)
    }

    const handleFilterChange = (event) => {
        console.log(event.target.value)
        setNewFilter(event.target.value)
    }

    let isPerson = (person) => person.name.toLowerCase().match(newFilter.toLowerCase())
    const personsToShow = persons.filter(isPerson)

    useEffect(() => {
        console.log('effect')
        axios
          .get('http://localhost:3001/persons')
          .then(response => {
            console.log('promise fulfilled')
            setPersons(response.data)
          })
      }, [])

    return (
        <div>
            <h2>Phonebook</h2>
            <Filter value={newFilter} onChange={handleFilterChange} />
            <h3>Add a new</h3>
            <PersonForm name={newName} number={newNumber} nameHandler={handleNameChange} numberHandler={handleNumberChange} addNameHandler={addName} />
            <h3>Numbers</h3>
            <Persons persons={personsToShow} />
        </div>
    )
}

export default App
