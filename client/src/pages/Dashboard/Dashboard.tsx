import EventsForm from "../../components/EventsForm/EventsForm";
import { useState, useEffect } from "react";
import Loading from "../../components/UI/Loading/Loading";
import axios from "axios"
import "./Dashboard.css";

export default function Dashboard() {
  const [user, setUser] = useState("");
  useEffect(() => {
    const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
    axios.get(`${API_BASE_URL}/auth/user`, { withCredentials: true })
      .then((res) => {
      const data = res.data;
      setUser(data?.displayName || "");
      console.log(data);
      if (data == null) window.location.href = `${API_BASE_URL}/auth/login`;
      })
      .catch((error) => {
      console.error("Error fetching user data:", error);
      });
  }, []);
  return <>{user ? <EventsForm displayName={user} /> : <Loading />}</>;
}
