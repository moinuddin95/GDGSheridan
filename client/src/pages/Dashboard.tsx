import EventsForm from "../components/EventsForm/EventsForm";
import { useState, useEffect } from "react";
import Loading from "../components/UI/Loading/Loading";
import Navbar from "../components/Navbar/Navbar";
import DashboardOptions from "../components/UI/NavbarOptions/DashboardOptions/DashboardOptions";

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
      <Navbar>
        <DashboardOptions />
      </Navbar>
      {user ? (
        <EventsForm displayName={user} />
      ) : (
        <Loading />
      )}
    </>
  );
}
