import "./EventsForm.css";
import discord from "../../assets/discord.png";
function EventsForm() {
    return (
        <div className="EventsForm">
            <h1>Events Form</h1>
            <form action='/api/submitEvent'>
                <div>
                    <label htmlFor="event-name">Event Name</label>
                    <input
                        type="text"
                        id="event-name"
                        placeholder="Event Name"
                    />
                </div>
                <div>
                    <label htmlFor="event-date">Event Date</label>
                    <input type="date" id="event-date" />
                </div>
                <div className="time">
                    <div>
                        <label htmlFor="event-time-from">From</label>
                        <input type="time" id="event-time-from" />
                    </div>
                    <div>
                        <label htmlFor="event-time-to">To</label>
                        <input type="time" id="event-time-to" />
                    </div>
                </div>
                <div>
                    <label htmlFor="event-location">Event Location</label>
                    <input
                        type="text"
                        id="event-location"
                        placeholder="Event Location"
                    />
                </div>

                <div className="description">
                    <label htmlFor="event-description">Event Description</label>
                    <textarea
                        id="event-description"
                    ></textarea>
                </div>

                <div className="thumbnail">
                    <label htmlFor="event-thumbnail">Event Thumbnail</label>
                    <input type="file" id="event-thumbnail" accept="image/*" />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default EventsForm;
