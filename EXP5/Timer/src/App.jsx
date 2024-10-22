import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [time,setTime]=useState(0)
  const [isRunning,setIsrunning]=useState(false)
  const [timer,setTimer]=useState(null)
  const resetHandler=()=>{
    setTime(0)
    clearInterval(timer)
    setIsrunning(false)
  }

  const pauseHandler=()=>{
    clearInterval(timer)
    setIsrunning(false)
  }
  const startHandler=()=>{
    setIsrunning(true)
    const demo=setInterval(()=>{
      setTime(prev=>prev+1)
    },1000)
    setTimer(demo)
  }
  return (
    <>
      <div>
        <h1>Timer</h1>
        <div>
          Time {time}
        </div>
        <div>
          <button onClick={startHandler} disabled={isRunning}>
            start
          </button>
          <button onClick={pauseHandler} disabled={!isRunning}>
            pause
          </button>
          <button onClick={resetHandler}>
            reset
          </button>
        </div>
      </div>
    </>
  )
}

export default App
