import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Form from "./Form";
import Item from "./Item";
import Footer from "./Footer";

export default function Expense() {
  const [expenses, setExpenses] = useState([]);
  const [expensesPrice, setExpensesPrice] = useState([]);

  console.log("Expenses Price:", expensesPrice); // Add this line for debugging

  return (
    <div>
      <Form
        expenses={expenses}
        setExpenses={setExpenses}
        expensesPrice={expensesPrice}
        setExpensesPrice={setExpensesPrice}
      />
      {expenses.map((expense, index) => (
        <ExpenseItem
          key={index} // Use index as the key
          item={expense}
          expensePrice={expensesPrice[index]} // Pass the corresponding price
          expenses={expenses}
          setExpenses={setExpenses}
          expensesPrice={expensesPrice}
          setExpensesPrice={setExpensesPrice}
        />
      ))}
      <Footer expensesPrice={expensesPrice} />
    </div>
  );
}
