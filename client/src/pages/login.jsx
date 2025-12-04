import { useState } from "react";
<<<<<<< Updated upstream
import axios from "axios";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post("http://localhost:5000/api/auth/login", form);
    alert("Login Successful!");
    console.log(res.data);
=======
import { login } from "../api/email";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
>>>>>>> Stashed changes
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const res = await login(formData);

    localStorage.setItem("token", res.data.token);
    localStorage.setItem("email", formData.email);

    alert("Login Successful");
    window.location.href = "/dashboard";
  } catch (err) {
    alert("Login failed");
    console.log(err);
  }
};

  return (
<<<<<<< Updated upstream
    <div className="container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="Email"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <input placeholder="Password" type="password"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        <button>Login</button>
      </form>
    </div>
=======
    <form onSubmit={handleSubmit}>
      <h1>Login</h1>

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />

      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
      />

      <button type="submit">Login</button>
    </form>
>>>>>>> Stashed changes
  );
}
