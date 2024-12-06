import './App.css'
import Navbar from "./components/Navbar" 
import Sidebar from './components/Sidebar'
import Footer from './components/Footer' 
import HomePage from './pages/HomePage'
import { Routes, Route } from "react-router-dom";
import AboutPage from './pages/AboutPage';
import ItemPage from './pages/ItemPage'
import EditItemPage from './pages/EditItemPage'
import FavoritesPage from './pages/FavoritesPage'
import NotFoundPage from './pages/NotFoundPage';
import recipesArray from "./data/data4.json";
import { useState } from "react";

function App() {

    const [recipes, setRecipes] = useState(recipesArray);

  
  return (
    <>
      <Navbar />
      <div className="page-container">
        <Sidebar />
        <Routes>
          <Route
            path="/"
            element={<HomePage recipes={recipes} setRecipes={setRecipes} />}
          />
          <Route path="/about" element={<AboutPage />} />
          <Route
            path="/favorite-recipes"
            element={
              <FavoritesPage recipes={recipes} setRecipes={setRecipes} />
            }
          />
          <Route
            path="/recipe/:recipeId"
            element={<ItemPage recipes={recipes} />}
          />
          <Route
            path="/recipe/edit/:recipeId"
            element={<EditItemPage recipes={recipes} />}
          />
          <Route path="*" element={<NotFoundPage />} />


          
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
