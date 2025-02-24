import { useEffect, useState } from "react";
import axios from "axios";
import EventDetailsInterface from "../interfaces/EventsDetailsInterface";

const useEvents = () => {
  const [events, setEvents] = useState<EventDetailsInterface[]>([]);
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get("/api/events");
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
