import { useState } from "react";
import { sendEmail } from "../api/email";

export default function ComposeModal({ close }) {
  const [to, setTo] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");

  const user = JSON.parse(localStorage.getItem("user"));

  const submit = async () => {
    await sendEmail({
      sender: user.email,
      recipient: to,
      subject,
      body
    });
    close();
  };

  return (
    <div className="compose-popup">
      <h2>New Email</h2>

      <input placeholder="To" value={to} onChange={e => setTo(e.target.value)} />
      <input placeholder="Subject" value={subject} onChange={e => setSubject(e.target.value)} />
      <textarea placeholder="Body" value={body} onChange={e => setBody(e.target.value)} />

      <button onClick={submit}>Send</button>
      <button onClick={close}>Close</button>
    </div>
  );
}
