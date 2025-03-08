import fs from "fs";
import mysql from "../model/sqlconfig.js";

const getEvents = (req, res) => {
  mysql.query(
    `select id , event_name "eventName", DATE_FORMAT(event_date_from, '%Y-%m-%d') AS eventDateFrom,
  DATE_FORMAT(event_date_to, '%Y-%m-%d') AS eventDateTo from events;`,
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
      id,
      url,
      executive_name "executiveName",
      event_name "eventName",
      DATE_FORMAT(event_date_from, '%Y-%m-%d') AS eventDateFrom,
      DATE_FORMAT(event_date_to, '%Y-%m-%d') AS eventDateTo,
      event_time_from "eventTimeFrom",
      event_time_to "eventTimeTo",
      event_location "eventLocation",
      event_description "eventDescription",
      event_themes "eventThemes"
    FROM 
      events
    WHERE
      id=?;`,
    [id],
    (err, result) => {
      if (err) res.status(500).send("Couldn't fetch event.");
      if (result.length === 0) res.status(404).send("Event not found");
      let event = result[0];
      const themes = event.eventThemes.split(',');
      event = {...event, eventThemes:themes};
      res.status(200).json(event);
    }
  );
};

const submitEvent = (req, res) => {
  mysql.query(
    `INSERT INTO events (
      event_url, 
      executive_name, 
      event_name, 
      event_date_from, 
      event_date_to, 
      event_time_from, 
      event_time_to, 
      event_location, 
      event_description, 
      event_themes
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [
      req.body.eventURL,
      req.body.executiveName,
      req.body.eventName,
      req.body.eventDateFrom,
      req.body.eventDateTo,
      req.body.eventTimeFrom,
      req.body.eventTimeTo,
      req.body.eventLocation,
      req.body.eventDescription,
      req.body.eventThemes.join(',')
    ],
    (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).send("Error submitting event");
      } else {
        console.log("Event submitted");
        res.status(201).send("Event added successfully");
      }
    }
  );
};

export { getEvents, submitEvent, getEventById };
