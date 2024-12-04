import "./Navbar.css";
import logo from "../img/logo.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">
        <img src={logo} className="logo"></img>
      </Link>
      <Link to="/">
        {" "}
        <p className="title">My recipe book</p>{" "}
      </Link>

      <ul>
      <Link to="/favorite-recipes">
        <li>
          Favorite recipes
        </li>
      </Link>
      </ul>
    </nav>
  );
}

export default Navbar;
