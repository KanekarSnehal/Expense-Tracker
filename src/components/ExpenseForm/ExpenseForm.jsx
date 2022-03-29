export const ExpenseForm = () => {
  const titleChangeHandler = (e) => {
    console.log(e.target.value);
  };
  const amountChangeHandler = (e) => console.log(e.target.value);
  const dateChangeHandler = (e) => console.log(e.target.value);
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
