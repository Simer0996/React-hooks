import { useState } from "react"
import "./App.css"

function App() {
  const [count, setCount] = useState(0)

  // const decrement = () => {
  //The second set function indicates that the count should be decremented by 2 but the count is still 1. That's why in this case functional set function is applicable
  //   setCount(count - 1)
  //   setCount(count - 1)
  // }

  // const increment = () => {
  //   setCount(count + 1)
  //   setCount(count + 1)
  // }

  const decrement = () => {
    setCount((prevValue) => prevValue - 1)
  }

  const increment = () => {
    setCount((prevValue) => prevValue + 1)
  }

  return (
    <div className="App" style={{ display: "flex" }}>
      <button onClick={decrement}>-</button>
      <p>{count}</p>
      <button onClick={increment}>+</button>
    </div>
  )
}

export default App
