import React, { useState } from "react";
import '../../styles/form/form.css'


function RegisterForm({ toggleForm }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const sendForm = async (e) => {
    e.preventDefault();

    const person = {
      name: name,
      email: email,
      password: password,
    };

    try {
      const response = await fetch("http://localhost:3000/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(person),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to log in");
      }


      if (data.id) {
        alert(data.message);
        return;
      }

      return alert(data.message);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="container">
      <div className="form-container">
      <form className="form" onSubmit={sendForm}>
      <h2>Register</h2>
      <div className="input-group">
        <label htmlFor="register_username">Username</label>
        <input
          type="text"
          value={name}
          id="register_username"
          onChange={(e) => setName(e.target.value)}
          placeholder="Choose a username"
          required
        />
      </div>
      <div className="input-group">
        <label htmlFor="register_email">Email</label>
        <input
          type="email"
          value={email}
          id="register_email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
        />
      </div>
      <div className="input-group">
        <label htmlFor="register_password">Password</label>
        <input
          type="password"
          value={password}
          id="register_password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Create a password"
          required
        />
      </div>
      <button type="submit">Register</button>
      <p>
        Already have an account?
        <button onClick={toggleForm}>Login here</button>
      </p>
    </form>
      </div>
    </div>
  );
}

export default RegisterForm;
