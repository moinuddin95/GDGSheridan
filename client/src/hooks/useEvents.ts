import { useEffect, useState } from "react";
import axios from "axios";
import EventListItem from "../interfaces/EventListItem";

const useEvents = () => {
  const [events, setEvents] = useState<EventListItem[]>([]);
  useEffect(() => {
    const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
    const fetchEvents = async () => {
      try {
        console.log(`${API_BASE_URL}/events`);
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
