import React from "react"
import "./App.css"
import FunctionalContextComponent from "./FunctionalContextComponent"
// import ClassContextComponent from "./ClassContextComponent"
import { ThemeProvider } from "./ThemeContext"
// export const ThemeContext = React.createContext()

function App() {
  return (
    <>
      <ThemeProvider>
        {/* <button onClick={toggleTheme}>Toggle Theme</button> */}
        <FunctionalContextComponent />
        {/* <ClassContextComponent /> */}
      </ThemeProvider>
    </>
  )
}

export default App
