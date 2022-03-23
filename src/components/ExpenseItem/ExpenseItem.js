import { ExpenseDate } from "../ExpenseDate/ExpenseDate";
import { useState } from "react";
const ExpenseItem = ({ expenses }) => {
  const [expense1, setExpense1] = useState([...expenses]);
  const deleteHandler = (expense) => {
    // by using className
    const ele = document.getElementsByClassName(expense.id);
    ele[0].remove();
    // by using id
    // const ele = document.getElementById(expense.id);
    // ele.remove()
  };
  return (
    <div>
      <h2>Expense Items </h2>
      <ul>
        {expense1.map((expense) => (
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
export default ExpenseItem;
