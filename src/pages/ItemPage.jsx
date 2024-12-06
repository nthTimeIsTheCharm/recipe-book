import { useParams } from "react-router-dom";
import "./ItemPage.css";
import NotFoundPage from "./NotFoundPage";
import { Link } from "react-router-dom";
import EditIcon from '../assets/editIcon.svg'

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
        <Link to={`/recipe/edit/${recipeId}`}>
        <img src={EditIcon} />
      </Link>
          <h1 className="itemPage-title">{foundRecipe.name}</h1>
        
          <div className="calorias">
          <h2 className="itemPage-calories">Calories</h2>
          <p className="itemPage-calories">{foundRecipe.calories}</p>
          </div>

          <div className="servings">
          <h2 className="itemPage-servings">Servings</h2>
          <p className="itemPage-servings">{foundRecipe.servings}</p>
          </div>
        </div>
      </div>

       
      <div className="itemPage-lists">
        <div className="itemPage-ingredients-container">
          <h2 className="itemPage-ingredients">Ingredients</h2>
          <ul className="ul-list">
            {foundRecipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
        
        <div className="itemPage-instructions-container">
          <h2 className="itemPage-instructions">Instructions</h2>
          <ol className="ol-list">
            {foundRecipe.instructions.map((instruction, index) => (
              <li key={index}>{instruction}</li>
            ))}
          </ol>
          
        </div>
      
      </div>
    </div>
  );
}

export default ItemPage;
