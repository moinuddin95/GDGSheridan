import "./Events.css";
import events from "../../model/events.json";
import template from "../../assets/template.png";

function parseEventsToHtml() {
  return events.map((event) => {
    return (
      <a>
        
        <div className="eventCard" style={{ backgroundImage: `url(${template})` }}>
          <h2>{event.name}</h2>
          <h3>{event.date}</h3>
        </div>
      </a>
    );
  });
}

function Events() {
  return (
    <section id="Events">
      <h1>Events</h1>
      <div>{parseEventsToHtml()}</div>
    </section>
  );
}

export default Events;
