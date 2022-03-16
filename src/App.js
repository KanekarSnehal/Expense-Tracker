import "./App.css";
import { Expenses } from "./components/Expenses/Expenses";

export default function App() {
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
  return (
    <div className="App">
      <Expenses expenses={expenses}></Expenses>
    </div>
  );
}
