import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import "./App.css";
import Dashboard from "./pages/Dashboard/Dashboard";
import Logout from "./pages/Logout";
import Footer from "./components/Footer/Footer";
import ActionResult from "./components/ActionResult/ActionResult";
import EventDetails from "./components/EventDetails/EventsDetails";
function App() {
  return (
    <Router basename="/">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/logout" element={<Logout />} />
        <Route
          path="/success"
          element={
            <ActionResult
              message="Event uploaded successfully"
              isSuccess={true}
            />
          }
        />
        <Route
          path="/error"
          element={
            <ActionResult message="Something went wrong :(" isSuccess={false} />
          }
        />
        <Route path="/events/:id" element={<EventDetails />} />
        <Route
          path="/*"
          element={
            <ActionResult message="404 Path not found" isSuccess={false} />
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
