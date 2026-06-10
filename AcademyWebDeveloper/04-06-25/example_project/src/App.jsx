import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const handleCount = () => {
    setCount((count) => count + 1)
  }

  const handleCountMinus = () => {
    setCount((count) => count - 1)
  }

  return (
    <>
      <section id="center">
        <button
          type="button"
          className="counter"
          onClick={handleCount}
        >
          Count is {count}
        </button>
        <button
          type="button"
          className="counter"
          onClick={handleCountMinus}
        >
          Decrease {count}
        </button>
      </section>
    </>
  )
}

export default App
