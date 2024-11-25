import "./HomePage.css";
import recipesArray from "../data/data2.json";
import Card from "../components/Card";
import { Link } from "react-router-dom";
import Form from "../components/Form"
import { useState } from "react";

function HomePage() {
  const [recipes, setRecipes] = useState(recipesArray);

  function deleteCard(id) {
    const newArray = [...recipes];
    
    newArray.map((recipe) => {
      if (id === recipe.id){
        console.log("found match ", recipe.name);
        newArray.splice(newArray.indexOf(recipe), 1);
        console.log(newArray);
        setRecipes(newArray);
      }
    });
  }

  return (
    <>
    <Form/>
    <ul className="recipe-list">
      {recipes.map((recipe, index) => {
        return (
          <Link to={"/recipe/" + recipe.id} key={index}>
            <Card recipe={recipe} deleteCard={deleteCard} />
          </Link>
        );
      })}
    </ul>
    </>
  );
}

export default HomePage;
