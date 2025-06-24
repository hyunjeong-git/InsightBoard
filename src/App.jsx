import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login.jsx";
import SingUp from "./pages/Signup.jsx";
import Dashboard from "./features/dashboard/DashboardPage.jsx";
import Layout from "./layout/Layout.jsx";
import DetailPage from "./features/dashboard/DetailPage.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route index element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SingUp />} />
        <Route path="/detail" element={<DetailPage />} />
      </Route>
    </Routes>
  );
}

export default App;
