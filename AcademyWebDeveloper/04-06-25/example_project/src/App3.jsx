import { useState } from 'react'
import './App.css'

function App() {
    const [count, setCount] = useState(0)

    const handleCount = () => {
        setCount((count) => count + 1)
        // setCount(count + 1)
    }

    const handleCountDiv = () => {
        setCount((count) => Math.floor(count / 2))
        // setCount(Math.floor(count / 2))
    }

    const isMultipleOf5 = count % 5 === 0

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
                    onClick={handleCountDiv}
                >
                    Divide {count}
                </button>

                {isMultipleOf5 && <div> Il numero è un multiplo di 5 </div> }

            </section>
        </>
    )
}

export default App
