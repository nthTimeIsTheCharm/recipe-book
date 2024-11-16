import "./Card.css"

function Card(props) {
  return (
    <li className="card">
      <img className = "food-image"src={props.recipe.image} alt="PLACEHOLDER" />
      <p>{props.recipe.name}</p>
      <p>{props.recipe.calories} calories</p>
      <p>{props.recipe.servings} serving</p>
    </li>
  );
}

export default Card;
