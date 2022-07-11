import { useState, useEffect } from "react"
import "./App.css"

function App() {
  // const [resources, setResources] = useState("posts")
  // const [items, setItems] = useState([])

  // console.log("render")

  // useEffect(() => {
  //   fetch(`https://jsonplaceholder.typicode.com/${resources}`)
  //     .then((res) => res.json())
  //     .then((json) => setItems(json))
  // }, [resources])
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  const handleResize = () => {
    setWindowWidth(window.innerWidth)
  }
  useEffect(() => {
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])
  return (
    <>
      {/* <div className="App">
        <button onClick={() => setResources("posts")}>Posts</button>
        <button onClick={() => setResources("users")}>Users</button>
        <button onClick={() => setResources("comments")}>Comments</button>
      </div>
      <h1>{resources}</h1>
      {items.map((item) => {
        return <pre>{JSON.stringify(item)}</pre>
      })} */}
      <div>{windowWidth}</div>
    </>
  )
}

export default App
