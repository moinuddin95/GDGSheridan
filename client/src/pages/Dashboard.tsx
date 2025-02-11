import Footer from "../components/Footer/Footer";
import EventsForm from "../components/EventsForm/EventsForm";
import { useState, useEffect } from "react";

export default function Dashboard() {
  const [user, setUser] = useState("");
  useEffect(() => {
    fetch("/api/auth/user", { credentials: "include" })
      .then((res) => res.json())
      .then((data) => {
        setUser(data?.displayName || "");
        console.log(data);
        if (data == null) window.location.href = "/api/auth/login";
      });
  }, []);
  const handleLogin = () => {
    window.location.href = "/api/auth/login";
  };
  return (
    <>
      {user ? (
        <EventsForm displayName={user} />
      ) : (
        <button onClick={handleLogin}>Login with google</button>
      )}
    </>
  );
}
