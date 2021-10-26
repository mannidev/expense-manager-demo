import React from 'react';
import './expense-date';

function ExpenseDate(props) {
  const date = new Date(props.date);
  const day = date.getDate();
  const month = date.toLocaleString('default', { month: 'long' });
  const year = date.getFullYear();
  return (
    <div className="expense-date">
      <h1>{month}</h1>
      <h2>{day}</h2>
      <h3>{year}</h3>
    </div>
  );
}

export default ExpenseDate;
