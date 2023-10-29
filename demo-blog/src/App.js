//import components from other files
import Navbar from './Navbar'
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';

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
      <Switch>

      <Route exact path='/'>
      <Home></Home>  
      </Route> 

      <Route path='/create'>
      < Create /> 
      </Route> 

      <Route path='/blogs/:id'>
      < BlogDetails /> 
      </Route> 
      
      <Route path="*">
      < NotFound /> 
      </Route> 

      </Switch>  
      </div>

    </div>
    </Router>
  );
}

export default App;
