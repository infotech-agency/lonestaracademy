import { useState, useEffect } from "react";
import AdminLogin from "./AdminLogin";
import AdminDashboard from "./AdminDashboard";

export default function AdminPanel() {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem("admin_token");
    if (saved) setToken(saved);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("admin_token");
    setToken(null);
  };

  if (!token) return <AdminLogin onLogin={setToken} />;
  return <AdminDashboard token={token} onLogout={handleLogout} />;
}
