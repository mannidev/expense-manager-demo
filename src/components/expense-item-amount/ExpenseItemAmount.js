import React from 'react';
import './expense-item-amount.css';

function ExpenseItemAmount (props) {
  return <div className="expense-item-amount">{props.amount}</div>;
}

export default ExpenseItemAmount;