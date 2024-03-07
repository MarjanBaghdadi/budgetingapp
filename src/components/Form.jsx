import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Item from "./Item";
import Expense from "./Expense";
import styles from "./form.module.css";

export default function Form({
  expenses,
  setExpenses,
  expensesPrice,
  setExpensesPrice,
}) {
  const [expense, setExpense] = useState("");
  const [expensePrice, setExpensePrice] = useState(0);

  function handleAddButton() {
    console.log("the Add button is being handled");
  }
  function handleSubmitForm(e) {
    e.preventDefault();
    setExpenses([...expenses, expense]);
    setExpense("");
    setExpensesPrice([...expensesPrice, expensePrice]);
    setExpensePrice(0);
    console.log(expense);
    console.log(expensePrice);
  }

  return (
    <form className={styles.inputform} onSubmit={handleSubmitForm}>
      <div className={styles.inputdiv}>
        <input
          className={styles.inputtext}
          onChange={(e) => setExpense(e.target.value)}
          type="text"
          value={expense}
          placeholder="add daily expense.."
        />
        <input
          className={styles.inputtext}
          onChange={(e) => setExpensePrice(e.target.value)}
          type="number"
          step="0.1"
          value={expensePrice}
          placeholder="add price.."
        />
        <button
          className={styles.inputbutton}
          onClick={handleAddButton}
          type="submit"
        >
          Add
        </button>
      </div>
    </form>
  );
}
