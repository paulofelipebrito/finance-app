import React, { useState } from 'react';

import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import {ExpensesArray} from './Mock/ExpensesArray';

const App = () => {
  const [expenses, setExpenses] = useState(ExpensesArray);

  function addExpenseHandler(expense){
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;