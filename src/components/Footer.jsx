import styles from "./footer.module.css";
import React from "react";
import Expense from "./Expense";

export default function Footer({ expensesPrice }) {
  console.log("Expenses Price:", expensesPrice); // Add this line for debugging

  // Calculate total balance
  const totalBalance = expensesPrice.reduce(
    (total, price) => total + parseFloat(price),
    0
  );
  return (
    <div className={styles.footer}>
      <h3>Balance so far: ${totalBalance.toFixed(2)}</h3>
    </div>
  );
}
