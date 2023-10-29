=> What happens if user gives routes which are not mentioned or does not corresponds to our react web app pages, In that case we display 404 page.

=> To create a Not Found 404 page lets creare a new component : 

`import { Link } from "react-router-dom/cjs/react-router-dom.min";
const NotFound = () => {

    return(
    <div className="not-found">

        <h2>Sorry ! Page Not Found</h2>
        <Link to='/'>Go Back To Home Page</Link>

    </div>
    );

}
export default NotFound;`

=> Here we create a Link redirect to home page as mentioned with the Home page route.

=> Using the component : Route search starts from top-bottom under switch, anything that does not match will match with '*' route and load its corresponding path.

`      <Route path="*">
      < NotFound /> 
      </Route> `
