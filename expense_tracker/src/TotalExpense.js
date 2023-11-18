import { useContext, useState } from "react"
import { AppContext } from "./AppContext"

const TotalExpense = () => {

    const {expenses} = useContext(AppContext);
    let totalexpense = 0;
    console.log(expenses);

    for(let i=0;i<expenses.length;i++)
    {
        totalexpense = totalexpense + expenses[i]['cost']
    }

    return(
        <div className="alert alert-secondary">
            <span>Total Expense : {totalexpense}</span>
        </div>
    )
}

export default TotalExpense