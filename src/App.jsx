// import { useState } from 'react'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
     
      <h1>Vite + React</h1>
      {/* call the Showname component function */}
      <ShowName></ShowName>
      {/* reusable component function */}
      <ShowName></ShowName>
      {/* another component function */}
      <NationAnthem></NationAnthem>
      {/* another component function called */}
      <FavouriteSub></FavouriteSub>

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
  // add css styling with ClassName property form app.css imported file (ysing ClassName)
  return (
   <div className='NationAnthem'>
    <h1>Amar sonar bangla ami tomay valobashi</h1>
    <p>cirodin tomar akash tomar batash amar praneee....</p>
    <small>O ma amar prane bajay bashi.</small>
    <a href=""></a>
  </div>
  )
}

// create another component 
function FavouriteSub(){
  // creat an object for css styling (using style={})
  const DeveloperStyles = {
    margin: '20px',
    padding: '60px',
    border: '5px solid purple',
    borderRadius: '10px'
  }
  return(
    <div style={DeveloperStyles}>
      <h1>I have some knowledge about Physics, chemistry and Biologoy</h1>
      <h2>I am intermediate with Bangla, English and Math</h2>
      <p>
        But I love to learn Programming
      </p>
    </div>
  )
}

export default App
