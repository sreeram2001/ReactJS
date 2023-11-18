import { useContext, useState } from "react"
import { AppContext } from "./AppContext"

const Budget = () => {

    //we can pull global state props/variables into all componenets now with the help of Context API

    const [budget, setBudget] = useState(0);
    const {updateSate} = useContext(AppContext)

    const handleBudget = () => {
        updateSate( {
            type:'UPDATE_BUDGET',
            payload: budget
        })
    }

    return(
        <div className="alert alert-secondary">
            <label>Enter Budget :  </label>
            <input type="number" id="nubmer" onChange={(event) => setBudget(event.target.value)}></input>
            <br></br>
            <button onClick={handleBudget} className='btn btn-primary mt-3'>Submit</button>
            <br></br>
            <span>BUDGET : {budget}</span>
        </div>
    )
}

export default Budget