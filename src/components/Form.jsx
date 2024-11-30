import { useState } from "react";
import "./Form.css";
import Fieldset from "./InputField";

const Form = (props) => {
  const [name, setName] = useState("");
  const [calories, setCalories] = useState("");
  const [image, setImage] = useState("");
  const [servings, setServings] = useState(1);
  const [ingredients, setIngredients] = useState([]);
  const [instructions, setInstructions] = useState("");

  const handleName = (e) => setName(e.target.value);
  const handleCalories = (e) => setCalories(e.target.value);
  const handleImage = (e) => setImage(e.target.value);
  const handleServings = (e) => setServings(e.target.value);
  const handleIngredients = (e) => {
    const ingredientsCopy = [...ingredients];
    ingredients[0] = e.target.value;
    setIngredients(ingredientsCopy);

  };
  const handleInstructions = (e) => setInstructions(e.target.value);

  function createRandomId() {
    const randomId = Math.floor(Math.random() * 99999) + "a";
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
    setIngredients([]);
    setInstructions("");
  }
  
  return (
    <>
      <form onSubmit={handleSubmit}>
        <Fieldset
          cssClass="name"
          id="name"
          label="Recipe name"
          type="text"
          placeholderText="Recipe name"
          value= {name}
          onChangeFunc={handleName}
        />
        <Fieldset
          cssClass="calories"
          id="calories"
          label="Calories"
          type="text"
          placeholderText="Total calories"
          value= {calories}
          onChangeFunc={handleCalories}
        />
        <Fieldset
          cssClass="image"
          id="image"
          label="Recipe image"
          type="text"
          placeholderText="Recipe image"
          value= {image}
          onChangeFunc={handleImage}
        />
        <Fieldset
          cssClass="servings"
          id="servings"
          label="servings"
          type="number"
          placeholderText="servings"
          value= {servings}
          onChangeFunc={handleServings}
        />
        <Fieldset
          cssClass="ingredients"
          id="ingredients"
          label="Ingredients"
          type="text"
          placeholderText="Type ingredient 1"
          value= {ingredients[0]}
          onChangeFunc={handleIngredients}
        />

        <fieldset className="instructionsField">
          <label htmlFor="instructions">Instructions</label>
          <input
            id="instructions[0]"
            value={instructions}
            onChange={handleInstructions}
            name="instructions"
            type="text"
            placeholder="Type step 1"
          ></input>
          <input
            id="instructions[1]"
            value={instructions}
            onChange={handleInstructions}
            name="instructions"
            type="text"
            placeholder="Type step 2"
          ></input>
          <input
            id="instructions[2]"
            value={instructions}
            onChange={handleInstructions}
            name="instructions"
            type="text"
            placeholder="Type step 3"
          ></input>
        </fieldset>
        <button type="submit">Add recipe</button>
      </form>
    </>
  );
};

export default Form;
