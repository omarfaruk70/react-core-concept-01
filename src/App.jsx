import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
      <h1>Vite + React</h1>
      {/* call the Showname component function */}
      <ShowName></ShowName>
      {/* reusable component function */}
      <ShowName></ShowName>
      {/* another component function */}
      <NationAnthem></NationAnthem>

    </>
  )
}
// create a component function and return it main component
function ShowName(){
  const age = 22;
  return <h2>I am Omar Faruk with age: {age}. Currently I am learning React js</h2>
}
// create another dynamic component function
function NationAnthem(){
  return (
   <div>
    <h1>Amar sonar bangla ami tomay valobashi</h1>
    <p>cirodin tomar akash tomar batash amar praneee....</p>
    <small>O ma amar prane bajay bashi.</small>
  </div>
  )
}

export default App
