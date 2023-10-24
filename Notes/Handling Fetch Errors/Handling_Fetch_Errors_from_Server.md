=> We will use catch and throw block to handle server fetch errors.

=> //let us set a variable with value null, which will hold error messages in future if any occurs
   
 //to display error message
    const [error, setError] = useState(null); 


=>     throw Error if Endpoint is invalid : 


  setTimeout( () => {fetch('http://localhost:8000/blogss')
        .then( (res) => {

            //if endpoint does not exist, server errors
            if(!res.ok)
            {
                throw Error('Could Not Fetch Data')
            }
            //this is asynchoronous and takes time to lead this returns another promise
            return res.json();
        })


=>    setError() is used to update the error message , we will use error variable to display the error


    .catch( err => {
        console.log(err.message)
        setError(err.message);
        setPending(false)           //once error is displayed, the conditional Loading can be stopped

    }


=> Make sure to reset Error message when user gets a proper data : 

        .then( data => {
            setBlog(data); 
            setPending(false)
            setError(null)      //if data is properly loaded from server set error to null
    })


=> DIsplay of Error : conditional display 

            {error && <div>{ error }</div>}

=> O/P : 

<img width="676" alt="Screenshot 2023-10-25 at 12 35 35 AM" src="https://github.com/sreeram2001/ReactJS/assets/40134790/3d811239-058e-4a92-830f-4a7a3ff04fbb">


