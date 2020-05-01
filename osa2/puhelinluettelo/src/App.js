import React, { useState } from 'react'
import Person from './components/Person'

const App = () => {
    const [persons, setPersons] = useState([
        {
            name: 'Arto Hellas',
            id: 'Arto Hellas'
        }
    ])
    const [newName, setNewName] = useState('')

    const addName = (event) => {
        event.preventDefault()

        if (persons.findIndex((person) => person.name === newName) >= 0) {
            alert(`${newName} is already added to phonebook`)
            return
        }

        const personObject = {
            name: newName,
            id: newName
        }

        setPersons(persons.concat(personObject))
        setNewName('')
    }

    const handleNameChange = (event) => {
        console.log(event.target.value)
        setNewName(event.target.value)
    }

    return (
        <div>
            <h2>Phonebook</h2>
            <form onSubmit={addName}>
                <div>
                    name: <input value={newName} onChange={handleNameChange} />
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
            <h2>Numbers</h2>
            <ul>
                {persons.map((person) =>
                    <Person key={person.id} person={person} />
                )}
            </ul>
        </div>
    )

}

export default App
