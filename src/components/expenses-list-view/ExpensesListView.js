import React from 'react';
import './expenses-list-view';

import ExpenseDate from '.\./expense-date/ExpenseDate';

function ExpensesListView(props) {
  return (
    <ul className="expense-list">
      {props.data.map((item) => ( 
        <li key={item.id} className="expense-list-item">
          <ExpenseDate date={item.date} />
          <div>{item.name}</div>
          <div>{item.description}</div>
          <div>{item.amount}</div>
        </li>
      ))}
    </ul>
  );
}

export default ExpensesListView;
