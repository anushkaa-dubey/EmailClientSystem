import { useEffect, useState } from "react";
import { getInbox } from "../api/email";

export default function Inbox() {
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    const userEmail = localStorage.getItem("email");
    getInbox(userEmail).then((data) => setEmails(data));
  }, []);

  return (
    <div style={{ marginLeft: "220px", padding: "20px" }}>
      <h1>Inbox</h1>
      {emails.length === 0 ? (
        <p>No emails found.</p>
      ) : (
        emails.map((e) => (
          <div key={e._id} style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>
            <b>From:</b> {e.from} <br />
            <b>Subject:</b> {e.subject} <br />
            <p>{e.body}</p>
          </div>
        ))
      )}
    </div>
  );
}
