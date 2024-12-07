import "./Card.css";
import binIcon from "../assets/delete.svg";
import heartIcon from "../assets/heart.svg";
import heartIconFilled from "../assets/heart-filled.svg";
import { Link } from "react-router-dom";
import { deleteRecipe, toggleFavoriteRecipe } from "./helperFunctions.js";

function Card(props) {
  return (
    <li className="card">
      <Link to={"/recipe/" + props.recipe.id}>
        <div className="image-container">
          <img
            className="food-image"
            src={props.recipe.image}
            alt="PLACEHOLDER"
          />
        </div>
        <div className="text-container">
          <h2>
            {props.recipe.name}{" "}
            <span className="icon">
              {props.recipe.isVegetarian ? "🥬" : null}{" "}
            </span>
          </h2>
          <p>
            {props.recipe.calories} calories - {props.recipe.servings} serving
          </p>
        </div>
      </Link>
      <div className="button-container">
        {!props.recipe.isFavorite && (
          <img
            className="delete-button"
            src={binIcon}
            alt="delete"
            onClick={() => {
              const newArray = deleteRecipe(props.recipe.id, props.recipes);
              props.setRecipes(newArray);
            }}
          />
        )}
        <img
          className="favorite-button"
          src={props.recipe.isFavorite ? heartIconFilled : heartIcon}
          alt="save as favorite"
          onClick={() => {
            toggleFavoriteRecipe(
              props.recipe.id,
              [...props.recipes],
              props.setRecipes
            );
          }}
        />
      </div>
    </li>
  );
}

export default Card;
