
=> We ask the JSON servevr to delete the particular content, we pass on the unique id associated with page contents, we pass it to the route path.

=> We path method DELETE as second argument in fetch to jSON server.

`    const {data, error, isPending} = useFetch('http://localhost:8000/blogs/' + id);  //id is specific to that particular blogs/webpage content

    //function used to Implement Delete
    const handleDelete = () => {
        fetch('http://localhost:8000/blogs/' + data.id, {
            method:'DELETE'
        })
    }`

=> after delete we direct the page to Home page

`    //function used to Implement Delete
    const handleDelete = () => {
        fetch('http://localhost:8000/blogs/' + data.id, {
            method:'DELETE'
        })
        .then(
            history.push("/")
        )
    }`

