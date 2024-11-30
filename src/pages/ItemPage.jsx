import { useParams } from "react-router-dom";
import "./ItemPage.css";
import NotFoundPage from "./NotFoundPage";

function ItemPage(props) {
  const { recipeId } = useParams();
  const foundRecipe = props.recipes.find((recipe) => recipe.id === recipeId);
  console.log("recipeid", recipeId);
  

  if (!foundRecipe) {
    return <NotFoundPage />;
  }

  return (
    <div className="itemPage-recipe">
      <div className="itemPage-info">
        <div className="itemPage-imageWrapper">
          <img className="itemPage-image" src={foundRecipe.image} />
        </div>
        <div className="itemPage-details">
          <h1 className="itemPage-title">{foundRecipe.name}</h1>
          <h2 className="itemPage-calories">Calories</h2>
          <p className="itemPage-calories">{foundRecipe.calories}</p>
          <h2 className="itemPage-servings">Servings</h2>
          <p className="itemPage-servings">{foundRecipe.servings}</p>
        </div>
      </div>

      <h2 className="itemPage-ingredients">Ingredients</h2>

      <ul className="ul-list">
        {foundRecipe.ingredients.map((ingredient, index)=> {
          return (<li key={index}>{ingredient}</li>)
        })}
      </ul>

      
      <h2 className="itemPage-instructions">Instructions</h2>
      
      <ol className="ol-list">
        {foundRecipe.instructions.map((instruction, index)=> {
          return (<li key={index}>{instruction} </li>)
        })}
      </ol>
    </div>
  );
}

export default ItemPage;
