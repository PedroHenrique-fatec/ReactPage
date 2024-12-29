import connection from "../config/database.js";

// Define a class for the user model

class UserRepository {
  async getAllUsers() {
    const query = `SELECT * FROM users`;

    return new Promise((resolve, reject) => {
      connection.query(query, (err, results) => {
        if (err) {
          console.log(err);
          reject(err);
          return;
        }

        resolve(results);
      });
    });
  }

  async getUserById(id) {
    const query = `SELECT id_user FROM users where id_user = ?`;

    return new Promise((resolve, reject) => {
      connection.query(query, [id], (err, results) => {
        if (err) {
          console.log(err);
          reject(err);
          return;
        }

        resolve(results[0]);
      });
    });
  }

  async createUser(user) {
    const { name, email, password } = user;

    const query = `INSERT INTO users (name_user, email_user, password_user) VALUES (?, ?, ?)`;

    return new Promise((resolve, reject) => {
      connection.query(query, [name, email, password], (err, results) => {
        if (err) {
          console.log(err);
          reject(err);
          return;
        }

        resolve(results);
      });
    });
  }

  async updateLoginStatus(id, status) {
    const query = "UPDATE users SET is_logged_in = ? WHERE id_user = ?";

    return new Promise((resolve, reject) => {
      connection.query(query, [status, id], (err, results) => {
        if (err) {
          console.log(err);
          reject(err);
          return;
        }

        resolve(results);
      });
    });
  }
}

export default UserRepository;
