import  { useContext, useEffect, useState } from "react";
import './syles.css'
import { ThemeContext } from "../../App";

const Search = (props) => {
    console.log(props)

    const {getDataFromSearchComponent, apiCalledSuccess, setApiCalledSuccess} = props;
    //state value and function 
    const [inputValue, setInputValue] = useState('')

    const {theme} = useContext(ThemeContext)

    const handleInputValue = (event) => {
        //gets the current value
        const {value} = event.target;
        //set the updated state
        setInputValue(value)
    }


    console.log(inputValue)

    const handleSubmit = (event) => {
        event.preventDefault()
        getDataFromSearchComponent(inputValue)
    }

    useEffect(() => {
        if(apiCalledSuccess) {
            setInputValue('')
            setApiCalledSuccess(false)
        }

    },
    //whnever there is a change it will load 
     [apiCalledSuccess, getCurrentRecipeItem])

    return (
        <form onSubmit={handleSubmit} className="Search">
            <input name="search" onChange={handleInputValue} value={inputValue} placeholder="Search Recipes" id="Search"/>
            <button style={theme ? {backgroundColor: "#12343b"}: {}} type="submit">Search</button>
        </form>
    )
}

export default Search