import { createContext, useReducer } from "react";

//this function accepts current state, action, this will update the state as well
const AppReducer = (state, action) => {
    //check for the type of action
    switch(action.type){
        case 'NEW_EXPENSE':

            //return a new state object along with new expenses taken from the payload which was given from AddExpense Component
            return {
                ...state,
                expenses: [...state.expenses, action.payload]
            };

        case 'DELETE_EXPENSE':
            //returns an object after deleting an entry deleted by the user
            return{
                ...state,
                expenses: state.expenses.filter( (expense) => expense.id != action.payload)
            }

        case 'UPDATE_BUDGET':
            return {
                ...state,
                budget: action.payload
            }


        default:
            return state;
    }
}

//dummy initial budget and expenses list
const initialState = {
	budget: 75000,
	expenses: [
		{ id: 12, name: 'shopping', cost: 40 },
		{ id: 13, name: 'holiday', cost: 400 },
		{ id: 14, name: 'car service', cost: 50 },
	],
};

//adding a call to create context, we have created a context object
export const AppContext = createContext()

//provider is a component that wraps the components which we want to pass the state to
export const AppProvider = (props) => {
    const [state, updateSate] = useReducer(AppReducer, initialState)

    return(
        //we allow our components to have access to these props in Provider
        <AppContext.Provider 
        value = {{
            budget: state.budget, expenses: state.expenses, updateSate
        }}>{props.children}</AppContext.Provider>
    )
}