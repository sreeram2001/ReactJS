
=> Lets try creating different routes to navigate to different pages 

=> IN THE following example we try to route '/' to Home page and '/create' to create component page, but the problem with React is it will match the first path, i.e. if '/create' is given it matches first '/' as it search from top to bottom of Routers Under Switch.

`    <Router>

    <div className="App">

      <Navbar />    
      <div className="content">
      <Switch>

      <Route path='/'>
      <Home></Home>  
      </Route> 

      <Route path='/create'>
      < Create /> 
      </Route> 
      
      </Switch>  
      </div>

    </div>
    </Router>`

=> To get rid of this Issue, we use the exact keyword to match the exact path/route mentioned.
`
      <Route exact path='/'>
      <Home></Home>  
      </Route> 

      <Route path='/create'>
      < Create /> 
      </Route> `
