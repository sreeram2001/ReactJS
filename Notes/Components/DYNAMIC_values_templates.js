// import logo from './logo.svg';

function App() {

  //react converts all data types no.s, arrays to string before outputing
  //but it can't convert objects and booleans

  let arr = [1,2,3,4,5];

  //you can also use links as string and pass it as javascript statements
  const link = "https://github.com/";

  return (
    <div className="App">

      <div className="content">
      <h1>{arr}</h1>              //using curly braces to write javascript statements
      <a href = {link}></a>        //link is the variable which as the dynamic value of url
      </div>

    </div>
  );
}

export default App;
