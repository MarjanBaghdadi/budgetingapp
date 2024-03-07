import styles from "./expenseitem.module.css";
import Item from "./Item";
import Form from "./Form";

export default function ExpenseItem({
  item,
  expense,
  expensePrice,
  expenses,
  setExpenses,
  expensesPrice,
  setExpensesPrice,
}) {
  // function handleDelete(item) {
  //   console.log("delete button is being handled for item: ", item);
  //   setExpenses(expenses.filter((expense) => expense !== item));
  // }
  function handleDelete(item) {
    console.log("delete button is being handled for item: ", item);
    const index = expenses.indexOf(item);
    if (index !== -1) {
      const updatedExpenses = [
        ...expenses.slice(0, index),
        ...expenses.slice(index + 1),
      ];
      const updatedExpensesPrice = [
        ...expensesPrice.slice(0, index),
        ...expensesPrice.slice(index + 1),
      ];
      setExpenses(updatedExpenses);
      setExpensesPrice(updatedExpensesPrice);
    }
  }
  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
        {item} ${expensePrice}
        <span>
          <button
            onClick={() => handleDelete(item)}
            className={styles.deletebutton}
          >
            x
          </button>
        </span>
      </div>

      <hr className={styles.line}></hr>
    </div>
  );
}
