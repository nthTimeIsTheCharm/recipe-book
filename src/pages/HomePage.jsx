import "./HomePage.css"
import recipesArray from '../data/data.json'
import Card from "../components/Card"

function HomePage(){
    const recipes = recipesArray;

    return(
        <ul className="recipe-list">
            {recipes.map((recipe, index) => {
                return <Card recipe={recipe} key={index} />;
            })}

        </ul>
    );
}

export default HomePage;