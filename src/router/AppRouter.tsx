import { useEffect } from "react";
import { useAuthStore } from "../hooks/useAuthStore";
import { Navigate, Route, Routes } from "react-router-dom";
import { Login } from "../pages/login/Login";
import { Menu } from "../pages/layout/Menu";
import { MemberPage } from "../pages/members/MemberPage";
import { DashboardPage } from "../pages/dashboard/DashboardPage";

export const AppRouter = () => {
  const { status, checkAuthToken } = useAuthStore();

  useEffect(() => {
    checkAuthToken();
  }, []);

  if (status === "checking") {
    return <h1>Cargando...</h1>;
  }

  return (
    <Routes>
      {status === "not-authenticated" ? (
        <>
          <Route path="/auth/*" element={<Login />} />
          <Route path="/*" element={<Navigate to="/auth/login" />} />
        </>
      ) : (
        <>
          <Route path="/" element={<Menu />}>
            <Route path="dashboard" element={<DashboardPage />} />
            <Route path="usuarios" element={<MemberPage />} />
            <Route path="/*" element={<Navigate to="/dashboard" />} />
          </Route>
        </>
      )}
    </Routes>
  );
};
