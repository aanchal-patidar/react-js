import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("green")

  return (
    <>
      <div className='w-full h-screen duration-200'style={{backgroundColor: color}}>
        <div className='fixed flex flex-wrap justify-centre left-40 bottom-12  inset-x-0 px-3 '>
          <div className='flex flex-wrap justify-center shadow-lg gap-3 bg-white rounded-xl px-3 py-1'>
                  <button onClick={()=> {setColor("red")}} className='outline-none px-4 py-1 rounded-full text-white' style={{backgroundColor:"red"}}>
                    Red
                  </button>
                  <button onClick={()=> {setColor("black")}} className='outline-none px-4 py-1 rounded-full text-white' style={{backgroundColor:"black"}}>
                    Black
                  </button>
                  <button onClick={()=> {setColor("gray")}} className='outline-none px-4 py-1 rounded-full text-white' style={{backgroundColor:"gray"}}>
                    gray
                  </button>
                  <button onClick={()=> {setColor("magenta")}} className='outline-none px-4 py-1 rounded-full text-white' style={{backgroundColor:"magenta"}}>
                    Magenta
                  </button>
                  <button onClick={()=> {setColor("orange")}} className='outline-none px-4 py-1 rounded-full text-white' style={{backgroundColor:"orange"}}>
                    Orange
                  </button>
                  <button onClick={()=> {setColor("purple")}} className='outline-none px-4 py-1 rounded-full text-white' style={{backgroundColor:"purple"}}>
                    Purple
                  </button>
                  <button onClick={()=> {setColor("lightpink")}} className='outline-none px-4 py-1 rounded-full text-white' style={{backgroundColor:"lightpink"}}>
                    lightpink
                  </button>
                  <button onClick={()=> {setColor("blue")}} className='outline-none px-4 py-1 rounded-full text-white' style={{backgroundColor:"Blue"}}>
                    Blue
                  </button>
                  <button onClick={()=> {setColor("yellow")}} className='outline-none px-4 py-1 rounded-full text-white' style={{backgroundColor:"yellow"}}>
                    Yellow
                  </button>
                  <button onClick={()=> {setColor("cyan")}} className='outline-none px-4 py-1 rounded-full text-white' style={{backgroundColor:"cyan"}}>
                    Cyan
                  </button>
          </div>

        </div>
      </div>
    </>
  )
}

export default App
