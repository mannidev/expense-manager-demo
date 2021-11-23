import './style.css';

import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import AppContainer from './components/app-container/AppContainer';
import ExpenseForm from './components/expense-form/ExpenseForm';
import ExpensesListView from './components/expenses-list-view/ExpensesListView';

import Login from './pages/login/Login';
import Dashboard from './pages/dashboard/Dashboard';

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
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="dashboard" element={<Dashboard />} />
      </Routes>
    </AppContainer>
  );
}
