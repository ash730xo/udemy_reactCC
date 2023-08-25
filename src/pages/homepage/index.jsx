import React, { useEffect, useState } from "react";
import Search from "../../components/search";
import './styles.css'
import RecipeItem from "../../components/search/recipe-item";
import FavoriteItem from "../../components/search/favorite-item";

const dummydata = 'dummydata'

const Homepage = () => {

    //loading state
    const [loadingState, setLoadingState]= useState(false)

    //save results that we recieve from the API
    const [recipes, setRecipes] = useState([])

    //favorites data state
    const [favorites, setFavorites] = useState([])

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

    const addToFavorites = (getCurrentRecipeItem) => {

        let copyFavorites = [...favorites]

        const index = copyFavorites.findIndex(item => item.id === getCurrentRecipeItem.id)
        console.log(index)

        //if item is not present
        if(index === -1) {
            copyFavorites.push(getCurrentRecipeItem)
            setFavorites(copyFavorites)
            //save the favorites in local storage
            localStorage.setItem('favorites', JSON.stringify(copyFavorites))
        } else {
            alert('Item is already present in favorites')
        }
    }


    const removeFromFavorites = (getCurrentId) => {
        let copyFavorites = [...favorites]
        copyFavorites = copyFavorites.filter(item => item.id !== getCurrentId)

        setFavorites(copyFavorites)
        localStorage.setItem('favorites', JSON.stringify(copyFavorites))

    }
    //gets data from local storage when pages load 
    useEffect(() => {
        const extractFravroitesFromLocal = JSON.parse(localStorage.getItem('favorites'))
        setFavorites(extractFravroitesFromLocal)        
    }, [/*only loads once on loading page nothign in dependancy */])

    console.log(favorites)

    return (
        <div className="homepage">
            <Search 
                getDataFromSearchComponent = {getDataFromSearchComponent} 
                dummydata= {dummydata} 
            />
            {/* show favorites items*/}
            <div className="favorites-wrapper">

                <h1 className="favorites-title">Favorites</h1>

                <div className="favorites">
                {
                    favorites && favorites.length > 0 ? 
                    favorites.map(item => (
                        <FavoriteItem 
                        removeFromFavorites = { () => removeFromFavorites(item.id)}
                        id={item.id} 
                        image={item.image} 
                        titie = {item.title} 
                    />
                    ))
                    : null}
                </div>
            </div>
            {/* show favorites items*/}


            {/* Show loading state */}
            {
                loadingState && <div className="loading">Loading recipes ! Please wait. </div>
            }
            {/* Show loading state */}

            {/* Mapp through all the recipes */}
            <div className="items">
            {recipes && recipes.length > 0
                ? recipes.map((item) => (
                    <RecipeItem 
                        addToFavorites={ () => addToFavorites(item)} 
                        id={item.id} 
                        image={item.image} 
                        titie = {item.title} 
                        item={item} 
                        />
                    )) 
                : null}
            </div>

            {/* Mapp through all the recipes */}
        </div>

    )
}

export default Homepage