import { useState } from "react";
import axios from "axios";

export default function Signup() {
<<<<<<< Updated upstream
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post("http://localhost:5000/api/auth/signup", form);
    alert("Signup Successful!");
    console.log(res.data);
  };

  return (
    <div className="container">
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="Name"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input placeholder="Email"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <input placeholder="Password" type="password"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        <button>Signup</button>
=======
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await signup(email, password);
    alert(res);
  };

  return (
    <div>
      <h1>Signup</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input 
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Create Account</button>
>>>>>>> Stashed changes
      </form>
    </div>
  );
}
