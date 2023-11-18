
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Budget from './Budget';
import Balance from './Balance';
import TotalExpense from './TotalExpense';
import ExpensesList from './ExpensesList';
import AddExpense from './AddExpense';
import { AppProvider } from './AppContext';

function App() {
  return (
    //we will wrap all the components to which we wish to pass the state to with the help of AppProvider
    //we use bootstrap styling 
    <AppProvider>
    <div className='container'>

    <h1>Expenses Tracker App</h1>

    <div className='row'>

      <div className='column'>
        <Budget/>
      </div>
      <div className='column'>
        <Balance/>
      </div>
      <div className='column'>
        <TotalExpense/>
      </div>

    </div>

    <h2 className='mt-3'>Expenses</h2>
    <div className='row mt-3'>
      <div className='col-sm'>
        <ExpensesList />
      </div>
    </div>

    <h2 className='mt-3'>Add Expense</h2>
    <div className='row mt-3'>
      <div className='col-sm'>
        <AddExpense />
      </div>
    </div>


    </div>
    </AppProvider>
  );
}

export default App;
