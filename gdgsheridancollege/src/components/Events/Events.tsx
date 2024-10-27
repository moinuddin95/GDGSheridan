import "./Events.css";
import events from "../../model/events.json";
import template from "../../assets/template.png";

function returnEvents() {
  return events.map((event) => {
    return (
      <a>
        <img src={template} />
        <h2>{event.name}</h2>
        <h3>{event.date}</h3>
      </a>
    );
  });
}

function Events() {
  return (
    <section id="Events">
      <h1>Events</h1>
      <div>{returnEvents()}</div>
    </section>
  );
}

export default Events;
