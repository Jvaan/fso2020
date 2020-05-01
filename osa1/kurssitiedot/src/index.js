import React from 'react'
import ReactDOM from 'react-dom'

const Header1 = ({ text }) => {
  return (
    <h1>{text}</h1>
  )
}

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

const Courses = ({ courses, title}) => {
  return (
    <div>
      <Header1 text={title}/>
      {courses.map(course =>
        <Course course={course} key={course.id}/>
      )}
    </div>
  )
}

const App = () => {
  const title = "Web development curriculum"
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Joku',
          exercises: 10,
          id: 4
        }
      ]
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
      <Courses courses={courses} title={title}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))