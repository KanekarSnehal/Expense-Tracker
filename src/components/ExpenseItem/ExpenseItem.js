import { ExpenseDate } from "../ExpenseDate/ExpenseDate";
import { useState } from "react";
export const ExpenseItem = ({ expenses, setExpenses }) => {
  const [year, setYear] = useState("2022");

  const deleteHandler = (expense) => {
    setExpenses((prevExpense) =>
      prevExpense.filter((expenseItem) => expenseItem.id !== expense.id)
    );
  };
  const handleYearChange = (e) => setYear(e.target.value);

  const newData = expenses.filter((expenseItem) => {
    console.log(expenseItem.date.getFullYear(), Number(year));
    return expenseItem.date.getFullYear() === Number(year);
  });
  console.log(newData);
  return (
    <div>
      <h2>Expense Items </h2>
      <label htmlFor="year">Choose a year:</label>
      <select name="year" onClick={handleYearChange}>
        <option value="2022">2022</option>
        <option value="2021">2021</option>
        <option value="2020">2020</option>
        <option value="2019">2019</option>
      </select>
      <ul>
        {newData.map((expense) => (
          <li key={expense.id} className={expense.id}>
            <h2>Expense Item</h2>
            <p>Title: {expense.title}</p>
            <p>Amount: {expense.amount}</p>
            <ExpenseDate date={expense.date} />
            <button onClick={() => deleteHandler(expense)}>
              Delete Expense
            </button>
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
};
