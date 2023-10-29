


To Install the react router : npm install react-router-dom@5

Setup React Route :

1. Go to Root component file, in our case it is App.js

2. import the necessary components 

  import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

3. Now surround your div contents with Router Component/BrowserRouter component : 

Example :
function App() {
  //react converts all data types no.s, arrays to string before outputing
  //but it can't convert objects and booleans
  return (
    //using a nested component called Navbar, Here App is the root component
    //using another nested component called Home
    <Router>
    <div className="App">
      <Navbar />    
      <div className="content">
      <Home></Home>      
      <h1></h1>
      </div>
    </div>
    </Router>
  );
}

4. Next Decide where our page contents to go when we go to different pages, Example if we wish to go inside div class content "Home" Component :

      <div className="content">
      <Home></Home>      
      </div>

Use a <Switch></Switch> component, this make sure that only one route shows at one time, all our routes would get inside this switch component.

      <div className="content">
      <Switch>
      <Home></Home>   
      </Switch>   
      </div>

5. Next create a route for each page, 

      <div className="content">
      <Switch>
        <Route path='/'> 
      </Route> 
      </Switch>   
      </div>

We Route to the path mentioned in the tag, Here '/' path Means our Home Page

6. When the User visits this '/' Route, we display the Home component to them.

  <div className="content">
  <Switch>
      <Route path='/'>
      <Home></Home>  
      </Route>   
  </Switch>   
  </div>

Everytime the User visits the path '/' react app displays the Home page contents
