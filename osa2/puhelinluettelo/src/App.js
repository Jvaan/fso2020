import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import PersonData from './services/PersonData'

const App = () => {
    const [persons, setPersons] = useState([])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [newFilter, setNewFilter] = useState('')

    const updatePerson = (person) => {
        PersonData
            .updatePerson(person)
            .then(responseData => {
                console.log('person updated')
                setPersons(persons.map(p => p.id !== person.id ? p : responseData))
                setNewName('')
                setNewNumber('')
            })
            .catch(error => {
                alert("Failed updating person\n" + error)
            })
    }

    const addPerson = (person) => {
        PersonData
            .addPerson(person)
            .then(responseData => {
                console.log('person added')
                setPersons(persons.concat(responseData))
                setNewName('')
                setNewNumber('')
            })
            .catch(error => {
                alert("Failed adding new person\n" + error)
            })
    }

    const handleAddPerson = (event) => {
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

        const foundPerson = persons.find(p => p.name === newName)

        // Updating existing person
        if (foundPerson) {
            let changedPerson = { ...foundPerson, number: newNumber }
            if (window.confirm(`${changedPerson.name} is already added to phonebook, replace the old number with new one?`)) {
                updatePerson(changedPerson)
                return
            }
        }
        
        // Adding new person (id is generated on server side)
        const newPersonObject = {
            name: newName,
            number: newNumber
          }
        addPerson(newPersonObject)
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

    const handleDelete = (person) => {
        if (window.confirm(`Really delete ${person.name}?`)) {
            console.log(`Deleting ${person.name}`)
            PersonData
                .deletePerson(person)
                .then(responseData => {
                    console.log('person deleted')
                    updatePersons()
                })
                .catch(error => {
                    alert("Failed deleting person\n" + error)
                })
        }

    }

    let isPerson = (person) => person.name.toLowerCase().match(newFilter.toLowerCase())
    const personsToShow = persons.filter(isPerson)

    const updatePersons = () => {
        PersonData
            .getAll()
            .then(responseData => {
                console.log('get all persons ok')
                setPersons(responseData)
            })
            .catch(error => {
                alert(error + "\nDid you remember to start json server (npm run server)?")
            })
    }

    useEffect(() => {
        console.log('effect')
        updatePersons()
    }, [])

    return (
        <div>
            <h2>Phonebook</h2>
            <Filter value={newFilter} onChange={handleFilterChange} />
            <h3>Add a new</h3>
            <PersonForm name={newName} number={newNumber} nameHandler={handleNameChange} numberHandler={handleNumberChange} addNameHandler={handleAddPerson} />
            <h3>Numbers</h3>
            <Persons persons={personsToShow} handleDelete={handleDelete} />
        </div>
    )
}

export default App
