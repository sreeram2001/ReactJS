import { Link, useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min"
import useFetch from "./useFetch";

const BlogDetails = () => {

    const history = useHistory();

    const {id} = useParams();

    //lets reuse the useFetch custom hook created by us, once again to render separate blogs when user clicks on it from HomePage
    const {data, error, isPending} = useFetch('http://localhost:8000/blogs/' + id);  //id is specific to that particular blogs/webpage content

    //function used to Implement Delete
    const handleDelete = () => {
        fetch('http://localhost:8000/blogs/' + data.id, {
            method:'DELETE'
        })
        .then(
            history.push("/")
        )
    }

    return(
        <div className="blog-details">

            {isPending && <div> Loading ....</div>}

            {error && <div>{error}</div>}
            
            {data && <article>
                <h2>{data.title}</h2>
                <h4>Written by : {data.author}</h4>
                <div>{data.body}</div>
                
                <button onClick={handleDelete}>DELETE</button>
                </article>}
        </div>
    )
}

export default BlogDetails