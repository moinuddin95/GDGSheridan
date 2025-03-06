interface EventDetailsInterface {
  id?: number;
  //TODO: Add url logic
  url?: string;
  executiveName: string;
  eventName: string;
  eventDateFrom: string;
  eventDateTo: string;
  eventTimeFrom: string;
  eventTimeTo: string;
  eventLocation: string;
  eventDescription: string;
  eventThemes: string[];
}

export default EventDetailsInterface;
