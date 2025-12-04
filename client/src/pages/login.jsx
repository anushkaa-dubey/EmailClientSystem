import { useState } from "react";
import { login } from "../api/email";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate();

  const submit = async () => {
    const res = await login({ email, password });

    if (res.success) {
      localStorage.setItem("user", JSON.stringify(res.user));
      nav("/");
    } else {
      alert(res.message);
    }
  };

  return (
    <div className="auth-page">
      <h2>Login</h2>

      <input placeholder="email" onChange={e => setEmail(e.target.value)} />
      <input type="password" placeholder="password" onChange={e => setPassword(e.target.value)} />

      <button onClick={submit}>Login</button>

      <p>Don't have an account? <Link to="/signup">Signup</Link></p>
    </div>
  );
}
