import { useState } from "react";
import ComposePopup from "./ComposePopup";

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="sidebar">
      <button onClick={() => setOpen(true)}>Compose</button>

      <a href="/inbox">Inbox</a>
      <a href="/sent">Sent</a>
      <button onClick={() => navigate("/inbox")}>Inbox</button>


      {open && <ComposePopup onClose={() => setOpen(false)} />}
    </div>
  );
}
