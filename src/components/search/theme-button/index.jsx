import React, { useContext } from "react"
import './styles.css'
import { ThemeContext } from "../../../App"


const ThemeButton = () => {
    const {theme, setTheme} = useContext(ThemeContext)

    console.log(theme, setTheme)
    return (
        <button 
        style={theme ? {backgroundColor : "#12343b"} : {} }
        className="themeButton"
        onClick={() => setTheme(!theme)}
        >Change Theme</button>
    )
}

export default ThemeButton