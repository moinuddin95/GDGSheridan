import { Router } from "express";
import { getEvents, submitEvent } from "../controllers/eventsController.js";

const eventRouter = Router();

eventRouter.get("/", getEvents);

eventRouter.post("/submit", submitEvent);

export default eventRouter;
