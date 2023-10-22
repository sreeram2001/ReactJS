useState hook

=> We can use states to replace a value when an event occurs.

=> To use "useState" hook we need to import it first : import { useState } from "react";

=> useState gives an item the ability to be reactive and make react understand its changes, allows the object to re-render when a change is made to it.

=> Using useState to update a value

=>     //destructure an array
    //first we pass an initial value called superman to output in template
    //then we call the set function the second value in array called setName to update it
    //this will trigger a re-render for the variable name.
    const [name, setName] = useState('superman')
