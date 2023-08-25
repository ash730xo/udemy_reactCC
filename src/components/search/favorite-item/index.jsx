import './styles.css'
const FavoriteItem= (props) => {

    const {id, image, title, } = props
    console.log(props, `recipe-item-props`)
    return(
        <div key={id} className="favorite-item" > 
            <div>
                <img src={image} alt="image of recipe"/>
            </div>

            <p>{title}</p>

            <button type="button">Remove from favorites</button>
        </div>
    )
}

export default FavoriteItem