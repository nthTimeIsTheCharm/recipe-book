import "./Card.css";
import binIcon from "../assets/delete.svg";
import heartIcon from "../assets/heart.svg"; 
import { Link } from "react-router-dom";

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
          <h2>{props.recipe.name}</h2>
          <p>
            {props.recipe.calories} calories - {props.recipe.servings} serving
          </p>
        </div>
      </Link>
      <div className="button-container">
        <img
          className="delete-button"
          src={binIcon}
          alt="delete"
          onClick={() => props.deleteRecipe(props.recipe.id)}
        />
        <img
          className="favourite-button"
          src={heartIcon}
          alt="save as favourite"
        />
      </div>
    </li>
  );
}

export default Card;
