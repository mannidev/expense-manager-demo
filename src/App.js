import React, { useState } from 'react';
import './style.css';

import AppContainer from './components/app-container/AppContainer';
import SidePanel from './components/side-panel/SidePanel';
import Header from './components/header/Header';
import MainContent from './components/main-content/MainContent';
import ExpenseForm from './components/expense-form/ExpenseForm';
import ExpensesListView from './components/expenses-list-view/ExpensesListView';

import Login from './pages/login/login.js'

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
    <AppContainer>
      <SidePanel display="hide">hello</SidePanel>
      <MainContent display="hide">there</MainContent>
      <Login />
    </AppContainer>
  );
}
