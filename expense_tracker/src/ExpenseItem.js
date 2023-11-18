import { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from './AppContext';
//this component will render each item

const ExpenseItem = (props) => {

    const {updateSate} =useContext(AppContext)

    const handleDelete = () => {
        updateSate( {
            type:'DELETE_EXPENSE',
            payload: props.id
        })
    }

    return(
        <li className='list-group-item d-flex justify-content-between align-items-center'>
            {props.name}
         
            <div>
            {props.cost}
			<TiDelete size='1.5em' onClick={handleDelete}></TiDelete>
            </div>
        </li>
    )
}

export default ExpenseItem