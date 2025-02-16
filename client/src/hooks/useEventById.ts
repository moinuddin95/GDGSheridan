import EventsCardInterface from "../interfaces/EventsCardInterface";
import { useEffect, useState } from "react";
import axios from "axios";

const useEventById = (id: string = "1") => {
  const [event, setEvent] = useState<EventsCardInterface | undefined>(undefined);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await axios.get(`/api/events/${id}`);
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