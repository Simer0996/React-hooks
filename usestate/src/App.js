import { useState } from "react"
import "./App.css"

function App() {
  const [count, setCount] = useState(0)
  const [theme, setTheme] = useState("red")
  // const [count, setCount] = useState(() => {
  //   console.log("Running the function in useState")
  //   return 0
  // })

  // const inititalValue = () => {
  //   console.log("Running the function in useState")
  //   return 0
  // }
  // const [count, setCount] = useState(inititalValue())

  // const [state, setState] = useState({ count: 0, theme: "red" })
  // const count = state.count
  // const theme = state.theme

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
    setTheme("black")
  }

  const increment = () => {
    setCount((prevValue) => prevValue + 1)
    setTheme("blue")
  }

  // const decrement = () => {
  //   setState((prevValue) => {
  //     return { ...prevValue, count: prevValue.count - 1 }
  //   })
  // }

  // const increment = () => {
  //   setState((prevValue) => {
  //     return { ...prevValue, count: prevValue.count + 1 }
  //   })
  // }

  return (
    <div className="App" style={{ display: "flex" }}>
      <button onClick={decrement}>-</button>
      <p>{count}</p>
      <p>{theme}</p>
      <button onClick={increment}>+</button>
    </div>
  )
}

export default App
