import "./Events.css";
import template from "../../assets/template.png";
import { useState, useEffect } from "react";

interface EventsInterface {
  name: string;
  date: string;
}

function Events() {
  const [events, setEvents] = useState<EventsInterface[]>([]);
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const eventsFetch = await fetch("/data");
        // console.log("eventsFetch = " + eventsFetch.);
        const response = (await eventsFetch.json()) as EventsInterface[];
        setEvents(response);
      } catch (err) {
        console.log("Here is the error: " + err);
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
            <a href="" key={event.name}>
              <div
                className="eventCard"
                style={{ backgroundImage: `url(${template})` }}
              >
                <h2>{event.name}</h2>
                <h3>{event.date}</h3>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}

export default Events;
