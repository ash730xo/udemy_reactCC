import  { useEffect, useState } from "react";
import './syles.css'

const Search = (props) => {
    console.log(props)

    const {getDataFromSearchComponent, apiCalledSuccess, setApiCalledSuccess} = props;
    //state value and function 
    const [inputValue, setInputValue] = useState('')

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
     [apiCalledSuccess])

    return (
        <form onSubmit={handleSubmit} className="Search">
            <input name="search" onChange={handleInputValue} value={inputValue} placeholder="Search Recipes" id="Search"/>
            <button type="submit">Search</button>
        </form>
    )
}

export default Search