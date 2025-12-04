import { useState } from "react";
import axios from "axios";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });

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
  );
}
