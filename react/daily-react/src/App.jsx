import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Inputs from './Inputs & Controlled State/Inputs'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Inputs/>
    </div>
  )
}

export default App
