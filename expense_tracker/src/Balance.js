import { useContext, useState } from "react"
import { AppContext } from "./AppContext";

const Balance = () => {

    const {budget, expenses} = useContext(AppContext);

    const totalExpenses = expenses.reduce( (total, i) => {
            return (total = total + i.cost)
    }, 0);

    //this is for styling purpose to make the box green and red accordingly
    const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-success';

    return(
        <div className={`alert ${alertType}`}>
        <span>BALANCE : {budget - totalExpenses}</span>
        </div>
    )
}

export default Balance;