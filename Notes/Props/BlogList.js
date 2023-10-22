const BlogList = ({blogs, title}) => {

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
                    
                    <div className="blog-preview" key={blog.id}>
 
                        <h2>{blog.title}</h2>
                        <p> Written by {blog.author}</p>
                    </div>
                ))
            }

        </div>
     );
}

export default BlogList;