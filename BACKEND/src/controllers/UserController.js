import User from "../models/User.js";
import UserHandling from "../service/UserHandling.js";

const userHandling = new UserHandling();

const validationLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const users = await userHandling.getAllUsers();

    for (const user of users) {
      if (email === "admin@gmail.com" && password === "admin") {
        return res.json({
          message: "Login successful",
          user: user,
        });
      }

      if (user.email_user === email && user.password_user === password) {
        const updateResult = await userHandling.updateLoginStatus(
          user.id_user,
          true
        );

        if (updateResult.affectedRows > 0) {
          return res.json({
            message: "Login successful",
            user: user,
          });
        } else {
          return res.json({ message: "Login failed", error: "Error" });
        }
      }
    }

    return res.json({ message: "Invalid email or password" });
  } catch (error) {
    console.error(error);
    return res.json({ message: "Internal server error" });
  }
};

const logout = async (req, res) => {
  try {
    const { userId } = req.body;

    const userIdNumber = parseInt(userId);

    const user = await userHandling.getUserById(userIdNumber);

    if (!user) {
      return res.json({ message: "User not found" });
    }

    const updateResult = await userHandling.updateLoginStatus(
      user.id_user,
      false
    );

    if (updateResult.affectedRows > 0) {
      return res.json({
        message: "Logout successful",
        redirect: "src/pages/form.html",
      });
    } else {
      return res.json({ message: "Logout failed: Update status failed" });
    }
  } catch (error) {
    console.log(error);
  }
};

const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const users = await userHandling.getAllUsers();

    for (const user of users) {
      if (user.email_user === email) {
        return res.json({ message: "Email already exists" });
      }
    }

    const newUser = new User(name, email, password);

    const userId = await userHandling.createUser(newUser);

    res.json({ message: "User created successfully", id: userId.insertId });
  } catch (error) {
    res.json({ message: "Error in create a user", error: error });
  }
};

export default { validationLogin, createUser, logout };
