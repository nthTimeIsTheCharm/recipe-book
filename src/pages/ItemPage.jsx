import { useParams } from "react-router-dom";


function ItemPage(props){
const {recipeId} = useParams();
const foundRecipe = props.recipes.find((recipe)=> recipe.id === recipeId)

return(
        <>
        <h1>{foundRecipe.name}</h1>
        <img src={foundRecipe.image}/>
        <p>{foundRecipe.calories}</p>
        <p>{foundRecipe.ingredients}</p>
        <p>{foundRecipe.intructions}</p>
        
        
        </>
    )
}

export default ItemPage;