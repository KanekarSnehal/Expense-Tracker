import "./App.css";
import { ExpenseForm } from "./components/ExpenseForm/ExpenseForm";
import { useState } from "react";
import { ExpenseItem } from "./components/ExpenseItem/ExpenseItem";

const DUMMY_DATA = [
  {
    id: "e1",
    title: "Car Insurance",
    amount: 324.4,
    date: new Date(2022, 3, 23),
  },
  {
    id: "e2",
    title: "Icecream",
    amount: 4.47,
    date: new Date(2021, 3, 23),
  },
  {
    id: "e3",
    title: "Chocolate",
    amount: 32.7,
    date: new Date(2019, 3, 23),
  },
  {
    id: "e4",
    title: "Coffee",
    amount: 32.4,
    date: new Date(2020, 3, 23),
  },
  {
    id: "e5",
    title: "Toothpaste",
    amount: 32.4,
    date: new Date(2021, 3, 23),
  },
  {
    id: "e6",
    title: "Charger",
    amount: 32.4,
    date: new Date(2022, 3, 23),
  },
  {
    id: "e7",
    title: "Mobile",
    amount: 32.4,
    date: new Date(2020, 3, 23),
  },
  {
    id: "e8",
    title: "Laptop",
    amount: 32.4,
    date: new Date(2019, 3, 23),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_DATA);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expensedata = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    expenses.concat(expensedata);
    addExpenseHandler(expensedata);
  };

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => [expense, ...prevExpenses]);
  };
  return (
    <div className="App">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
      <ExpenseItem expenses={expenses} setExpenses={setExpenses}></ExpenseItem>
    </div>
  );
};
export default App;
