import { useState } from 'react'

const Button = (props) => {
  return (
    <button onClick={props.onClick}>{props.name}</button>
  )
}

const StatisticLine = ({text, value}) => {
  return (
        <tr>
          <td>{text}</td> 
          <td>{value} </td>
        </tr>
  )
}

const Statistics = ({good, neutral, bad}) => {

  const allFeedbacks = good + neutral + bad;
  const valueFeedbacks = good*1 + neutral*0 + bad*-1;
  const average = valueFeedbacks / allFeedbacks || 0;
  const positiveAverage = good / allFeedbacks * 100 || 0;

  console.log('all',allFeedbacks);
  console.log('value', valueFeedbacks);

  if (allFeedbacks===0) {
    return (
      <p>No feedbacks given</p>
    )  
  }  

  return (
    <>
      <table>
        <tbody>
          <StatisticLine text = 'good' value = {good}/> 
          <StatisticLine text = 'neutral' value = {neutral}/>
          <StatisticLine text = 'bad' value = {bad}/>
          <StatisticLine text = 'all' value = {allFeedbacks}/>
          <StatisticLine text = 'average' value = {average}/>
          <StatisticLine text = 'positive' value = {positiveAverage}/>
        </tbody>
      </table>
    </>
  )
}

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const increaseGoodbByOne = () =>  setGood(good +1);
  const increaseNeutralbByOne = () => setNeutral(neutral +1);
  const increaseBadByOne = () => setBad(bad +1);

  return (
    <div>
      <h1>give feedback</h1>
      <Button name = 'good' onClick = {increaseGoodbByOne}/>
      <Button name = 'neutral' onClick = {increaseNeutralbByOne}/>
      <Button name = 'bad' onClick = {increaseBadByOne}/>
      <h1>statistics</h1>
      <Statistics good = {good} neutral = {neutral} bad = {bad}/>
    </div>
  )
}

export default App