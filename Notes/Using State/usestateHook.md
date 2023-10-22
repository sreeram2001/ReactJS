useState hook

=> We can use states to replace a value when an event occurs.

=> To use "useState" hook we need to import it first : import { useState } from "react";

=> useState gives an item the ability to be reactive and make react understand its changes, allows the object to re-render when a change is made to it.

=> Using useState to update a value

=>  //destructure an array

    //first we pass an initial value called superman to output in template

    //then we call the set function the second value in array called setName to update it

    //this will trigger a re-render for the variable name.

    const [name, setName] = useState('superman')

    const [age, updateAge] = useState(24)

=>   using set functions to update it

    //function to handle the event when a button is clicked
    const handleClick = () => 
    {
        //using set functions to update the values
        setName('Batman');
        updateAge(35);
    } 

=> Output : 

<img width="207" alt="Screenshot 2023-10-22 at 10 18 32 PM" src="https://github.com/sreeram2001/ReactJS/assets/40134790/9422ce83-9e9c-4bf0-b86c-629071f078d3">

<img width="195" alt="Screenshot 2023-10-22 at 10 18 54 PM" src="https://github.com/sreeram2001/ReactJS/assets/40134790/d4e94e9c-ea2e-49f0-9f03-7e33584beb24">

