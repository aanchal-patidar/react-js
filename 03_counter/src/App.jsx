import { useState } from 'react'

function App() {
  let [counter, setCounter] = useState(1)

  const addCounter = ()=>{
    if(counter <= 20){
      setCounter(counter + 1)
    }
   
  }
  const removeCounter = ()=>{
    if(counter >= 0){
      setCounter(counter - 1)
    }
    
  }
  return (
   <div>
    <h1>Counter values</h1>
    <button onClick={addCounter}>Add value{counter} </button>
    <br />
    <br />
    <button onClick={removeCounter}>Remove value{counter}</button>
   </div>
  )
}

export default App
