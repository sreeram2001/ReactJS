import { useState, useEffect } from "react";

//we make a custom Hook called useFetch, hooks should start with "use" name as prefix
const useFetch = (url) => {

    //to display error message
    const [error, setError] = useState(null);

    //our initial value is an array called blogs
    const [data, setBlog] = useState(null)
    
    //conditional loading
    const [Pending, setPending] = useState(true)

     //using fetch to get data from JSON Server endpoints
    //that empty array defined in 2nd parameter makes sure that function is fired only once
    useEffect( () => {
        
        setTimeout( () => {fetch(url)
        .then( (res) => {

            //if endpoint does not exist, server errors
            if(!res.ok)
            {
                throw Error('Could Not Fetch Data')
            }
            //this is asynchoronous and takes time to lead this returns another promise
            return res.json();
        })
        .then( data => {
            setBlog(data); 
            setPending(false)
            setError(null)      //if data is properly loaded from server set error to null
    })
    .catch( err => {
        console.log(err.message)
        setError(err.message);
        setPending(false)           //once error is displayed, the conditional Loading can be stopped

    }

    )
    },500)}, [])

    return {error, data, Pending};

}

export default useFetch
