import './App.css'
import Navbar from "./components/Navbar" 
import Sidebar from './components/Sidebar'
import Footer from './components/Footer' 
import HomePage from './pages/Homepage'
import { Routes, Route } from "react-router-dom";
import AboutPage from './pages/AboutPage';
import ItemPage from './pages/ItemPage'
import NotFoundPage from './pages/NotFoundPage';


function App() {

  return (
    <>
      <Navbar />
      <main>
        <Sidebar />
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/recipe/:recipeId" element={<ItemPage />} />
        <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
