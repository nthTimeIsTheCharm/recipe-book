import RecipeList from "../components/RecipeList";

function FavoritesPage(props) {
  return (
    <>
      <RecipeList
        recipes={props.recipes}
        setRecipes={props.setRecipes}
        condition={"isFavorite"}
      />
    </>
  );
}

export default FavoritesPage;
