const Parte = (props) => {
  return (
    <div>
      <p>{props.title} : {props.exercises}</p>
    </div>
  )
}
const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}
const Content = (props) => {
  return (
    <div>
    <Parte title = {props.parts[0].title} exercises = {props.parts[0].exercises}/>
    <Parte title = {props.parts[1].title} exercises = {props.parts[1].exercises}/>
    <Parte title = {props.parts[2].title} exercises = {props.parts[2].exercises}/>
    </div>
  )
}
const Total = (props) => {
  const total = props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises;
  return (
    <div>
      <p>Number of exercises {total}</p>
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {title: 'Fundamentals of React', 'exercises': 10}, 
      {title: 'Using props to pass data', 'exercises': 7},  
      {title: 'State of a component', 'exercises': 14}
    ]
  }
  
  return (
    <div>
      <Header course = {course.name}/>
      <Content parts = {course.parts}/>
      <Total parts={course.parts}/>
    </div>
  )
}

export default App