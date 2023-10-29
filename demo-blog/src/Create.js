import { useState } from "react"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Create = () =>
{

    //lets create Hooks to store the dynamic values of inputs
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();     //this method is used to prevent the form from refreshing the page when SUBMIT button is clicked
        const blog = {title, body, author};       //lets store blog contents inside blog object

        fetch('http://localhost:8000/blogs', {
            method:'POST',
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify(blog)
        })
        .then( () => {
            alert("BLOG SUCCESSFULLY ADDED")
            history.push("/")
        })
    }

    return(
        <div className="create">
            
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>

                <label> Blog Title : </label>
                <input type="text" required value={title} onChange={ (e) => setTitle(e.target.value) }></input>

                <label> Blog Content : </label>
                <textarea required value={body} onChange={ (e) => setBody(e.target.value)}></textarea>

                <label> Blog Author : </label>
                <input type="text" required value={author} onChange={ (e)=> setAuthor(e.target.value)}></input>

                <button>SUBMIT</button>

            </form>
        </div>

        
    )
}

export default Create