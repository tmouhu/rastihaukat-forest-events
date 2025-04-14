
import { Event, EventType } from "@/types/event";

// Mock data to simulate API responses
const mockEvents: Event[] = [
  {
    id: "1",
    title: "Kevätrasti Paloheinä",
    eventType: "itarastit",
    startDateTime: "2025-04-20T16:00:00Z",
    endDateTime: "2025-04-20T19:00:00Z",
    locationName: "Paloheinän majat",
    coordinates: {
      lat: 60.255,
      lon: 24.937
    },
    parkingInfo: "Paloheinän ulkoilumajat, Pakilantie 124",
    navigationLink: "https://goo.gl/maps/9rG8J9fZmLZQ5JNVA",
    tracks: [
      { name: "A", length: "5.2 km", difficulty: "Difficult" },
      { name: "B", length: "4.1 km", difficulty: "Medium" },
      { name: "C", length: "3.0 km", difficulty: "Easy" },
      { name: "D", length: "2.0 km", difficulty: "Very Easy" }
    ],
    notes: "Start anytime between 16-18:30. Bring your own compass.",
    mapFile: "/maps/paloheinä_20250420.jpg",
    isPast: false
  },
  {
    id: "2",
    title: "Itärasti Herttoniemi",
    eventType: "itarastit",
    startDateTime: "2025-04-27T16:00:00Z",
    endDateTime: "2025-04-27T19:00:00Z",
    locationName: "Herttoniemen ulkoilumaja",
    coordinates: {
      lat: 60.220,
      lon: 25.042
    },
    parkingInfo: "Herttoniemen ulkoilumajan parkkipaikka",
    navigationLink: "https://goo.gl/maps/H1t2r3J4k5L6m7N8A",
    tracks: [
      { name: "A", length: "6.1 km", difficulty: "Difficult" },
      { name: "B", length: "4.5 km", difficulty: "Medium" },
      { name: "C", length: "3.2 km", difficulty: "Easy" },
      { name: "D", length: "2.1 km", difficulty: "Very Easy" }
    ],
    notes: "Terrain includes some steep rocky hillsides. Not suitable for spikes.",
    mapFile: "/maps/herttoniemi_20250427.jpg",
    isPast: false
  },
  {
    id: "3",
    title: "Keskuspuisto Sprintti",
    eventType: "sprint",
    startDateTime: "2025-05-04T17:00:00Z",
    endDateTime: "2025-05-04T19:30:00Z",
    locationName: "Pirkkolan urheilupuisto",
    coordinates: {
      lat: 60.232,
      lon: 24.921
    },
    parkingInfo: "Pirkkolan uimahalli parkkipaikka",
    navigationLink: "https://goo.gl/maps/a1b2c3d4e5f6g7h8i9",
    tracks: [
      { name: "A", length: "3.5 km", difficulty: "Difficult" },
      { name: "B", length: "2.8 km", difficulty: "Medium" },
      { name: "C", length: "2.0 km", difficulty: "Easy" }
    ],
    notes: "Stadin sprintticup, race 2/5. First start at 17:00, seeded starts.",
    mapFile: "/maps/pirkkola_sprint_20250504.jpg",
    isPast: false
  },
  {
    id: "4",
    title: "Iterasti Salmenkallio",
    eventType: "iterastit",
    startDateTime: "2025-03-27T09:00:00Z",
    endDateTime: "2025-04-10T20:00:00Z",
    locationName: "Salmenkallio",
    coordinates: {
      lat: 60.246,
      lon: 25.174
    },
    parkingInfo: "Vanhan Kalkkirannantien varressa",
    navigationLink: "https://goo.gl/maps/j9k8l7m6n5o4p3q2",
    tracks: [
      { name: "A", length: "5.0 km", difficulty: "Difficult" },
      { name: "B", length: "3.8 km", difficulty: "Medium" },
      { name: "C", length: "2.7 km", difficulty: "Easy" }
    ],
    notes: "Self-service controls. Maps can be downloaded or printed from the club website. Controls will be in place for two weeks.",
    mapFile: "/maps/salmenkallio_20250327.jpg",
    isPast: false
  },
  {
    id: "5",
    title: "Ruskeasuon kevätsprintti",
    eventType: "sprint",
    startDateTime: "2025-03-15T10:00:00Z",
    endDateTime: "2025-03-15T13:00:00Z",
    locationName: "Ruskeasuon urheilupuisto",
    coordinates: {
      lat: 60.205,
      lon: 24.897
    },
    parkingInfo: "Ratsastiehallin parkkipaikka",
    navigationLink: "https://goo.gl/maps/r5t6y7u8i9o0p1a2",
    tracks: [
      { name: "A", length: "3.2 km", difficulty: "Difficult" },
      { name: "B", length: "2.5 km", difficulty: "Medium" },
      { name: "C", length: "1.8 km", difficulty: "Easy" }
    ],
    notes: "Stadin sprintticup, race 1/5.",
    mapFile: "/maps/ruskeasuo_20250315.jpg",
    resultsLink: "https://results.orienteering.fi/rastihaukat/2025031501",
    isPast: true
  },
  {
    id: "6",
    title: "Paloheinä talvirasti",
    eventType: "itarastit",
    startDateTime: "2025-03-09T11:00:00Z",
    endDateTime: "2025-03-09T14:00:00Z",
    locationName: "Paloheinän ulkoilumaja",
    coordinates: {
      lat: 60.255,
      lon: 24.937
    },
    parkingInfo: "Paloheinän hiihtomajan parkkipaikka",
    navigationLink: "https://goo.gl/maps/9rG8J9fZmLZQ5JNVA",
    tracks: [
      { name: "A", length: "6.0 km", difficulty: "Difficult" },
      { name: "B", length: "4.5 km", difficulty: "Medium" },
      { name: "C", length: "3.0 km", difficulty: "Easy" },
      { name: "D", length: "2.0 km", difficulty: "Very Easy" }
    ],
    notes: "Snow conditions, participants are required to stay on marked paths in certain areas.",
    mapFile: "/maps/paloheinä_20250309.jpg",
    resultsLink: "https://results.orienteering.fi/rastihaukat/2025030901",
    isPast: true
  }
];

export const fetchEvents = async (): Promise<Event[]> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  // Return mock data
  return mockEvents;
};

export const fetchUpcomingEvents = async (): Promise<Event[]> => {
  const events = await fetchEvents();
  return events.filter(event => !event.isPast);
};

export const fetchPastEvents = async (): Promise<Event[]> => {
  const events = await fetchEvents();
  return events.filter(event => event.isPast);
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
