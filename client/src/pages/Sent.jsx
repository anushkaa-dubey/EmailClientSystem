import { useEffect, useState } from "react";
import { fetchSent } from "../api/email";

export default function Sent() {
  const [emails, setEmails] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    fetchSent(user.email).then(setEmails);
  }, []);

  return (
    <div className="page">
      <h2>Sent Emails</h2>

      {emails.length === 0 && <p>No sent emails.</p>}

      {emails.map((mail) => (
        <div className="email-card" key={mail._id}>
          <h4>{mail.subject}</h4>
          <p><b>To:</b> {mail.recipient}</p>
          <p>{mail.body}</p>
        </div>
      ))}
    </div>
  );
}
