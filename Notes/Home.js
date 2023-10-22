import { useState } from "react";

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
        <div className="home">
            {
                //we cycle through the array, blog is the iterator here for blogs array
                blogs.map( (blog) => (

                    //we use a key property which react uses to keep track of each item in the DOM
                    //the key must be unique
                    <div className="blog-preview" key={blog.id}>
                        <h2>{blog.title}</h2>
                        <p> Written by {blog.author}</p>
                    </div>

                ))
            }
        </div>
    );
}

export default Home;
