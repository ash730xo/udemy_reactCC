import React from "react";
import './syles.css'

const Search = () => {
    return (
        <div className="Search">
            <input name="search" placeHolder="Search Recipes" id="Search"/>
            <button type="submit">Search</button>
        </div>
    )
}

export default Search