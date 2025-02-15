import "./EventsForm.css";
import useFormInput from "../../hooks/useFormInput";
import { useNavigate } from "react-router-dom";
import Compressor from "compressorjs";
import EventsFormProps from "../../interfaces/Props/EventFormProps";

function EventsForm({ displayName }: EventsFormProps) {
  const navigate = useNavigate();

  const { handleChange, handleSubmit} = useFormInput(displayName);

  return (
    <div className="EventsForm">
      <h1>Welcome {displayName}</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="event-name">Event Name</label>
          <input
            type="text"
            id="event-name"
            name="eventName"
            placeholder="Event Name"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="event-date">Event Date</label>
          <input
            type="date"
            id="event-date"
            name="eventDate"
            onChange={handleChange}
          />
        </div>
        <div className="time">
          <div>
            <label htmlFor="event-time-from">From</label>
            <input
              type="time"
              id="event-time-from"
              name="eventTimeFrom"
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="event-time-to">To</label>
            <input
              type="time"
              id="event-time-to"
              name="eventTimeTo"
              onChange={handleChange}
            />
          </div>
        </div>
        <div>
          <label htmlFor="event-location">Event Location</label>
          <input
            type="text"
            id="event-location"
            name="eventLocation"
            placeholder="Event Location"
            onChange={handleChange}
          />
        </div>

        <div className="description">
          <label htmlFor="event-description">Event Description</label>
          <textarea
            id="event-description"
            name="eventDescription"
            rows={3}
            cols={40}
            onChange={handleChange}
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default EventsForm;
