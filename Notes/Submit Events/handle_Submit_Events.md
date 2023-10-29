=> use onSubmit event in forms : 
`   <form onSubmit={handleSubmit}>`

=> Writing a Function to get the input values and POST it.

`    const handleSubmit = (e) => {

        e.preventDefault();     //this method is used to prevent the form from refreshing the page when SUBMIT button is clicked
        const blog = {title, body, author};       //lets store blog contents inside blog object
    }`

=> console OUTPUT : 

<img width="345" alt="Screenshot 2023-10-29 at 8 48 02 PM" src="https://github.com/sreeram2001/ReactJS/assets/40134790/ab699946-9a2a-4462-9a28-35352d6c88a0">
