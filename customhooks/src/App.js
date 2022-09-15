import useLocalStorage from "./useLocalStorage"
import useUpdateLogger from "./useUpdateLogger"

function App() {

  const [name, setName] = useLocalStorage("name", () => "")
  useUpdateLogger(name)

  return (
    <div className="App" >
      <input type="text" onChange={(e) => setName(e.target.value)} value={name} />
    </div>
  )
}

export default App
