import fs from "fs";

let eventsCount = 10;

const getEvents = (req, res) => {
  let data = fs.readFileSync("./model/Events.json", { encoding: "utf-8" });
  res.json(JSON.parse(data));
};

const submitEvent = (req, res) => {
  const Event = {
    id: ++eventsCount,
    executiveName: req.body.executiveName,
    eventName: req.body.eventName,
    eventDate: req.body.eventDate,
    eventTimeFrom: req.body.eventTimeFrom,
    eventTimeTo: req.body.eventTimeTo,
    eventLocation: req.body.eventLocation,
    eventDescription: req.body.eventDescription,
  };
  let events = JSON.parse(
    fs.readFileSync("./model/Events.json", { encoding: "utf-8" })
  );
  events.push(Event);
  fs.writeFileSync("./model/Events.json", JSON.stringify(events, null, 2));
  res.status(201).send("Event added successfully");
};

export { getEvents, submitEvent };
