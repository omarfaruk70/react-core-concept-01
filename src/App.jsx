// import { useState } from 'react'
import './App.css'
import Actors from './Actors';
import Singer from './Singer';
import Todo from './Todo'


// App component function is the main function of root elemeent .. all jsx will run through this main function
function App() {
  // const [count, setCount] = useState(0)
  const actors = ['Bappa Raj', 'Shariful Raj', 'Manna', 'King khan Shakib khan'];
  const singers = [
    {id: 1, name: 'Dr. Mahfuzur Rahman', age: 70},
    {id: 2, name: 'Habib Wahid', age: 35},
    {id: 3, name: 'Chancal Chowdhury', age: 32},
  ];

  return (
    <>
     
      <h1>React core concepts 1</h1>
      <h4>(components,jsx rules, props, pass or read props, conditional rendering, ternary , if else condition, && operator  <br></br> ||(OR) operator, map method, All about export or import, css className,)</h4>
      {/* call the Showname component function */}
      <ShowName></ShowName>
      {/* reusable component function */}
      <ShowName></ShowName>
      <Device name='Laptop' price='65000'></Device>
      {/* another component function */}
      <NationAnthem></NationAnthem>
      {/* another component function called */}
      <FavouriteSub></FavouriteSub>

      <Todo task='Learn React core concepts from Programming Hero' isDone={true} ></Todo>
      {/* import actor component */}
      <Actors name={'Bappa Raj'}></Actors>
      {/* for dynamic actors shown */}
      {
        actors.map(eachActor=> <Actors name={eachActor}></Actors>)
      }
      {/* singers */}
      {
        singers.map(singer=> <Singer singer={singer}></Singer>)
      }

    </>
  )
}
// create a component function and return it main component
function ShowName(){
  const age = 22;
  const showNameCss = {
    margin: '15px',
    pading: '20px',
    border: '5px solid purple',
    borderRadius: '10px'

  }
  return (
    <div style={showNameCss}>
   <h2>I am Omar Faruk with age: {age}. Currently I am learning React js</h2>
    </div>
  )
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
// component function Device . its accepting properties name(props from line no 26.)
function Device(props){  //props return an objects
  // console.log(props)
  // console.log(props.price)
  const {name, price} = props;
  // console.log(name);
  // console.log(price);
  return(
    <div>
      <h3>MY favourite device is: {name} and its price is : {price} thousand taka</h3>
    </div>
  )
}

export default App
