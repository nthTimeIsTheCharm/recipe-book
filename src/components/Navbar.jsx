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
        <li>
          <a href="#">Favorite recipes</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
