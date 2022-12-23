import { Link } from "react-router-dom";
const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Kanuri's Blog</h1>
            <div className="Links">
            <Link to="/">Home </Link>
            <Link to="/create">New Blog</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;