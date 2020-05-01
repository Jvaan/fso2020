import React from 'react'

const Header2 = ({ text }) => {
    return (
        <h2>{text}</h2>
    )
}

const Part = ({ part }) => {
    return (
        <tr>
            <td>{part.name}</td>
            <td>{part.exercises}</td>
        </tr>
    )
}

const Content = ({ parts }) => {
    return (
        <div>
            <table>
                <tbody>
                    {parts.map(part =>
                        <Part part={part} key={part.id} />
                    )}
                </tbody>
            </table>
        </div>
    )
}

const Total = ({ parts }) => {
    const totalExercises = parts.reduce((sum, part) => {
        return sum + part.exercises
    }, 0)

    return (
        <p><b>Total number of exercises: {totalExercises}</b></p>
    )
}

const Course = ({ course }) => {
    return (
        <div>
            <Header2 text={course.name} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
        </div>
    )
}

export default Course