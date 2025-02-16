import "./Events.css";
import eventCardBlue from "../../assets/event-card-blue.png";
import eventCardYellow from "../../assets/event-card-yellow.png";
import useEvents from "../../hooks/useEvents";
import Loading from "../UI/Loading/Loading";
import { Link } from "react-router-dom";

function Events() {
  const { events } = useEvents();
  return events ? (
    <section id="Events">
      <h1>Events</h1>
      <div>
        {events.map((event) => {
          return (
            <Link
              to={`/events/${event.id}`}
              key={event.eventName}
              style={{ backgroundImage: `url(${events.indexOf(event) % 2 === 0 ? eventCardBlue : eventCardYellow})` }}
            >
              <div className="eventCard">
              <h2>{event.eventName}</h2>
              <h3>{event.eventDateTo}</h3>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  ) : (<Loading />);
}

export default Events;
