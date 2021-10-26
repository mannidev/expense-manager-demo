import React, { useState } from 'react';
import './style.css';

import Header from './components/header/Header';
import MainContent from './components/main-content/MainContent';
import ExpenseForm from './components/expense-form/ExpenseForm';
import ExpensesListView from './components/expenses-list-view/ExpensesListView';

import { ExpensesModel } from './model/ExpensesModel';
import * as Labels from './labels';

const expenses = ExpensesModel.getInstance();

export default function App() {
  const [expenseItems, setExpenseItems] = useState(expenses.getItems());

  const onSaveExpenseItemHandler = (data) => {
    expenses.addExpenseItem(data);
    setExpenseItems([...expenses.getItems()]);
  };

  return (
    <div className="main-content">
      <Header title={Labels.Page.title}></Header>
      <MainContent>
        <ExpenseForm onSave={onSaveExpenseItemHandler} />

        <ExpensesListView data={expenseItems} />
      </MainContent>
    </div>
  );
}
