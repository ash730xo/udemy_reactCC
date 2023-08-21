import  { useState } from "react";
import './syles.css'

const Search = () => {
    //state value and function 
    const [inputValue, setInputValue] = useState('')

    const handleInputValue = (event) => {
        //gets the current value
        const {value} = event.target;
        //set the updated state
        setInputValue(value)
    }


    console.log(inputValue)

    return (
        <div className="Search">
            <input name="search" onChange={handleInputValue} value={inputValue} placeholder="Search Recipes" id="Search"/>
            <button type="submit">Search</button>
        </div>
    )
}

export default Search