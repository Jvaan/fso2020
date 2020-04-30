import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => <h1>{props.text}</h1>

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const StatisticResult = ({ label, resultValue }) => <div>{label} {resultValue}</div>

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const header1 = "Give feedback"
  const header2 = "Statistics"

  return (
    <div>
      <Header text={header1} />
      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />
      <Header text={header2} />
      <StatisticResult label="good" resultValue={good} />
      <StatisticResult label="neutral" resultValue={neutral} />
      <StatisticResult label="bad" resultValue={bad} />
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)