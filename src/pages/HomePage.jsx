import "./HomePage.css";
import recipesArray from "../data/data2.json";
import Card from "../components/Card";
import { Link } from "react-router-dom";

function HomePage() {
  const recipes = recipesArray;

  return (
    <ul className="recipe-list">
      {recipes.map((recipe, index) => {
        return (
          <Link to={"/recipe/" + recipe.id} key={index}>
            <Card recipe={recipe} />
          </Link>
        );
      })}
    </ul>
  );
}

export default HomePage;
