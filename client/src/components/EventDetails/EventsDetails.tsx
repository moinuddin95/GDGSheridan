import { useParams } from 'react-router-dom';
import useEventById from '../../hooks/useEventById';
import { Navigate } from 'react-router-dom';
import Loading from '../UI/Loading/Loading';
import "./EventsDetails.css";
function EventsDetails() {
  const { id } = useParams();
  const event = useEventById(id);
  console.log("Event received:" + event);
  return (event ? 
    <div id="event-details">
      <h1>{event?.eventName}</h1>
      <h2>About</h2>
      <p>
        {event?.eventDescription}
      </p>
      <h3>Where: {event?.eventLocation}</h3>
      <h3>When: {event?.eventDate}</h3>
      <h3>What time: {event?.eventTimeFrom} to {event?.eventTimeTo}</h3>
      <h2>Key Themes</h2>
      <ul>
        <li>Web Development</li>
        <li>Mobile Development</li>
        <li>Artificial Intelligence</li>
        <li>Machine Learning</li>
        <li>Web Development</li>
        <li>Mobile Development</li>
        <li>Artificial Intelligence</li>
        <li>Machine Learning</li><li>Web Development</li>
        <li>Mobile Development</li>
        <li>Artificial Intelligence</li>
        <li>Machine Learning</li>
      </ul>
      <button>RSVP</button>
    </div> : <Loading />/*<Navigate to="/error"/>*/);
}
export default EventsDetails;