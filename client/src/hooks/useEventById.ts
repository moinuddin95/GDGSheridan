import EventDetailsInterface from "../interfaces/EventsDetailsInterface";
import { useEffect, useState } from "react";
import axios from "axios";

const useEventById = (id: string = "1") => {
  const [event, setEvent] = useState<EventDetailsInterface | undefined>(
    undefined
  );

  useEffect(() => {
    const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
    const fetchEvent = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/events/${id}`);
        if (response.status === 200) {
          console.log("response.data:", response.data);
          setEvent(response.data);
        } else {
          setEvent(undefined);
        }
      } catch (error) {
        console.error("Error fetching event:", error);
        setEvent(undefined);
      }
    };
    fetchEvent();
  }, []);

  return event;
};

export default useEventById;
