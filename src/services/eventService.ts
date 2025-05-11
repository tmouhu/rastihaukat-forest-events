
import { Event, EventType } from "@/types/event";
import { strapi } from '@strapi/client';

const client = strapi({
  baseURL: 'http://localhost:1337/api',
  auth: '183cc69e47294c1b201c0a240481ec260db699733b4f7edf84ad36b642d3d0099bc2973dc1d6f680074dd1fc0cf9d6af33f99af93e50fe8797cc6465a988d6a767c2e0a70058c74830009784500f5f693070b9dee3233b2356ea26e43842ab5e702044cdbca3e693cfea34bc91eaf84c05fb94b999508afca83f71732b136718',
});

export const fetchEvents = async (): Promise<Event[]> => {
  const events = client.collection('events');
  const response = await events.find();
  return response.data as Event[];
};

export const fetchUpcomingEvents = async (): Promise<Event[]> => {
  const events = await fetchEvents();
  return events.filter(event => new Date(event.startDateTime) >= new Date());
};

export const fetchPastEvents = async (): Promise<Event[]> => {
  const events = await fetchEvents();
  const currentYear = new Date().getFullYear();
  return events.filter(event => new Date(event.endDateTime) < new Date() && new Date(event.startDateTime).getFullYear() === currentYear);
};

export const fetchArchiveEvents = async (): Promise<Event[]> => {
  const events = await fetchEvents();
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth() + 1; // 0-indexed, +1 to get 1-12 range

  return events.filter(event => {
    const eventYear = new Date(event.startDateTime).getFullYear();
    // Include events from previous years
    if (event.startDateTime &&  eventYear < currentYear) {
      return true;
    }

    // Include spring events (before June) from current year if it's past June
    if (eventYear === currentYear && currentMonth > 6) {
      const eventMonth = new Date(event.startDateTime).getMonth() + 1;
      if (eventMonth <= 6 && new Date(event.endDateTime) < new Date()) {
        return true;
      }
    }

    return false;
  });
};

export const fetchSeasonEvents = async (year: number, season: string): Promise<Event[]> => {
  const events = await fetchEvents();
  const isSpring = season.toLowerCase() === "kevät" || season.toLowerCase() === "kevat";

  return events.filter(event => {
    const eventYear = new Date(event.startDateTime).getFullYear();
    if (eventYear !== year) return false;

    const eventMonth = new Date(event.startDateTime).getMonth() + 1;
    // Spring: January-June, Fall: July-December
    if (isSpring) {
      return eventMonth <= 6;
    } else {
      return eventMonth > 6;
    }
  });
};

export const getEventTypeName = (type: EventType): string => {
  switch (type) {
    case "itarastit":
      return "Itärastit";
    case "iterastit":
      return "Iterastit";
    case "sprint":
      return "Stadin sprintticup";
    default:
      return type;
  }
};
