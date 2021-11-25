import './style.css';

import React from 'react';
import { Routes, Route } from 'react-router-dom';

import AppContainer from './components/app-container/AppContainer';
import Dashboard from './pages/dashboard/Dashboard';
import Expense from './pages/expense/Expense';
import Login from './pages/login/Login';

export default function App() {
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
