
=> We get the contents on blog and make a POST request to our JSON dummy server, we use fetch pass the url and in the second parameterm we pass in the method, body and headers, we use JSON.stringify to convert our input field into JSON String.

=> Since this is an asynchronous method it will return a promise hence we use .then() which triggers another function

`const handleSubmit = (e) => {
        e.preventDefault();     //this method is used to prevent the form from refreshing the page when SUBMIT button is clicked
        const blog = {title, body, author};       //lets store blog contents inside blog object

        fetch('http://localhost:8000/blogs', {
            method:'POST',
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify(blog)
        })
        .then( () => {
            alert("BLOG SUCCESSFULLY ADDED")
        })
    }`

=> Now lets redirect the user to the page where his/her new Blog contents is added. We can use a Hook called as use History for this. Lets redirect them to a new Route
`
 const history = useHistory();
  history.go(-1);`

This will redirect the page to previous visited page, history.go(-2) will redirect to the last 2nd page visited by the User.

=> To redirect to a specific page we can history.push(route), in the below example "/" route refers to Home Page

`
history.push("/")`

