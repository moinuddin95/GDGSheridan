import { useParams } from "react-router-dom";
import useEventById from "../../hooks/useEventById";
import Loading from "../UI/Loading/Loading";
import "./EventsDetails.css";
function EventsDetails() {
  const { id } = useParams();
  const event = useEventById(id);
  console.log("Event received:" + JSON.stringify(event, null, 2));
  return event ? (
    <div id="event-details">
      <h1>{event?.eventName}</h1>
      <h2>About</h2>
      <p>{event?.eventDescription}</p>
      <h3>Where: {event?.eventLocation}</h3>
      {event?.eventDateFrom === event?.eventDateTo ? (
        <>
          <h3>When: {event?.eventDateFrom}</h3>
          <h3>
            What time: {event?.eventTimeFrom} to {event?.eventTimeTo}
          </h3>
        </>
      ) : (
          <h3>
            When: {event?.eventDateFrom} {event?.eventTimeFrom} to{" "}
            {event?.eventDateTo} {event?.eventTimeTo}
          </h3>
      )}
      <h2>Key Themes</h2>
      <ul>
        {event?.eventThemes.split(',').map((theme) => (
          <li key={theme}>{theme}</li>
        ))}
      </ul>
      <button>RSVP</button>
    </div>
  ) : (
    <Loading />
  );
}
export default EventsDetails;
