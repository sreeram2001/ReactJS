=> Lets gather form data and do a post request our JSON Server.

=> Lets get the input data from user : 

1. `    //lets create Hooks to store the dynamic values of inputs
    const [title, setTitle] = useState('');`

2.  We get the event object 'e' and assign it to title variable, so that title gets updated dynamically whenever title field is modified by User.

`        <label> Blog Title : </label>
                <input type="text" required value={title} onChange={ (e) => setTitle(e.target.value) }></input>`

3. A Form Example : 

`           <form>

                <label> Blog Title : </label>
                <input type="text" required value={title} onChange={ (e) => setTitle(e.target.value) }></input>

                <label> Blog Content : </label>
                <textarea required value={body} onChange={ (e) => setBody(e.target.value)}></textarea>

                <label> Blog Author : </label>
                <input type="text" required value={author} onChange={ (e)=> setAuthor(e.target.value)}></input>

                <button>SUBMIT</button>

            </form>`
