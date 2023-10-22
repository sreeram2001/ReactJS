//MULTIPLE COMPONENTS

//import components from other files
import Navbar from './Navbar'
import Home from './Home';

function App() {

  return (
    //using a nested component called Navbar, Here App is the root component
    //using another nested component called Home

    <div className="App">
      <Navbar />    
      
      <div className="content">

      <Home></Home>      
      <h1></h1>

      </div>
    </div>
  );
}

export default App;
