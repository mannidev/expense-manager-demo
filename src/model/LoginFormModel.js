export default class LoginFormModel {
  constructor() {
    this.email = '';
    this.password = '';
    this.name = '';
  }

  get userName() {
    return this.name;
  }

  set userName(value) {
    this.name = value;
  }

  get userEmail() {
    return this.email;
  }

  set userEmail(value) {
    this.email = value;
  }

  get userPassword() {
    return this.userPassword;
  }

  set userPassword(value) {
    this.password = value;
  }
}
