import "./EventsForm.css";
import useFormInput from "../../hooks/useFormInput";
import { useNavigate } from "react-router-dom";
import EventsFormProps from "../../interfaces/EventFormProps";

function EventsForm({ displayName }: EventsFormProps) {
  const navigate = useNavigate();

  const { handleChange, handleSubmit, keyThemes } = useFormInput(displayName);

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
          <label htmlFor="event-date-from">Event Date From</label>
          <input
            type="date"
            id="event-date-from"
            name="eventDateFrom"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="event-date-to">Event Date To</label>
          <input
            type="date"
            id="event-date-to"
            name="eventDateTo"
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

        <div className="event-themes">
          {Array.isArray(keyThemes) && keyThemes.map((_, index) => (
            <div key={`theme-${index}`}>
              <label htmlFor={`event-theme-${index}`}>Event Theme {index + 1}: </label>
              <input
                type="text"
                id={`event-theme-${index}`}
                name={"eventThemes"}
                onChange={(e) => {handleChange(e, index)}}
                value={keyThemes[index]}
              />
            </div>
          ))}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default EventsForm;
