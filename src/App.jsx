import './App.css'
import Navbar from "./components/Navbar" 
import Sidebar from './components/Sidebar'
import Footer from './components/Footer' 
import HomePage from './pages/Homepage'
import { Routes, Route } from "react-router-dom";
import AboutPage from './pages/AboutPage';
import ItemPage from './pages/ItemPage'
import NotFoundPage from './pages/NotFoundPage';
import recipesArray from "./data/data2.json";
import { useState } from "react";

function App() {

    const [recipes, setRecipes] = useState(recipesArray);
  
    function deleteCard(id) {
      const newArray = [...recipes];
      
      newArray.map((recipe) => {
        if (id === recipe.id){
          console.log("found match ", recipe.name);
          newArray.splice(newArray.indexOf(recipe), 1);
          console.log(newArray);
          setRecipes(newArray);
        }
      });
    }
  
  return (
    <>
      <Navbar />
      <main>
        <Sidebar />
        <Routes>
        <Route path="/" element={<HomePage recipes = {recipes} setRecipes={setRecipes} deleteCard = {deleteCard} />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/recipe/:recipeId" element={<ItemPage recipes={recipes}/>} />
        <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
