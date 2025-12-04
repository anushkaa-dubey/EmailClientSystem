import { useState } from "react";
import { sendEmail } from "../api/email";

export default function Compose() {
  const [to, setTo] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");

  const submit = async () => {
    const from = localStorage.getItem("email");
    const res = await sendEmail({ from, to, subject, body });

    alert("Email sent!");
  };

  return (
    <div style={{ marginLeft: "220px", padding: "20px" }}>
      <h1>Compose Email</h1>

      <input placeholder="To" value={to} onChange={(e) => setTo(e.target.value)}
        style={{ display: "block", margin: "10px 0", width: "300px" }} />

      <input placeholder="Subject" value={subject} onChange={(e) => setSubject(e.target.value)}
        style={{ display: "block", margin: "10px 0", width: "300px" }} />

      <textarea placeholder="Body" value={body} onChange={(e) => setBody(e.target.value)}
        style={{ display: "block", margin: "10px 0", width: "300px", height: "120px" }} />

      <button onClick={submit}>Send</button>
    </div>
  );
}
