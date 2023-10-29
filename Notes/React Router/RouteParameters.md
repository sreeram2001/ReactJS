
=> Suppose we wish to pass some specific id which corresponds to a particular content or a specific blog in a blogs website, we will have to use this Route Parameters. we pass the associated id in the path to access it.

=> Example : We use useParams() from react router library to get the id from the route path to use it inside our component.

`import { useParams } from "react-router-dom/cjs/react-router-dom.min"

const BlogDetails = () => {

    const {id} = useParams()

    return(
        <div className="blog-details">
            <h2>Blog Details : {id}</h2>
        </div>
    )
}`

Add the Route for this page : 

`      <Route path='/blogs/:id'>
      < BlogDetails /> 
      </Route> `


=> You can use the <Link> property to redirect to a specific route when use clicks on an component, E.g : we use the blog.id as Router parameter to traverse to that web page.

`                        {/* we here route our links to this path, which will redirect to BlogDetails Page*/}

                        <Link to={`/blogs/${blog.id}`}>
                        <h2>{blog.title}</h2>
                        <p> Written by {blog.author}</p>
                        </Link>`



