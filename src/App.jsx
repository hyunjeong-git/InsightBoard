import {
  Routes,
  Route,
} from "react-router-dom";
import Login from './pages/Login.jsx';
import SingUp from './pages/Signup.jsx';
import Dashboard from './features/dashboard/DashboardPage.jsx';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/signup" element={<SingUp />}/>
    </Routes>
  );
}

export default App
