import { useEffect, useState } from "react";
import { fetchInbox } from "../api/email";

export default function Inbox() {
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    loadInbox();
  }, []);

  const loadInbox = async () => {
    try {
      const res = await fetchInbox();
      setEmails(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Inbox</h2>

      {emails.length === 0 && <p>No emails found.</p>}

      {emails.map((mail) => (
        <div
          key={mail._id}
          style={{
            borderBottom: "1px solid #ccc",
            padding: "10px 0",
            marginBottom: "10px",
          }}
        >
          <strong>From:</strong> {mail.from} <br />
          <strong>Subject:</strong> {mail.subject} <br />
          <p>{mail.body}</p>
        </div>
      ))}
    </div>
  );
}
