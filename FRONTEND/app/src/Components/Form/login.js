import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import "../../styles/form/form.css";

// Limpa o localStorage ao carregar o componente
function clearLocalStorage() {
  localStorage.clear();
}
clearLocalStorage();

function LoginForm({ toggleForm }) {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = {
      email: email,
      password: password,
    };

    try {
      const response = await fetch("http://localhost:3000/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to log in");
      }

      if (data.user) {
        console.log(data.user);
        window.localStorage.setItem("userId", data.user.id_user);
        alert(localStorage.getItem("userId"));
        alert(data.message);

        if (data.user.email_user === "admin@gmail.com") {
          navigate("/admin"); // Caminho absoluto para admin
          return;
        }

        navigate("/main"); // Caminho absoluto para main
        return;
      }

      alert(data.message);
    } catch (error) {
      console.error("Error:", error);
      alert(error.message || "Something went wrong!");
    } finally {
      cleanForm();
    }
  };

  const cleanForm = () => {
    setEmail("");
    setPassword("");
  };

  return (
    <div className="container">
      <div className="form-container">
        <form className="form" onSubmit={handleSubmit}>
          <h2>Login</h2>
          <div className="input-group">
            <label htmlFor="login_email">Email</label>
            <input
              id="login_email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="login_password">Password</label>
            <input
              id="login_password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>
          <button type="submit">Login</button>

          <p>
            Don't have an account?
            <button type="button" onClick={toggleForm}>
              Register here
            </button>
          </p>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
