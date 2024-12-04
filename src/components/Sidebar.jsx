import "./Sidebar.css"
import { Link } from "react-router-dom";

function Sidebar(){
   return(
    <ul className="sidebar">
       <Link to="/"> <li>Home</li></Link>
       <Link to="/about"><li>About</li></Link>
    </ul>
   ); 
}

export default Sidebar;