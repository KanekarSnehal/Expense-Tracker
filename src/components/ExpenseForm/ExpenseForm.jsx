import { useState } from "react";

export const ExpenseForm = () => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(null);
  const [date, setDate] = useState(null);

  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
    console.log(e.target.value);
  };
  const amountChangeHandler = (e) => {
    setAmount(e.target.value);
    console.log(e.target.value);
  };
  const dateChangeHandler = (e) => {
    setDate(e.target.value);
    console.log(e.target.value);
  };
  return (
    <form>
      <lable>Title:</lable>
      <input
        type="text"
        placeholder="enter title"
        onChange={titleChangeHandler}
      />
      <label>Amount</label>
      <input
        type="number"
        placeholder="enter expense"
        onChange={amountChangeHandler}
      />
      <label>Date</label>
      <input
        type="date"
        placeholder="enter date"
        min="2019-01-01"
        max="2022-12-31"
        onChange={dateChangeHandler}
      />
      <button type="submit">Add Expense</button>
    </form>
  );
};
