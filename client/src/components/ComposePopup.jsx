import { useState } from "react";
import { sendEmail } from "../api/email";

export default function ComposePopup({ onClose }) {
  const [to, setTo] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");

  const handleSend = async () => {
    try {
      await sendEmail({ to, subject, body });
      alert("Email sent successfully!");
      onClose();
    } catch (error) {
      console.error(error);
      alert("Failed to send email.");
    }
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "rgba(0,0,0,0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "500px",
          background: "white",
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        <h2>Compose Email</h2>

        {/* To Field */}
        <input
          type="text"
          placeholder="To"
          value={to}
          onChange={(e) => setTo(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "10px",
          }}
        />

        {/* Subject */}
        <input
          type="text"
          placeholder="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "10px",
          }}
        />

        {/* Body */}
        <textarea
          placeholder="Write your email..."
          value={body}
          onChange={(e) => setBody(e.target.value)}
          style={{
            width: "100%",
            height: "200px",
            padding: "10px",
            marginBottom: "10px",
          }}
        ></textarea>

        <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px" }}>
          <button
            onClick={onClose}
            style={{
              padding: "10px 20px",
              background: "#ccc",
              border: "none",
              cursor: "pointer",
            }}
          >
            Cancel
          </button>

          <button
            onClick={handleSend}
            style={{
              padding: "10px 20px",
              background: "#4CAF50",
              color: "white",
              border: "none",
              cursor: "pointer",
            }}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
