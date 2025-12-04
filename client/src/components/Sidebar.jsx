import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div style={{
      width: "200px",
      padding: "20px",
      background: "#f0f0f0",
      height: "100vh"
    }}>
      <h2>Email Client</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        <li><Link to="/inbox">Inbox</Link></li>
        <li><Link to="/sent">Sent</Link></li>
        <li><Link to="/compose">Compose</Link></li>
      </ul>
    </div>
  );
}
