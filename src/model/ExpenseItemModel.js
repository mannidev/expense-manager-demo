export class ExpenseItemModel {
  constructor() {
    this.id = 0;
    this.name = '';
    this.description = '';
    this.amount = '';
    this.date = '';
  }

  static getInstance() {
    return new ExpenseItemModel();
  }
}
