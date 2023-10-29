import { Link } from "react-router-dom/cjs/react-router-dom.min";

const NotFound = () => {
    return(
    <div className="not-found">
        <h2>Sorry ! Page Not Found</h2>
        <Link to='/'>Go Back To Home Page</Link>
    </div>
    );
}

export default NotFound;