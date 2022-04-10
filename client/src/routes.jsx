import React from "react";

const HomePage = React.lazy(() => import("./pages/Home"))
const LoginPage = React.lazy(() => import("./pages/Login"))
const RegisterPage = React.lazy(() => import("./pages/Register"))
const DashboardPage = React.lazy(() => import("./pages/Dashboard"))

const routes = [
  { path: "/", name: "Home", element: <HomePage /> },
  { path: "/login", name: "Login", element: <LoginPage />},
  { path: "/register", name: "Register", element: <RegisterPage /> },
  { path: "/dashboard", name: "Dashboard", element: <DashboardPage /> }
]

export default routes