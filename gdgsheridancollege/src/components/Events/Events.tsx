import "./Events.css";
import template from "../../assets/template.png";

function Events() {
  return (
    <section id="Events">
      <h1>Events</h1>
      <div>
        <a>
          <img src={template} />
          <h2>Devfest</h2>
          <h3>November 1, 2024</h3>
        </a>
        <a>
          <img src={template} />
        </a>
        <a>
          <img src={template} />
        </a>
        <a>
          <img src={template} />
        </a>
        <a>
          <img src={template} />
        </a>
      </div>
    </section>
  );
}

export default Events;
