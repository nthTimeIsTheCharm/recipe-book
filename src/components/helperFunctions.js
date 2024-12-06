function deleteRecipe(recipeId, recipesArray, ) {
  
  return recipesArray.filter((recipe)=> recipeId !== recipe.id);

}

function toggleFavoriteRecipe(recipeId, recipesArray, setRecipes) {
  recipesArray.map((recipe) => {
    if (recipeId === recipe.id) {
      recipe.isFavorite ? recipe.isFavorite = false : recipe.isFavorite = true;
      setRecipes(recipesArray);
    }
  });
}

export { deleteRecipe, toggleFavoriteRecipe };
