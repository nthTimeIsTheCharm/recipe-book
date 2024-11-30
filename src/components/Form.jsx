import { useState } from "react";
import "./Form.css";
import Fieldset from "./Fieldset";
import Field from "./Field";

const Form = (props) => {
  //State variables
  const [recipeAdded, setRecipeAdded] = useState(false);
  const [formOpen, setFormOpen] = useState(false);

  //Form state variables
  const [name, setName] = useState("");
  const [calories, setCalories] = useState("");
  const [image, setImage] = useState("");
  const [servings, setServings] = useState(1);
  const [ingredients, setIngredients] = useState(["", "", ""]);
  const [instructions, setInstructions] = useState(["", ""]);

  //Form state handlers
  const handleName = (e) => setName(e.target.value);
  const handleCalories = (e) => setCalories(e.target.value);
  const handleImage = (e) => setImage(e.target.value);
  const handleServings = (e) => setServings(e.target.value);
  const handleIngredients = (e, index) => {
    console.log(index);
    console.log(e.target.value);
    const ingredientsCopy = [...ingredients];
    ingredientsCopy[index] = e.target.value;
    setIngredients(ingredientsCopy);
  };
  const handleInstructions = (e, index) => {
    console.log(index);
    console.log(e.target.value);
    const instructionsCopy = [...instructions];
    instructionsCopy[index] = e.target.value;
    setInstructions(instructionsCopy);
  };

  function createRandomId() {
    const randomId = Math.floor(Math.random() * 9999999) + "a";
    return randomId;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const newRecipe = {
      id: createRandomId(),
      name,
      calories,
      image,
      servings,
      ingredients,
      instructions,
    };

    props.setRecipes([newRecipe, ...props.recipes]);

    setName("");
    setCalories("");
    setImage("");
    setServings(1);
    setIngredients(["", "", ""]);
    setInstructions(["", ""]);

    setRecipeAdded(true);
    setTimeout(()=>{
      setRecipeAdded(false);
      setFormOpen(false);
    },3000)
  };

  const addField = (stateVar, setStateFunction) => {
    setStateFunction([...stateVar, ""]);

  }

  return (
    <>
      {!formOpen && (
        <button
          className="show-form"
          onClick={() => {
            setFormOpen(true);
          }}
        >
          Add new recipe
        </button>
      )}
      {recipeAdded && <div className="recipe-added"> 🎉 Recipe added! </div>}
      {formOpen && !recipeAdded && (
        <form className="add-recipe" onSubmit={handleSubmit}>
          <h2>Add new recipe</h2>
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
            Add recipe
          </button>
          <button
            type="button"
            className="hide-form"
            onClick={() => {
              setFormOpen(false);
            }}
          >
            Cancel
          </button>
        </form>
      )}
    </>
  );
};

export default Form;
