import { useEffect, useState } from "react";
import axios from "axios";
import EventDetailsInterface from "../interfaces/EventsDetailsInterface";

const useEvents = () => {
  const [events, setEvents] = useState<EventDetailsInterface[]>([]);
  useEffect(() => {
    const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
    const fetchEvents = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/events`);
        console.log(response.data);
        setEvents(response.data);
      } catch (err) {
        console.log("Error while requesting events: " + err);
      }
    };
    fetchEvents();
  }, []);
  return { events };
};
export default useEvents;
