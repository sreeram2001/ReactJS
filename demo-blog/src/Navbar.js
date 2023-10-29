import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Navbar = () => {

    const title = "TopTechie Blog"
    return (
        <nav className="navbar">

        <h1>{title}</h1>

        <div className="links">

            <Link to="/">HOME</Link>
            <Link to="/create" style={
                {
                backgroundColor:"#000000",
                color:"#f87800",
                borderRadius:"7px"
                }
            }>NEW BLOG</Link>

        </div>
        </nav>
    );
}
 
export default Navbar;