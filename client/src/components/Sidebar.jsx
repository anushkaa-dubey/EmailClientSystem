import { Link } from "react-router-dom";

export default function Sidebar({ openCompose }) {
  return (
    <div className="sidebar">
      <button className="compose-btn" onClick={openCompose}>✉ Compose</button>

      <ul>
        <li><Link to="/">Inbox</Link></li>
        <li><Link to="/sent">Sent</Link></li>
      </ul>
    </div>
  );
}
