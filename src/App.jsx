import React, { createContext, useState } from "react";
import './App.css'
import Homepage from "./pages/homepage";
import ThemeButton from "./components/search/theme-button";


//create the context
export const ThemeContext = createContext(null);

//provide the context -- porviding value to component


//consume the context -- access the value form component

//arrow function 
function App() {

  const [theme, setTheme] = useState(false)

  // JSX 
  return (
    <ThemeContext.Provider
       value = {{
          theme,
          setTheme,
       }}
       >
      <div 
        className="App"
        style= {theme ? {backgroundColor : "#feb300"} : {}}
        >
      <ThemeButton />
        <Homepage />
      </div>
    </ThemeContext.Provider>
  )
}



// How to export component 
export default App;