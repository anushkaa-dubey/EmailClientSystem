import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import ComposeModal from "./components/ComposeModal";
import { useState } from "react";
import Inbox from "./pages/Inbox";
import Sent from "./pages/Sent";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  const [showCompose, setShowCompose] = useState(false);

  return (
    <div className="app-layout">
      <Sidebar openCompose={() => setShowCompose(true)} />

      {showCompose && (
        <ComposeModal close={() => setShowCompose(false)} />
      )}

      <Routes>
        <Route path="/" element={<Inbox />} />
        <Route path="/sent" element={<Sent />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
