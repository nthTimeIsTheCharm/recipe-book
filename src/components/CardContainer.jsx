import "./CardContainer.css"
import recipesArray from '../data/data.json'
import Card from "./Card";

function CardContainer(){
    const recipes = recipesArray;

    return(
        <ul className="card-container">
            {recipes.map((recipe, index) => {
                return <Card recipe={recipe} key={index} />;
            })}

        </ul>
    );
}

export default CardContainer;