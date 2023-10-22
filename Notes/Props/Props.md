Props is short for properties and they are used to pass data between React components. React’s data flow between components is uni-directional (from parent to child only).

=> We want reuse the templates we have made, so we can props, we can create an external component to house this template.

=> Lets Create a Child Component Now : 

const BlogList = () => {
    return ( 
        <div className="blog-list">

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


=> From our Parent component we try to call the child Component BlogList : 

        <div className="home">
            <BlogList />
        </div>

But we happen to get an Error, that is because in the child component we have used an object called blogs, which we have not passed from parent component, this is where we use props that is properties for short, we will pass the props that is blogs in our case from parent to child component.

<img width="614" alt="Screenshot 2023-10-23 at 1 04 40 AM" src="https://github.com/sreeram2001/ReactJS/assets/40134790/86ab0f9c-c466-418d-82aa-7c5de34b876c">


=> Now we pass props : 

        //we use blogs as props, we pass the blogs array to child component BlogList
        <div className="home">
            <BlogList  blogs = {blogs} />
        </div>

Child Component recieving the props and using it : 

const BlogList = (props) => {

    const blogs = props.blogs   //we use the props passed from parent component
    .......


=> We can also pass multiple props :

        //we use blogs as props, we pass the blogs array to child component BlogList
        <div className="home">
            <BlogList  blogs = {blogs} title = "Blogs" />
        </div>

const BlogList = (props) => {

    const blogs = props.blogs   //we use the props passed from parent component
    const title = props.title


=> Another Way to Use Props : 

we can directly use blogs, title instead of using props.blogs and props. title
const BlogList = ({blogs, title}) => {

    // const blogs = props.blogs   //we use the props passed from parent component
    // const title = props.title
