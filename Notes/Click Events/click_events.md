CLICK EVENTS : 

=> An Example : 

const Home = () => 
{   

    //function to handle the event when abutton is clicked
    const handleClick = () => 
    {
        console.log("Hey There")
    }

    return(
        <div className="home">

        <h1>HOME PAGE</h1>
        <button onClick={handleClick}>Click Here</button>

        </div>
    );
}

=> In the above example handleClick() is the function which is used to handle an event when the button is clicked.

=> In the button tag we call the function as dynamic value (i.e. {handleClick} ), we cannot use handleClick() as that will invoke the function automatically in javascript.

=> We pass the handleClick that is we hook it up with button onClick.

=> Output in Console : 
<img width="349" alt="Screenshot 2023-10-22 at 8 04 39 PM" src="https://github.com/sreeram2001/ReactJS/assets/40134790/e0d456d9-ad84-477c-ac66-52d071019a2f">


=> What If we have to pass an argument/parameters to a function, i.e. handleClick('name') if we use this, it will again automatically invoke the function as we are doing a function call in javascript, so we will have to wrap it inside another anonymous function else the paranthesis will invoke the function.

=> So In case of calling a function which takes a parameter, we will introduce an anonymous function which will in turn call another function.

=> Example of calling a function with parameters : 

=>     //function which takes parameters
    const handle = (name) =>
    {
        console.log(name);
    }

    return(
        <div className="home">

        <h1>HOME PAGE</h1>
        <button onClick={handleClick}>Click Here</button>
        <button onClick = { () => {
            //In here the anonymous function will get invokes first when the button is clicked
            //which will in turn invoke the another function which takes the parameter
            handle('Sree');
        }
        }>Click It</button>

        </div>
    );
}
