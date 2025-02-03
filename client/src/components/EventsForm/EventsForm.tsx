import "./EventsForm.css";
import { useState, useEffect, ChangeEvent } from "react";

function EventsForm() {
  const [displayName, setDisplayName] = useState(null);

  const [formInput, setFormInput] = useState({
    eventName: "",
    eventDate: "",
    eventTimeFrom: "",
    eventTimeTo: "",
    eventLocation: "",
    eventDescription: "",
    eventThumbnail: null,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormInput((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
    const fetchUser = async () => {
      const user = await fetch("/api/auth/google/user", {
        credentials: "include",
      });
      const response = await user.json();
      setDisplayName(response.displayName);
    };
    fetchUser()
  }, []);

  const handleSubmit = () => {};

  return (
    <div className="EventsForm">
      <h1>Welcome {displayName}</h1>
      <h1>Events Form</h1>
      <form action="/api/submitEvent">
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
              name="eventNameTo"
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

        {/* <div className="description">
                    <label htmlFor="event-description">Event Description</label>
                    <textarea
                        id="event-description"
                        onChange={handleChange}
                    ></textarea>
                </div> */}

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
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default EventsForm;
