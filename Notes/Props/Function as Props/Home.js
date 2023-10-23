import { useState } from "react";
import BlogList from "./BlogList";

//Outputting lists - we will be using an example of a blog.
//we will have a list containing different blog pages/content

const Home = () => 
{   
    //our initial value is an array called blogs which has different objects which stores individual blog contents
    const [blogs, setBlog] = useState([
        { title: 'My new Site', body: 'okokok....', author: 'arjun', id: 1 },
        { title: 'Welcome Folks!', body: 'okokok....', author: 'ansar', id: 2 },
        { title: 'AUdi Here', body: 'okokok....', author: 'david', id: 3 },
        { title: 'BMW M2', body: 'okokok....', author: 'david', id: 4 }
    ])

    //function handle delete, we pass an unique id
    const handleDelete = (id) => 
    {
        const updatedBlogs = blogs.filter( (blog) => blog.id !== id);
        setBlog(updatedBlogs);
    }

    return(
        //we use blogs as props, we pass the blogs array to child component BlogList

        //using BlogList component to reuse component, filter method is used to filter out only certain items from array, it creates a new array
        //we are passing the handleDelete function as a PROP to Bloglist component which is our parent component
        <div className="home">
            <BlogList  blogs = {blogs} title = "All Blogs" />
            <BlogList  blogs = {blogs.filter( (blog) => blog.author === 'david' )} title = "David's Blogs"  handleDelete = {handleDelete}/>
        </div>
    );
}

export default Home;
