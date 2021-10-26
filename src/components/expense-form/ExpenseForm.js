import React, { useState } from 'react';
import * as Labels from '../../labels';
import { ExpenseItemModel } from '../../model/ExpenseItemModel';
import './expense-form.css';

function ExpenseForm(props) {
  let expenseItem = ExpenseItemModel.getInstance();
  const [name, setName] = useState(expenseItem.name);
  const [description, setDescription] = useState(expenseItem.description);
  const [amount, setAmount] = useState(expenseItem.amount);
  const [date, setDate] = useState(expenseItem.date);

  const onDescriptionChangeHandler = (event) =>
    setDescription(event.target.value);
  const onNameChangeHandler = (event) => setName(event.target.value);
  const onAmountChangeHandler = (event) => setAmount(event.target.value);
  const onDateChangeHandler = (event) => setDate(event.target.value);

  const onSubmitEventHandler = (event) => {
    event.preventDefault();

    expenseItem.description = description;
    expenseItem.amount = amount;
    expenseItem.name = name;
    expenseItem.date = date;

    props.onSave(expenseItem);
    expenseItem = ExpenseItemModel.getInstance();
    setName(expenseItem.name);
    setAmount(expenseItem.amount);
    setDate(expenseItem.date);
    setDescription(expenseItem.description);
  };

  return (
    <div className="expense-form">
      <form onSubmit={onSubmitEventHandler}>
        <div className="form-group">
          <label>{Labels.Form.NAME}</label>
          <input type="text" value={name} onChange={onNameChangeHandler} />
        </div>

        <div className="form-group">
          <label>{Labels.Form.DESCRIPTION}</label>
          <input
            type="text"
            value={description}
            onChange={onDescriptionChangeHandler}
          />
        </div>

        <div className="form-group">
          <label>{Labels.Form.AMOUNT}</label>
          <input type="text" value={amount} onChange={onAmountChangeHandler} />
        </div>

        <div className="form-group">
          <label>{Labels.Form.DATE}</label>
          <input type="date" value={date} onChange={onDateChangeHandler} />
        </div>

        <div className="form-buttons">
          <button type="reset">{Labels.Form.Clear}</button>
          <button type="submit">{Labels.Form.SUBMIT}</button>
        </div>
      </form>
    </div>
  );
}

export default ExpenseForm;
