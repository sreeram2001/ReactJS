import { useContext, useState } from "react"
import { AppContext } from "./AppContext"
import { v4 as uuidv4 } from 'uuid';

const AddExpense = () => {
    const {updateSate} = useContext(AppContext)
    const [name, setName] = useState('')
    const [cost, setCost] = useState('')

    const handleSubmit = (event) => {
            event.preventDefault();

            const expense = {
                //uuidv4 will create random ids
                id : uuidv4(),  
                name: name,
                cost: parseInt(cost)
            };

            updateSate( { 
                type: 'NEW_EXPENSE',
                payload: expense
            })
    }

    return(
        <form onSubmit={handleSubmit}> 
            <div className='row'>

				<div className='col-sm'>
					<label for='name'>Name</label>
                    <input required='required' type='text' className='form-control' id='name' onChange={(event) => setName(event.target.value)}></input>
				</div>

                <div className="col-sm">
                    <label for='cost'>Cost</label>
                    <input required='required' type="number" className="form-control" id="cost" onChange={(event) => setCost(event.target.value)}></input>
                </div>
            </div>

            <div className="row">
                <div className="col-sm">
                    <button type='submit' className='btn btn-primary mt-3'>
						Save
					</button>
                </div>
            </div>

        </form>
    )
}

export default AddExpense