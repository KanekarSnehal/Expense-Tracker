import { useState } from "react";

export const ExpenseForm = (props) => {
  const [expenseInfo, setExpenseInfo] = useState({
    title: "",
    amount: "",
    date: "",
  });

  const [showButton, setShowButton] = useState(false);
  const changeHandler = (e) => {
    setExpenseInfo({ ...expenseInfo, [e.target.name]: e.target.value });
  };

  const submitHanlder = () => {
    // e.preventDefault();
    const expenseData = {
      title: expenseInfo.title,
      amount: expenseInfo.amount,
      date: new Date(expenseInfo.date),
    };

    props.onSaveExpenseData(expenseData);

    setExpenseInfo({ ...expenseInfo, title: "", amount: "", date: "" });
  };
  return (
    <>
      {showButton ? (
        <form>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={expenseInfo.title}
            placeholder="enter title"
            onChange={changeHandler}
          />
          <label>Amount</label>
          <input
            type="number"
            name="amount"
            value={expenseInfo.amount}
            placeholder="enter expense"
            onChange={changeHandler}
          />
          <label>Date</label>
          <input
            type="date"
            name="date"
            value={expenseInfo.date}
            placeholder="enter date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={changeHandler}
          />
          <button
            onClick={() => {
              setShowButton(false);
              submitHanlder();
            }}
          >
            Add Expense
          </button>
          <button onClick={() => setShowButton(false)}>Cancel</button>
        </form>
      ) : (
        <button onClick={() => setShowButton(true)}>Add Expense</button>
      )}
    </>
  );
};
