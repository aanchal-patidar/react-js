import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './componenets/card.jsx'

function App() {
  const [count, setCount] = useState(0)
  // const obj1 = {
  //   name : "Patel",
  //   age : 22
  // }

  const myArr = [1,2,3,4]
  return (
    <>
    <h1 className='bg-green-400 text-black p-4 rounded xl m-4'>Tailwind test</h1>
     {/* we can not pass any object and array directly in the tag we pass veriable of array and obejctin {}curly braces */}
    <Card username="Aanchal" btn = "click me"/>
    <Card username="Payal"/>
    <Card username="Payal" newArr={myArr}/>

    </>
  )
}

export default App
