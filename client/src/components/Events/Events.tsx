import "./Events.css";
import template from "../../assets/template.png";
import { useState, useEffect } from "react";
import axios from "axios";

interface EventsInterface {
  eventName: string;
  eventDate: string;
}

function Events() {
  const [events, setEvents] = useState<EventsInterface[]>([]);
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
  return (
    <section id="Events">
      <h1>Events</h1>
      <div>
        {events.map((event) => {
          return (
            <a
              href="#"
              key={event.eventName}
              style={{ backgroundImage: `url(${template})` }}
            >
              <div className="eventCard">
                <h2>{event.eventName}</h2>
                <h3>{event.eventDate}</h3>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}

export default Events;
