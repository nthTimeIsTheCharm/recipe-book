import "./Card.css";
import binIcon from "../assets/delete.svg"

function Card(props) {


  return (
    <li className="card">
      <div className="image-container">
        <img
          className="food-image"
          src={props.recipe.image}
          alt="PLACEHOLDER"
        />
      </div>
      <div className="text-container">
        <h2>{props.recipe.name}</h2>
        <p>{props.recipe.calories} calories</p>
        <p>{props.recipe.servings} serving</p>
        <img src={binIcon} alt="delete" onClick = {()=> props.deleteCard(props.recipe.id) } />
      </div>
    </li>
  );
}

export default Card;
