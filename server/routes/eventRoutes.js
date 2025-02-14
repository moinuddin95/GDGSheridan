import { Router } from "express";
import { getEvents, submitEvent, getEventById } from "../controllers/eventsController.js";

const eventRouter = Router();

eventRouter.get("/", getEvents);

eventRouter.get("/:id", getEventById);

eventRouter.post("/submit", submitEvent);

export default eventRouter;
