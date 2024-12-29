class User {
  constructor(name, email, password) {
    this._name = name;
    this._email = email;
    this._password = password;
  }

  get name() {
    return this._name;
  }

  get email() {
    return this._email;
  }

  get password() {
    return this._password;
  }
}

export default User;
