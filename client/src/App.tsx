import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import Logout from "./pages/Logout";
import Navbar from "./components/Navbar/Navbar";
function App() {
    const handleRedirection = () => {
    window.location.href = "/dashboard";
  };
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route
          path="/logout"
          element={<Logout />}
        />
      </Routes>
    </Router>
  );
}

export default App;
