import { useState } from "react";

export const ExpenseForm = () => {
  const [expenseInfo, setExpenseInfo] = useState({
    title: "",
    amount: null,
    date: null,
  });
  const changeHandler = (e) => {
    setExpenseInfo({ ...expenseInfo, [e.targte.name]: e.target.value });
  };
  return (
    <form>
      <lable>Title:</lable>
      <input
        type="text"
        name="title"
        placeholder="enter title"
        onChange={changeHandler}
      />
      <label>Amount</label>
      <input
        type="number"
        name="amount"
        placeholder="enter expense"
        onChange={changeHandler}
      />
      <label>Date</label>
      <input
        type="date"
        name="date"
        placeholder="enter date"
        min="2019-01-01"
        max="2022-12-31"
        onChange={changeHandler}
      />
      <button type="submit">Add Expense</button>
    </form>
  );
};
