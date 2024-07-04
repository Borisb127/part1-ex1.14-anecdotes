import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
   
  const [selected, setSelected] = useState(0)
  const [vote, setVote] = useState([0, 0, 0, 0, 0, 0, 0, 0])


  const anecdoteIndex = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length));
  }
  
  const voteChange = () => {
    //console.log("votes", vote[selected]+1);
    //console.log(vote);
    const copy = [...vote];
    copy[selected] += 1;
    setVote(copy);
  }


  const findMaxVote = () => {
    const maxVote = Math.max(...vote);
    return vote.indexOf(maxVote);
  }

  
  const hasVotes = () => {
    return vote.some(v => v > 0);
  }

  const maxVoteIndex = findMaxVote();


  return (
    <div>
      <h1>Anecdote of the the day</h1>

      <p>{anecdotes[selected]}</p>
      <p>has {vote[selected]} votes</p> 

      <button onClick={voteChange}>vote</button>
      <button onClick={anecdoteIndex}>next anecdote</button>

      <h1>Anecdote with most votes</h1>

      {hasVotes() && (
        <div>
          <p>{anecdotes[maxVoteIndex]}</p>
          <p>has {vote[maxVoteIndex]} votes</p>
        </div>
      )}
    </div>
  );
};

export default App