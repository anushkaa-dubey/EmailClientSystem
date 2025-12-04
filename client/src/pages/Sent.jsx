import { useEffect, useState } from "react";
import { getSent } from "../api/email";

export default function Sent() {
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    const userEmail = localStorage.getItem("email");
    getSent(userEmail).then((data) => setEmails(data));
  }, []);

  return (
    <div style={{ marginLeft: "220px", padding: "20px" }}>
      <h1>Sent Emails</h1>
      {emails.length === 0 ? (
        <p>No sent emails.</p>
      ) : (
        emails.map((e) => (
          <div key={e._id} style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>
            <b>To:</b> {e.to} <br />
            <b>Subject:</b> {e.subject} <br />
            <p>{e.body}</p>
          </div>
        ))
      )}
    </div>
  );
}
