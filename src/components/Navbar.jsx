import "./Navbar.css";
import logo from "../img/logo.png"

function Navbar() {
  return (
    <nav className="navbar">
        <img src={logo} className="logo" ></img>
        <h1 className="title">My recipe book</h1>
      <ul>
        <li><a href="#">All recipes</a></li>
        <li><a href="#">Favorite recipes</a></li>
        <li><a href="#">Create new recipe</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
