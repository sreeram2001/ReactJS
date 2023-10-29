
=> we Use a <Link> </Link> tag to intercept the requests made to server and handle the route requests on its own and only in the browser.

=> import it 

`import { Link } from "react-router-dom/cjs/react-router-dom.min";`

=> Link tag does not have href instead it has "to"

      `      <Link to="/">HOME</Link>
            <Link to="/create" style={
                {
                backgroundColor:"#000000",
                color:"#f87800",
                borderRadius:"7px"
                }
            }>NEW BLOG</Link>`
