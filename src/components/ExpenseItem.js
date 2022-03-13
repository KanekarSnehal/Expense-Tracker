const ExpenseItem = ({ expenses }) => {
  return (
    <div>
      <h2>Expense Items </h2>
      <ul>
        {expenses.map((expense) => (
          <li key={expense.id}>
            <h2>Expense Item</h2>
            <p>Title: {expense.title}</p>
            <p>Amount: {expense.amount}</p>
            <p>Date: {expense.date.toISOString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ExpenseItem;
