import fs from "fs";
import mysql from "../model/sqlconfig.js";

let eventsCount = 10;

const getEvents = (req, res) => {
  mysql.query(`select * from events;`, (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(results);
    }
  });
};

const getEventById = (req, res) => {
  let id = parseInt(req.params.id);
  let data = fs.readFileSync("./model/Events.json", { encoding: "utf-8" });
  let events = JSON.parse(data);
  let event = events.find((event) => event.id === id);
  if(event === undefined){
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
