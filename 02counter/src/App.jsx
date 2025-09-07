import { useState } from 'react'   // ✅ React Hook (not used yet, but ready)
import reactLogo from './assets/react.svg'  
import viteLogo from '/vite.svg'  
import './App.css'                 // ✅ Global CSS

function App() {
  let [counter, setCounter] = useState(15);
  //let counter =15;
  const addValue = () => {
      if(counter>50) return;
    console.log("clicked", counter)
    
    setCounter(prevCounter => prevCounter+1) // or directly setcounter(counter+1)
    setCounter(prevCounter => prevCounter+1)
    setCounter(prevCounter => prevCounter+1)
  }
  const removeValue = () => {
    if(counter<0) return;
    console.log("pressed", counter)
    setCounter(counter-1)
  }
  return (
    <>
      <h1>Rahul learning React</h1>   {/* Your main heading */}
      <h2>Counter value: {counter} </h2>
      <button onClick={addValue}>Add Value {counter}</button>
      <br />
      <button onClick={removeValue}>Remove Value {counter}</button>
      <p>footer:{counter} </p>
    </>
  )
}

export default App   // ✅ Export App so it renders in main.jsx
