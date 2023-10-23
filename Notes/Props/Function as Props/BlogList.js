
//here we import handleDelete which is a function from CHild COmponent Home as a Prop
const BlogList = ({blogs, title, handleDelete}) => {

    // const blogs = props.blogs   //we use the props passed from parent component
    // const title = props.title

    return ( 
        
        <div className="blog-list">
        <h1>{title}</h1>
            {
                //we cycle through the array, blog is the iterator here for blogs array
                blogs.map( (blog) => (

                    //we use a key property which react uses to keep track of each item in the DOM
                    //the key must be unique
                    
                    //we pass in id to delete a particular blog by calling handleDelete function
                    <div className="blog-preview" key={blog.id}>
 
                        <h2>{blog.title}</h2>
                        <p> Written by {blog.author}</p>
                        <button onClick={ () => handleDelete(blog.id) }>DELETE</button>
                    </div>
                ))
            }

        </div>
     );
}

export default BlogList;
