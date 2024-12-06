import "./HomePage.css";
import Form from "../components/Form"
import RecipeList from "../components/RecipeList";

function HomePage(props) {
 
  return (
    <main>
    <Form recipes={props.recipes} setRecipes={props.setRecipes} />
    <RecipeList recipes={props.recipes} setRecipes={props.setRecipes} condition={"id"}/>
    </main>
  );
}

export default HomePage;
