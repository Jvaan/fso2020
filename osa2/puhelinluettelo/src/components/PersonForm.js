import React from 'react'

const PersonForm = ({ name, number, nameHandler, numberHandler, addNameHandler }) => {
    return (
        <form onSubmit={addNameHandler}>
            <div>
                name: <input value={name} onChange={nameHandler} />
            </div>
            <div>
                number: <input value={number} onChange={numberHandler} />
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    )
}

export default PersonForm

