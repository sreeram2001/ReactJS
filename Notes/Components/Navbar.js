const Navbar = () => {
    //You can use index.css file to edit overall styles of elements in the react project
    //inline css styling done for a link tags, we pass a dynamic value to style with an object which
    //contains styling properties in form of key-value pairs
    const title = "TopTechie Blog"
    return (
        <nav className="navbar">

        <h1>{title}</h1>

        <div className="links">

            <a href="/">HOME</a>
            <a href="/create" style={
                {
                backgroundColor:"#000000",
                color:"#f87800",
                borderRadius:"7px"
                }
            }>NEW BLOG</a>

        </div>
        </nav>
    );
}
 
export default Navbar;
