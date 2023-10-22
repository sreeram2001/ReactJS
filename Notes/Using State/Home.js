import { useState } from "react";

const Home = () => 
{   
    //destructure an array
    //first we pass an initial value called superman to output in template
    //then we call the set function the second value in array called setName to update it
    //this will trigger a re-render
    const [name, setName] = useState('superman');
    const [age, updateAge] = useState(24)

    //function to handle the event when a button is clicked
    const handleClick = () => 
    {
        //using set functions to update the values
        setName('Batman');
        updateAge(35);
    }

    return(
        <div className="home">

        <h1>HOME PAGE</h1>
        <p>{name} is {age} years old</p>
        <button onClick={handleClick}>Click Here</button>
        </div>
    );
}

export default Home;
