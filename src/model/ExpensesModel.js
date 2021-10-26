import { ExpenseItemModel } from './ExpenseItemModel';

export class ExpensesModel {
  constructor() {
    console.log('hello there');
    this.count = 0;
    const item = ExpenseItemModel.getInstance();
    item.name = 'Car detailing';
    item.description = 'full detailing';
    item.amount = 23.30
    item.date = Date();
    this.expenses = [item];
  }

  getItems() {
    return this.expenses;
  }

  addExpenseItem(item) {
    if (!(item instanceof ExpenseItemModel)) return;
    this.count += 1;
    item.id = this.count;
    this.expenses.push(item);
  }

  removeExpense(item) {
    if (!(item instanceof ExpenseItemModel)) return;
    const index = this.expenses.findIndex((expItem) => expItem.id === item.id);
    if (!index) return false;
    this.expenses.splice(index, 1);
    this.count--;
    return true;
  }

  clear() {
    this.expenses = [];
    this.count = 0;
  }

  static getInstance() {
    return new ExpensesModel();
  }
}
