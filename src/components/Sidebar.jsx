import "./Sidebar.css"
import { Link } from "react-router-dom";

function Sidebar(){
   return(
    <ul className="sidebar">
       <Link to="/"> <li><a href="#">Home</a></li></Link>
       <Link to="/about"> <li><a href="#">About</a></li></Link>
    </ul>
   ); 
}

export default Sidebar;