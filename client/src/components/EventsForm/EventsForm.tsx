import "./EventsForm.css";
import { useState, useEffect, ChangeEvent } from "react";

interface EventsFormProps {
  displayName: string;
}

function EventsForm({ displayName }: EventsFormProps) {
  const [formInput, setFormInput] = useState({
    eventName: "",
    eventDate: "",
    eventTimeFrom: "",
    eventTimeTo: "",
    eventLocation: "",
    eventDescription: "",
    eventThumbnail: null,
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    setFormInput((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetch("/api/submitEvent", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({...formInput, executiveName: displayName})
    })
      .then((res) => console.log(res.status))
      .catch((error) => console.log(error));
  };

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

        <div className="thumbnail">
          <label htmlFor="event-thumbnail">Event Thumbnail</label>
          <input
            type="file"
            id="event-thumbnail"
            name="eventThumbnail"
            accept="image/*"
            onChange={handleChange}
          />
        </div>
        <button type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default EventsForm;
