import { useParams } from 'react-router-dom';
import "./EventsDetails.css";
function EventsDetails() {
  const { id } = useParams();
  
  return (
    <div id="event-details">
      <h1>Hackville</h1>
      <h2>About</h2>
      <p>
        Hackville is a hackathon that takes place in the heart of Silicon Valley. This is the perfect opportunity to meet other developers, designers, and entrepreneurs to build something amazing.
      </p>
      <h3>Where: Sheridan College HMC campus</h3>
      <h3>When: 31 December, 2025</h3>
      <h3>What time: 10:00am to 12:00pm</h3>
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
    </div>
  )
}

export default EventsDetails