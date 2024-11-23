import "./HomePage.css";
import recipesArray from "../data/data2.json";
import Card from "../components/Card";
import { Link } from "react-router-dom";
import Form from "../components/Form"
import { useState } from "react";

function HomePage() {
  const recipes = recipesArray;

  return (
    <>
    <Form/>
    <ul className="recipe-list">
      {recipes.map((recipe, index) => {
        return (
            <Link to={"/recipe/" + recipe.id}>
            <Card recipe={recipe} key={index} />
          </Link>
        );
      })}
    </ul></>
  );
}

export default HomePage;
