import './style.css';

import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import AppContainer from './components/app-container/AppContainer';
import Dashboard from './pages/dashboard/Dashboard';
import Expense from './pages/expense/Expense';
import Login from './pages/login/Login';


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
        <Route path="expense" element={<Expense />} />
      </Routes>
    </AppContainer>
  );
}
