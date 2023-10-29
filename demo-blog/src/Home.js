import BlogList from "./BlogList";
import useFetch from "./useFetch"

//Outputting lists - we will be using an example of a blog.
//we will have a list containing different blog pages/content

const Home = () => 
{   
    //we call our custom Hook useFetch with a parameter url
    //it in turn returns us with blogs, errors and Loading pending conditional confirmation
    const {data:blogs, error, Pending} = useFetch('http://localhost:8000/blogs');

    return(
        //we use blogs as props, we pass the blogs array to child component BlogList
        //using BlogList component to reuse component, filter method is used to filter out only certain items from array, it creates a new array
        //we are passing the handleDelete function as a PROP to Bloglist component which is our parent component
        <div className="home">

            {error && <div>{ error }</div>}
            {Pending && <div>Loading.......</div>}

           {blogs && <BlogList  blogs = {blogs} title = "All Blogs"/> }
           {blogs && <BlogList  blogs = {blogs.filter( (blog) => blog.author === 'Rahul' )} title = "Rahul's Blogs" /> }
        </div>
    );
}

export default Home;