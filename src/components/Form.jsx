import { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [calories, setCalories] = useState("");
  const [image, setImage] = useState("");
  const [servings, setServings] = useState(1);
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");

  const handleName = (e) => setName(e.target.value);
  const handleCalories = (e) => setCalories(e.target.value);
  const handleImage = (e) => setImage(e.target.value);
  const handleServings = (e) => setServings(e.target.value);
  const handleIngredients = (e) => setIngredients(e.target.value);
  const handleInstrunctions = (e) => setInstructions(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecipe = { id, name, calories, image, servings, ingredients, instructions };

    const newArray = [...recipesArray, newRecipe]
    

}



    

  return (
    <>
      <form /* onSubmit={handleSubmit} */>
        <label htmlFor="name"> Recipe name</label>
        <input
          id="name"
          value={name}
          onChange={handleName}
          name="name"
          type="text"
          placeholder="recipe name"
        ></input>
        <label htmlFor="calories">Calories</label>
        <input
          id="calories"
          value={calories}
          onChange={handleCalories}
          name="calories"
          type="text"
          placeholder="calories"
        >
        
        </input>
        <label htmlFor="image"> Image url</label>
         <input
          id="image"
          value={image}
          onChange={handleImage}
          name="image"
          type="text"
          placeholder="image url"
        >

        </input>
        <label htmlFor="servings"> Servings</label>
        <input

          id="servings"
          value={servings}
          onChange={handleServings}
          name="servings"
          type="text"
          placeholder="1"
        >
        </input>
        <label htmlFor="ingredients">Ingredients</label>
        <input
          id="ingredients"
          value={ingredients}
          onChange={handleIngredients}
          name="ingredients"
          type="text"
          placeholder="ingredients"
        >

        </input>
        <label htmlFor="instructions">Instructions</label>
        <input
          id="instructions"
          value={instructions}
          onChange={handleInstrunctions}
          name="instructions"
          type="text"
          placeholder="instructions"
        >
        </input>
        <button type="submit" >Add recipe</button>
         
      </form>
    </>
  );
};

export default Form;
