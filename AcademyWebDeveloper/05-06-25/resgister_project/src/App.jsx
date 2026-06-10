import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import {RegisterSetup} from './components/Register.jsx'
import {ValidationRules} from './components/ValidationRules.jsx'
import { Padre } from './components/Padre'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <RegisterSetup /> */}
      {/* <ValidationRules /> */}
      <Padre></Padre>
    </>
  )
}

export default App