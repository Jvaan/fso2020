import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = ({ text }) => <h1>{text}</h1>

const Button = ({ handleClick, text }) => <button onClick={handleClick}>{text}</button>

const GetRandomNum = (maxNum) => {
  let randomNum = Math.floor(Math.random() * Math.floor(maxNum))
  console.log("random #: ", randomNum)
  return randomNum
}

const AnecdoteWithMostVotes = ({ allVotes, anecdotes }) => {
  // Find most votes from array
  let maxValue = Math.max(...allVotes);
  let anecdoteWithMaxValue = 0

  // find first index which has most votes
  for (let i = 0; i < allVotes.length; i++) {
    if (allVotes[i] === maxValue) {
      anecdoteWithMaxValue = i
      break
    }
  }

  return (
    <div>
      <Header text="Anecdote with most votes" />
      <div>{anecdotes[anecdoteWithMaxValue]}</div>
      <div>Has {maxValue} votes</div>
    </div>
  )
}

const App = (props) => {
  const [selectedAnecdote, setSelected] = useState(0)
  // initialize hook array with zeroes, length comes from anecdotes.length
  const [allAnecdoteVotes, setAllAnecdoteVotes] = useState(Array.apply(null, new Array(props.anecdotes.length)).map(Number.prototype.valueOf, 0))

  const handleVoteButton = () => {
    const copyVotes = [...allAnecdoteVotes]
    copyVotes[selectedAnecdote] += 1
    setAllAnecdoteVotes(copyVotes)
  }

  const handleGetRandomAnecdoteButton = () => {
    setSelected(GetRandomNum(props.anecdotes.length))
  }

  return (
    <div>
      <Header text="Anecdote of the day" />
      <div> {props.anecdotes[selectedAnecdote]}</div>
      <div>Has {allAnecdoteVotes[selectedAnecdote]} votes</div>

      <Button handleClick={handleVoteButton} text="Vote" />
      <Button handleClick={handleGetRandomAnecdoteButton} text="Get random anecdote" />

      <AnecdoteWithMostVotes allVotes={allAnecdoteVotes} anecdotes={props.anecdotes} />
    </div>
  )
}

const Anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={Anecdotes} />,
  document.getElementById('root')
)