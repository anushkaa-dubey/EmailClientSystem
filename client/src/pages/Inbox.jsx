import { useEffect, useState } from "react";
import { fetchInbox } from "../api/email";

export default function Inbox() {
  const [emails, setEmails] = useState([]);

  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    fetchInbox(user.email).then(setEmails);
  }, []);

  return (
    <div className="page">
      <h2>Inbox</h2>

      {emails.length === 0 && <p>No emails found.</p>}

      {emails.map((mail) => (
        <div className="email-card" key={mail._id}>
          <h4>{mail.subject}</h4>
          <p><b>From:</b> {mail.sender}</p>
          <p>{mail.body}</p>
        </div>
      ))}
    </div>
  );
}
