import { useState } from "react";

const Home = () => 
{   

    //function to handle the event when abutton is clicked
    const handleClick = () => 
    {
        console.log("Hey There")
    }

    //function which takes parameters
    const handle = (name, e) =>
    {
        console.log(name, e);
    }

    return(
        <div className="home">

        <h1>HOME PAGE</h1>
        <button onClick={handleClick}>Click Here</button>
        <button onClick = { (e) => {
            //In here the anonymous function will get invokes first when the button is clicked
            //which will in turn invoke the another function which takes the parameter
            //e is event object
            handle('Sree', e);
        }
        }>Click It</button>

        </div>
    );
}

export default Home;
