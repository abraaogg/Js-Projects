import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Inputs from './Inputs & Controlled State(2)/Inputs'
import List from './List(3)/List'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Inputs/>
      <List/>
    </div>
  )
}

export default App
