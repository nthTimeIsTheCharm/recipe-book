import "./HomePage.css";
import Card from "../components/Card";
import { Link } from "react-router-dom";
import Form from "../components/Form"

function HomePage(props) {
 

  return (
    <>
    <Form recipes={props.recipes} setRecipes={props.setRecipes} />
    <ul className="recipe-list">
      {props.recipes.map((recipe, index) => {
        return (
         
            <Card key={index} recipe={recipe} deleteRecipe={props.deleteRecipe} />
           
        );
      })}
    </ul>
    </>
  );
}

export default HomePage;
