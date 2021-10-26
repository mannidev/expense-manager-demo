import React from 'react';
import './expenses-list-view';

import ExpenseDate from '../expense-date/ExpenseDate';
import ExpenseItemDetail from '../expense-item-detail/ExpenseItemDetail';
import ExpenseItemAmount from '../expense-item-amount/ExpenseItemAmount';

function ExpensesListView(props) {
  const placeHolder = () => (
    <div>
      <h1>No data to display</h1>
    </div>
  );

  if (!props.data.length) return placeHolder(); 

  return (
    <ul className="expense-list">
      {props.data.map((item) => (
        <li key={item.id} className="expense-list-item">
          <ExpenseDate date={item.date} />
          <ExpenseItemDetail name={item.name} description={item.description} />
          <ExpenseItemAmount amount={item.amount} />
        </li>
      ))}
    </ul>
  );
}

export default ExpensesListView;
