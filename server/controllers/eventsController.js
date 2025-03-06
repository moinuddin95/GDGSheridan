import fs from "fs";
import mysql from "../model/sqlconfig.js";

let eventsCount = 10;

const getEvents = (req, res) => {
  mysql.query(
    `select id, event_name, event_date_from, event_date_to from events;`,
    (err, results) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.json(results);
      }
    }
  );
};

const getEventById = (req, res) => {
  let id = parseInt(req.params.id);
  let event = mysql.query(
    `SELECT 
    e.id,
    e.url,
    e.executive_name,
    e.event_name,
    e.event_date_from,
    e.event_date_to,
    e.event_time_from,
    e.event_time_to,
    e.event_location,
    e.event_description,
    GROUP_CONCAT(t.theme_name SEPARATOR ', ') AS event_themes
FROM 
    events e
LEFT JOIN 
    event_theme_mapping etm ON e.id = etm.event_id
LEFT JOIN 
    themes t ON etm.theme_id = t.id
WHERE 
    e.id = ?  -- Replace ? with the specific event ID
GROUP BY 
    e.id;
`,
    (res, err) => {
      if (error) console.error("Couldn't fetch event\n error:", err);
      else console.log("event fetched");
    }
  );
  if (event === undefined) {
    res.status(404).send("Event not found");
  }
  res.status(200).json(event);
};

const submitEvent = (req, res) => {
  const Event = {
    id: ++eventsCount,
    executiveName: req.body.executiveName,
    eventName: req.body.eventName,
    eventDateFrom: req.body.eventDateFrom,
    eventDateTo: req.body.eventDateTo,
    eventTimeFrom: req.body.eventTimeFrom,
    eventTimeTo: req.body.eventTimeTo,
    eventLocation: req.body.eventLocation,
    eventDescription: req.body.eventDescription,
    eventThemes: req.body.eventThemes,
  };
  let events = JSON.parse(
    fs.readFileSync("./model/Events.json", { encoding: "utf-8" })
  );
  events.push(Event);
  fs.writeFileSync("./model/Events.json", JSON.stringify(events, null, 2));
  res.status(201).send("Event added successfully");
};

export { getEvents, submitEvent, getEventById };
