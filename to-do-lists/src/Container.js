import { useState } from "react";

const Container = () => {

    const [input, setInput] = useState("")
    const [todoList, settodoList] = useState([])
    const [completedTasks, setcompletedTasks] = useState(0)

    const handleClick = () => {
        //each entry of todoList will have a task, with id, task content and completion status
        const id = todoList.length + 1;
        todoList.push(
            {id:id,
            task:input,
        completeStatus : false}
        )
        
        settodoList(todoList)
        setInput("")
        console.log(todoList)
    }

    const handleComplete = (id) => {
        console.log(id)
        let list = todoList.map( (todo) => {
            let item = {}

            if(todo.id === id)
            {
                //if task is still pending, update it as complete and increase the counter
                if(!todo.completeStatus)
                {
                    setcompletedTasks(completedTasks+1)
                }
                else
                {
                    //if the task is complete but user wishes to update it to pending state
                    //we unstrike this task to make it back to pending
                    setcompletedTasks(completedTasks-1)
                }

                item = { ...todo, completeStatus: !todo.completeStatus}
            }
            else 
            {
                item = { ...todo}
            }

            return item
        })
        settodoList(list)
    }

    const handleClear = () => {
        settodoList([])
        setcompletedTasks(0)
    }

    return(
        <div className="Container">

        <h2>TO DO LISTS</h2>
            
            <div className="Text">
                <input type="text" value={input} onInput={ (e) => {setInput(e.target.value)}}></input>
            </div>

            <br></br>
            <button className="BUTTON" onClick={ () => {handleClick()}}>ADD</button>

            <div className="Tasks">
            <div className="TaskCount">
                <b>Pending Tasks</b> {todoList.length - completedTasks}
            </div>
            <div className="TaskCount">
                <b>Completed Tasks</b> {completedTasks}
            </div>
            </div>

        <div>
          <ul>  
            { todoList.map((todo) => {
                return(
                    <div className="LIST" completeStatus = {todo.completeStatus}
                    id = {todo.id} onClick={ () => handleComplete(todo.id)} style={
                        { listStyle: "none", textDecoration: todo.completeStatus && "line-through"}}>
                          {todo.task}
                    </div>
                )
            })}
          </ul>
        </div>

        <button className="BUTTON" onClick={handleClear}>CLEAR </button>

        </div>
    )
}

export default Container;