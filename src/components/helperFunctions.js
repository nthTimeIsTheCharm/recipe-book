function deleteRecipe(recipeId, recipesArray, setRecipes) {
  recipesArray.map((recipe) => {
    if (recipeId === recipe.id) {
      console.log("before match ", recipesArray);
      console.log("found match ", recipe.name);
      recipesArray.splice(recipesArray.indexOf(recipe), 1);
      console.log("recipesArray before return ", recipesArray);
      setRecipes(recipesArray);
    }
  });


/*   recipesArray.map((recipe) => {
    if (recipeId === recipe.id) {
      console.log("before match ", recipesArray)
      console.log("found match ", recipe.name);
      recipesArray.splice(recipesArray.indexOf(recipe), 1);
      console.log("recipesArray before return ", recipesArray);
      return recipesArray;
    }
  }); */
}

function toggleFavoriteRecipe(recipeId, recipesArray, setRecipes) {
  recipesArray.map((recipe) => {
    if (recipeId === recipe.id) {
      console.log("before match ", recipesArray);
      console.log("found match ", recipe.name);
      recipe.isFavorite ? recipe.isFavorite = false : recipe.isFavorite = true;
      console.log("recipesArray before return ", recipesArray);
      setRecipes(recipesArray);
    }
  });
}

export { deleteRecipe, toggleFavoriteRecipe };
