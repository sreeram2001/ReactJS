=> We use useEffect to fetch data from a JSON server

=> Let our initial value be NULL, We take help from useState to fix the state

    //our initial value is an array called blogs
    const [blogs, setBlog] = useState(null)

=> We use useEffect to render data for one time alone, everytime in the initial run alone
  
    //using fetch to get data from JSON Server endpoints
    //that empty array defined in 2nd parameter makes sure that function is fired only once
    useEffect( () => {
        fetch('http://localhost:8000/blogs')
        .then( (res) => {
            //this is asynchoronous and takes time to lead this returns another promise
            return res.json();
        })
        .then( data => {
            setBlog(data); 
    })}, [])

=> We also use conditional loading with the help of useState.

For example if we wish to display "Loading..." for sometime before data loads

    //conditional loading
    const [Pending, setPending] = useState(true)

//we will be using setTimeout to increase waiting period by some 0.5sec to load data

    useEffect( () => {
        
        setTimeout( () => {        fetch('http://localhost:8000/blogs')
        .then( (res) => {
            //this is asynchoronous and takes time to lead this returns another promise
            return res.json();
        })
        .then( data => {
            setBlog(data); 
            setPending(false)
    })},500)

}, [])

//conditional loading, we check if Pending is true only then we display Loading else we don't 
            {Pending && <div>Loading.......</div>}
