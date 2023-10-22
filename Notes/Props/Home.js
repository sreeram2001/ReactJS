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
        { title: 'AUdi Here', body: 'okokok....', author: 'david', id: 3 }
    ])

    return(
        //we use blogs as props, we pass the blogs array to child component BlogList
        <div className="home">
            <BlogList  blogs = {blogs} title = "Blogs" />
        </div>
    );
}

export default Home;