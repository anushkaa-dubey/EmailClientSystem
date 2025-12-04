// client/src/pages/Signup.jsx
import { useState } from "react";
import { signup } from "../api/auth";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await signup({ email, password });
      setMsg("Signup Successful");
      console.log(res.data);
    } catch (err) {
      setMsg(err.response?.data?.error || "Signup failed");
      console.log(err);
    }
  };

  return (
    <div>
      <h2>Signup</h2>
      
      <form onSubmit={handleSubmit}>

        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Signup</button>
      </form>

      {msg && <p>{msg}</p>}
    </div>
  );
}
