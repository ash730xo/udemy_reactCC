import React, { useState } from "react";
import Search from "../../components/search";
import RecipeItem from "../../components/search/recipe-item";

const dummydata = 'dummydata'

const Homepage = () => {

    //loading state
    const [loadingState, setLoadingState]= useState(false)

    //save results that we recieve from the API
    const [recipes, setRecipes] = useState([])

    const getDataFromSearchComponent = (getData) => {
        //keep the loading state as true before we are calling the API
        setLoadingState(true)

        console.log(getData, 'getData')

        //calling API
        async function getReceipes(){
            const apiResponse = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=cc946bf2ecb84daaa5d492c140096313&query=${getData}`)
            const result = await apiResponse.json()
            const {results} = result

            if(results && results.length > 0) {
                //set loading state as false again
                //set the recipes state
                setLoadingState(false)
                setRecipes(results)
            }

            console.log(result)
        }

        getReceipes()
    }

    console.log(loadingState, recipes, `loadingState, recipes`)

    return (
        <div className="Homepage">
            <Search 
            getDataFromSearchComponent = {getDataFromSearchComponent} 
            dummydata= {dummydata} 
            />

            {/* Show loading state */}
            {
                loadingState && <div className="loading">Loading recipes ! Please wait. </div>
            }
            {/* Show loading state */}

            {/* Mapp through all the recipes */}
            <div className="items">
            {
                recipes && recipes.length > 0 ?
                 recipes.map((item) => <RecipeItem item={item}/> ) 
                    
                 : null
            }
            </div>

            {/* Mapp through all the recipes */}
        </div>

    )
}

export default Homepage