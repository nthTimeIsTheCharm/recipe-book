import { useState } from "react";
import Fieldset from "../components/Fieldset.jsx";
import Field from "../components/Field";
import { useNavigate, useParams } from "react-router-dom";

const EditItemPage = (props) => {
  const { recipeId } = useParams();
  const navigate = useNavigate();
  const foundRecipe = props.recipes.find((recipe) => recipe.id === recipeId);
  //State variables
  // const [recipeAdded, setRecipeAdded] = useState(false);

  //Form state variables
  const [name, setName] = useState(foundRecipe.name);
  const [calories, setCalories] = useState(foundRecipe.calories);
  const [image, setImage] = useState(foundRecipe.image);
  const [servings, setServings] = useState(foundRecipe.servings);
  const [isVegetarian, setIsVegetarian] = useState(foundRecipe.isVegetarian);
  const [ingredients, setIngredients] = useState(foundRecipe.ingredients);
  const [instructions, setInstructions] = useState(foundRecipe.instructions);

  //Form state handlers
  const handleName = (e) => setName(e.target.value);
  const handleCalories = (e) => setCalories(e.target.value);
  const handleImage = (e) => setImage(e.target.value);
  const handleServings = (e) => setServings(e.target.value);
  const handleIsVegetarian = () => setIsVegetarian((current) => !current);
  const handleIngredients = (e, index) => {
    const ingredientsCopy = [...ingredients];
    ingredientsCopy[index] = e.target.value;
    setIngredients(ingredientsCopy);
  };
  const handleInstructions = (e, index) => {
    const instructionsCopy = [...instructions];
    instructionsCopy[index] = e.target.value;
    setInstructions(instructionsCopy);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    foundRecipe.name = name;
    foundRecipe.calories = calories;
    foundRecipe.image = image;
    foundRecipe.servings = servings;
    foundRecipe.isVegetarian = isVegetarian;
    foundRecipe.ingredients = ingredients;
    foundRecipe.instructions = instructions;
    navigate(`/recipe/${recipeId}`);

    // setRecipeAdded(true);
    setTimeout(() => {
      //setRecipeAdded(false);
    }, 3000);
  };

  const addField = (stateVar, setStateFunction) => {
    setStateFunction([...stateVar, ""]);
  };

  return (
    <>
      {/* {recipeAdded && <div className="recipe-added"> 🎉 Recipe added! </div>}*/}
      {
        <form className="add-recipe" onSubmit={handleSubmit}>
          <h2>Edit recipe</h2>
          <Fieldset
            cssClass="name"
            id="name"
            label="Recipe name"
            type="text"
            placeholderText="Recipe name"
            value={name}
            onChangeFunc={handleName}
          />
          <Fieldset
            cssClass="calories"
            id="calories"
            label="Calories"
            type="text"
            placeholderText="Total calories"
            value={calories}
            onChangeFunc={handleCalories}
          />
          <Fieldset
            cssClass="image"
            id="image"
            label="Recipe image"
            type="text"
            placeholderText="Recipe image"
            value={image}
            onChangeFunc={handleImage}
          />
          <Fieldset
            cssClass="servings"
            id="servings"
            label="Servings"
            type="number"
            placeholderText="servings"
            value={servings}
            onChangeFunc={handleServings}
          />
          <Fieldset
            cssClass="isVegetarian"
            id="isVegetarian"
            label="isVegetarian"
            type="checkbox"
            isChecked={isVegetarian}
            value={isVegetarian}
            onChangeFunc={handleIsVegetarian}
          />
          <fieldset className="ingredients">
            <h3>Ingredients</h3>
            {ingredients.map((ingredient, index) => {
              return (
                <Field
                  key={index}
                  cssClass="ingredients"
                  id="ingredients"
                  label={`Ingredient ${index + 1}`}
                  type="text"
                  placeholderText={`Type ingredient ${index + 1}`}
                  value={ingredient}
                  onChangeFunc={(e) => handleIngredients(e, index)}
                />
              );
            })}
            <button
              className="add-field"
              type="button"
              onClick={() => addField(ingredients, setIngredients)}
            >
              Add another ingredient
            </button>
          </fieldset>

          <fieldset className="instructions">
            <h3>Instructions</h3>
            {instructions.map((instruction, index) => {
              return (
                <Field
                  key={index}
                  cssClass="instructions"
                  id="instructions"
                  label={`Step ${index + 1}`}
                  type="text"
                  placeholderText={`Type instruction ${index + 1}`}
                  value={instruction}
                  onChangeFunc={(e) => handleInstructions(e, index)}
                />
              );
            })}
            <button
              className="add-field"
              type="button"
              onClick={() => addField(instructions, setInstructions)}
            >
              Add another step
            </button>
          </fieldset>
          <button className="submit" type="submit">
            Save recipe
          </button>
        </form>
      }
    </>
  );
};

export default EditItemPage;
