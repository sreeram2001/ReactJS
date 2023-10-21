=> Components are one of the core concepts of React. They are the foundation upon which you build user interfaces (UI).

=> Components are independent and reusable bits of code. They serve the same purpose as JavaScript functions, but work in isolation and return HTML.

=> Components Contains a logic and a Template.

=> Example of a Component : 

'''
//function names should start with capital letter

function App() {
  return (
    //class cannot be used instead className is used as class is a reservde keyword in javascript.
    <div className="App">

      <div className="content">
      <h1>Hi There </h1>
      </div>
    </div>
  );
}

//export default is mentioned so that this component can be used outside in other files.
export default App;
'''

=> similarily import is used in as file header to import a component from other file.
