import Expense from "./Expense";
import ExpenseItem from "./ExpenseItem";
import styles from "./item.module.css";
import Form from "./Form";

export default function Item({
  expense,
  expensePrice,
  expenses,
  setExpenses,
  expensesPrice,
  setExpensesPrice,
}) {
  return (
    <div className={styles.list}>
      {expenses.map((item) => (
        <ExpenseItem
          key={expense}
          item={item}
          expenses={expenses}
          setExpenses={setExpenses}
          expensesPrice={expensesPrice}
          setExpensesPrice={setExpensesPrice}
        />
      ))}
    </div>
  );
}
