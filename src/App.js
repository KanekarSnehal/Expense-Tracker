import "./App.css";
import { ExpenseForm } from "./components/ExpenseForm/ExpenseForm";
import { Expenses } from "./components/Expenses/Expenses";

const App = () => {
  const expenses = [
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
      date: new Date(2022, 3, 23),
    },
    {
      id: "e3",
      title: "Chocolate",
      amount: 32.7,
      date: new Date(2022, 3, 23),
    },
    {
      id: "e4",
      title: "Coffee",
      amount: 32.4,
      date: new Date(2022, 3, 23),
    },
  ];

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expensedata = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    console.log(expensedata);
    expenses.concat(expensedata);
    console.log(expenses);

    addExpenseHandler(expensedata);
  };

  const addExpenseHandler = (expensedata) => {
    expenses.concat(expensedata);
    console.log(expenses);
  };

  return (
    <div className="App">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
      <Expenses expenses={expenses}></Expenses>
    </div>
  );
};
export default App;
