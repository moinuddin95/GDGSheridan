import Footer from "../components/Footer/Footer";
import EventsForm from "../components/EventsForm/EventsForm";
import { useState, useEffect } from "react";

export default function Dashboard() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    fetch("/api/auth/google/user", { credentials: "include" })
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        console.log(data);
        if(data == null)
              window.location.href = '/api/auth/google';
      });
  }, []);
  const handleLogin = () => {
    window.location.href = "/api/auth/google";
  };
  return (
    <>
      {user ? (
        <>
          <EventsForm />
          <Footer />
        </>
      ) : (
        <button onClick={handleLogin}>Login with google</button>
      )}
    </>
  );
}
