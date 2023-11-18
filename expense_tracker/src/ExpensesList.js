import { useContext } from 'react';
import { AppContext } from './AppContext';
import ExpenseItem from './ExpenseItem';

const ExpensesList = () => {

    const {expenses} = useContext(AppContext);

    return (
        <ul className='list-group'>
            {
                expenses.map((expense) => (
                    //calling a component that will render each item
                    <ExpenseItem id={expense.id} name={expense.name} cost={expense.cost} />
                ))
            }
        </ul>
    )
}

export default ExpensesList