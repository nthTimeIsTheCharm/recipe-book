import "./RecipeList.css"
import Card from './Card'

function RecipeList({recipes, setRecipes, condition}){

  const recipesAvailable = recipes.length;
  let counter = 0;
  
  return (
    <>
      <ul className="recipe-list">
        {recipes.map((recipe, index) => {
          if (recipe[condition]) {
            counter++;
            return (
              <Card
                key={index}
                recipe={recipe}
                recipes={recipes}
                setRecipes={setRecipes}
              />
            );
          }
        })}
        {(recipesAvailable && !counter) ? <span>💔 No favorite recipes yet!</span> : null}
        {!recipesAvailable && <span>No recipes found 😟</span>}
      </ul>
    </>
  );
}

export default RecipeList;