import { useState } from "react";
import axios from "axios";

export default function Signup() {
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
      </form>
    </div>
  );
}
