import "./Events.css";
import template from "../../assets/template.png";
import useEvents from "../../hooks/useEvents";

function Events() {
  const { events } = useEvents();
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
