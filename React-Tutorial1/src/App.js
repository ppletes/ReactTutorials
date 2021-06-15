import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const inicial_expenses = [
  {
    id: 1,
    title: "Toilet Paper",
    amount: 94.77,
    date: new Date(2020, 7, 14),
  },
  {
    id: 2,
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
];

// return React.createElement(
//   "div",
//   {},
//   React.createElement("h2", {}, "Let's get started"),
//   React.createElement(Expenses, { items: expenses })
// );

const App = () => {
  const [expenses, setExpenses] = useState(inicial_expenses);

  const addExpenseHandler = (expense) => {
    //setExpenses([expense, ...expenses]); // ... for previous data -> not good example
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
