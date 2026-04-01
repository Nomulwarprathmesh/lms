import { Routes, Route } from "react-router-dom";
import LoginPage from "../modules/auth/pages/LoginPage";
import AdminDashboard from "../modules/admin/pages/AdminDashboard";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/admin/dashboard" element={<AdminDashboard />} />
    </Routes>
  );
}

export default AppRoutes;