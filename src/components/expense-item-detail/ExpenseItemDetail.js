import React from 'react';
import './expense-item-detail.css';

function ExpenseItemDetail(props) {
  return (
    <div className="expense-item-detail">
      <h1>{props.name}</h1>
      <p>{props.description}</p>
    </div>
  );
}

export default ExpenseItemDetail;
