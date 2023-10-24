=> To Use a Custom Hook we should first create a separate component and the function named used should start with the name "use"

=> E.g : 

//we make a custom Hook called useFetch, hooks should start with "use" name as prefix
const useFetch = (url) => {


=> We now generalise it, we keep all useState and useEffect functionalities inside this custom Hook :

    //to display error message
    const [error, setError] = useState(null);

    //that empty array defined in 2nd parameter makes sure that function is fired only once
    useEffect( () => {
        
        setTimeout( () => {fetch(url)
        .then( (res) => {


=> Calling our custom Hook : 

    //we call our custom Hook useFetch with a parameter url
    //it in turn returns us with blogs, errors and Loading pending conditional confirmation
    const {data:blogs, error, Pending} = useFetch('http://localhost:8000/blogs');

=> refer to the file attached for better understanding.
