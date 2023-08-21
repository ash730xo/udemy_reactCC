import React from "react";
import Search from "../../components/search";

const dummydata = 'dummydata'

const Homepage = () => {
    const getDataFromSearchComponent = (getData) => {
        console.log(getData, 'getData')

        //calling API
        async function getReceipes(){
            const apiResponse = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=cc946bf2ecb84daaa5d492c140096313&query=${getData}`)
            const result = await apiResponse.json()

            console.log(result)
        }

        getReceipes()
    }

    return (
        <div className="Homepage">
            <Search getDataFromSearchComponent = {getDataFromSearchComponent} dummydata= {dummydata} />
        </div>
    )
}

export default Homepage