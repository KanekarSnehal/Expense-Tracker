import Card from "../Card/Card";
import ExpenseItem from "../ExpenseItem/ExpenseItem";

export const Expenses = ({ expenses }) => {
  return (
    <div>
      <Card>
        <ExpenseItem expenses={expenses} />
      </Card>
    </div>
  );
};
