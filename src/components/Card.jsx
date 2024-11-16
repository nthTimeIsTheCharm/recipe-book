import "./Card.css";

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
      </div>
    </li>
  );
}

export default Card;
