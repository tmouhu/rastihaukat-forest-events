
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
    streetAddress: "Pakilantie 124, Helsinki",
    coordinates: {
      lat: 60.255,
      lon: 24.937
    },
    parkingInfo: "Paloheinän ulkoilumajat, Pakilantie 124",
    navigationLink: "https://goo.gl/maps/9rG8J9fZmLZQ5JNVA",
    tracks: [
      { name: "A", length: "5.2 km", difficulty: "Vaikea" },
      { name: "B", length: "4.1 km", difficulty: "Keskivaikea" },
      { name: "C", length: "3.0 km", difficulty: "Helppo" },
      { name: "D", length: "2.0 km", difficulty: "Erittäin helppo" }
    ],
    notes: "Lähtö milloin vain klo 16-18:30 välillä. Ota oma kompassi mukaan.",
    mapFile: "/maps/paloheinä_20250420.jpg",
    isPast: false,
    year: 2025,
    courseSetter: "Matti Meikäläinen",
    rastilippuLink: "https://rastilippu.fi/event/12345",
    isActive: true
  },
  {
    id: "2",
    title: "Itärasti Herttoniemi",
    eventType: "itarastit",
    startDateTime: "2025-04-27T16:00:00Z",
    endDateTime: "2025-04-27T19:00:00Z",
    locationName: "Herttoniemen ulkoilumaja",
    streetAddress: "Herttoniemen ulkoilutie 2, Helsinki",
    coordinates: {
      lat: 60.220,
      lon: 25.042
    },
    parkingInfo: "Herttoniemen ulkoilumajan parkkipaikka",
    navigationLink: "https://goo.gl/maps/H1t2r3J4k5L6m7N8A",
    tracks: [
      { name: "A", length: "6.1 km", difficulty: "Vaikea" },
      { name: "B", length: "4.5 km", difficulty: "Keskivaikea" },
      { name: "C", length: "3.2 km", difficulty: "Helppo" },
      { name: "D", length: "2.1 km", difficulty: "Erittäin helppo" }
    ],
    notes: "Maasto sisältää jyrkkiä kallioisia rinteitä. Ei sovellu piikkareihin.",
    mapFile: "/maps/herttoniemi_20250427.jpg",
    isPast: false,
    year: 2025,
    courseSetter: "Liisa Suuntaaja",
    rastilippuLink: "https://rastilippu.fi/event/12346"
  },
  {
    id: "3",
    title: "Keskuspuisto Sprintti",
    eventType: "sprint",
    startDateTime: "2025-05-04T17:00:00Z",
    endDateTime: "2025-05-04T19:30:00Z",
    locationName: "Pirkkolan urheilupuisto",
    streetAddress: "Pirjontie 12-14, Helsinki",
    coordinates: {
      lat: 60.232,
      lon: 24.921
    },
    parkingInfo: "Pirkkolan uimahalli parkkipaikka",
    navigationLink: "https://goo.gl/maps/a1b2c3d4e5f6g7h8i9",
    tracks: [
      { name: "A", length: "3.5 km", difficulty: "Vaikea" },
      { name: "B", length: "2.8 km", difficulty: "Keskivaikea" },
      { name: "C", length: "2.0 km", difficulty: "Helppo" }
    ],
    notes: "Stadin sprintticup, kilpailu 2/5. Ensimmäinen lähtö klo 17:00, lähdöt rankin mukaan.",
    mapFile: "/maps/pirkkola_sprint_20250504.jpg",
    isPast: false,
    year: 2025,
    courseSetter: "Ville Sprinttari",
    rastilippuLink: "https://rastilippu.fi/event/12347"
  },
  {
    id: "4",
    title: "Iterasti Salmenkallio",
    eventType: "iterastit",
    startDateTime: "2025-03-27T09:00:00Z",
    endDateTime: "2025-04-10T20:00:00Z",
    locationName: "Salmenkallio",
    streetAddress: "Vanha Kalkkirannantie, Helsinki",
    coordinates: {
      lat: 60.246,
      lon: 25.174
    },
    parkingInfo: "Vanhan Kalkkirannantien varressa",
    navigationLink: "https://goo.gl/maps/j9k8l7m6n5o4p3q2",
    tracks: [
      { name: "A", length: "5.0 km", difficulty: "Vaikea" },
      { name: "B", length: "3.8 km", difficulty: "Keskivaikea" },
      { name: "C", length: "2.7 km", difficulty: "Helppo" }
    ],
    notes: "Omatoimirastit. Kartat voi ladata tai tulostaa seuran verkkosivuilta. Rastit ovat paikoillaan kaksi viikkoa.",
    mapFile: "/maps/salmenkallio_20250327.jpg",
    isPast: false,
    year: 2025,
    courseSetter: "Antti Rastittaja",
    rastilippuLink: "https://rastilippu.fi/event/12348"
  },
  {
    id: "5",
    title: "Ruskeasuon kevätsprintti",
    eventType: "sprint",
    startDateTime: "2025-03-15T10:00:00Z",
    endDateTime: "2025-03-15T13:00:00Z",
    locationName: "Ruskeasuon urheilupuisto",
    streetAddress: "Ratsastie 8, Helsinki",
    coordinates: {
      lat: 60.205,
      lon: 24.897
    },
    parkingInfo: "Ratsastiehallin parkkipaikka",
    navigationLink: "https://goo.gl/maps/r5t6y7u8i9o0p1a2",
    tracks: [
      { name: "A", length: "3.2 km", difficulty: "Vaikea" },
      { name: "B", length: "2.5 km", difficulty: "Keskivaikea" },
      { name: "C", length: "1.8 km", difficulty: "Helppo" }
    ],
    notes: "Stadin sprintticup, kilpailu 1/5.",
    mapFile: "/maps/ruskeasuo_20250315.jpg",
    resultsLink: "https://navisport.fi/results/rastihaukat/2025031501",
    isPast: true,
    year: 2025,
    courseSetter: "Kaisa Kartanlukija"
  },
  {
    id: "6",
    title: "Paloheinä talvirasti",
    eventType: "itarastit",
    startDateTime: "2025-03-09T11:00:00Z",
    endDateTime: "2025-03-09T14:00:00Z",
    locationName: "Paloheinän ulkoilumaja",
    streetAddress: "Pakilantie 124, Helsinki",
    coordinates: {
      lat: 60.255,
      lon: 24.937
    },
    parkingInfo: "Paloheinän hiihtomajan parkkipaikka",
    navigationLink: "https://goo.gl/maps/9rG8J9fZmLZQ5JNVA",
    tracks: [
      { name: "A", length: "6.0 km", difficulty: "Vaikea" },
      { name: "B", length: "4.5 km", difficulty: "Keskivaikea" },
      { name: "C", length: "3.0 km", difficulty: "Helppo" },
      { name: "D", length: "2.0 km", difficulty: "Erittäin helppo" }
    ],
    notes: "Lumiolosuhteet, osallistujien tulee pysyä merkityillä poluilla tietyillä alueilla.",
    mapFile: "/maps/paloheinä_20250309.jpg",
    resultsLink: "https://navisport.fi/results/rastihaukat/2025030901",
    isPast: true,
    year: 2025,
    courseSetter: "Jukka Lumirasti"
  },
  {
    id: "7",
    title: "Keski-Espoo syysrasti",
    eventType: "itarastit",
    startDateTime: "2024-09-15T10:00:00Z",
    endDateTime: "2024-09-15T13:00:00Z",
    locationName: "Kaupunginkallio",
    streetAddress: "Kaupinkallionkuja 3, Espoo",
    coordinates: {
      lat: 60.205,
      lon: 24.768
    },
    parkingInfo: "Kaupunkikallion koulun parkkipaikka",
    tracks: [
      { name: "A", length: "5.4 km", difficulty: "Vaikea" },
      { name: "B", length: "4.3 km", difficulty: "Keskivaikea" },
      { name: "C", length: "3.1 km", difficulty: "Helppo" }
    ],
    notes: "Syksy 2024 kauden päätösrasti.",
    mapFile: "/maps/keski-espoo_20240915.jpg",
    resultsLink: "https://navisport.fi/results/rastihaukat/2024091501",
    isPast: true,
    year: 2024,
    courseSetter: "Matti Maastosuunnistaja"
  },
  {
    id: "8",
    title: "Espoon keskuspuisto kesärasti",
    eventType: "itarastit",
    startDateTime: "2024-06-02T10:00:00Z",
    endDateTime: "2024-06-02T13:00:00Z",
    locationName: "Espoon keskuspuisto",
    streetAddress: "Kulloonmäentie 50, Espoo",
    coordinates: {
      lat: 60.195,
      lon: 24.687
    },
    parkingInfo: "Laaksolahden urheilupuiston parkkipaikka",
    tracks: [
      { name: "A", length: "5.8 km", difficulty: "Vaikea" },
      { name: "B", length: "4.2 km", difficulty: "Keskivaikea" },
      { name: "C", length: "3.0 km", difficulty: "Helppo" }
    ],
    notes: "Kesäkauden avaus, tervetuloa!",
    mapFile: "/maps/keskuspuisto_20240602.jpg",
    resultsLink: "https://navisport.fi/results/rastihaukat/2024060201",
    isPast: true,
    year: 2024,
    courseSetter: "Eero Maastoekspertti"
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
  const currentYear = new Date().getFullYear();
  return events.filter(event => event.isPast && event.year === currentYear);
};

export const fetchArchiveEvents = async (): Promise<Event[]> => {
  const events = await fetchEvents();
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth() + 1; // 0-indexed, +1 to get 1-12 range
  
  return events.filter(event => {
    // Include events from previous years
    if (event.year && event.year < currentYear) {
      return true;
    }
    
    // Include spring events (before June) from current year if it's past June
    if (event.year === currentYear && currentMonth > 6) {
      const eventMonth = new Date(event.startDateTime).getMonth() + 1;
      if (eventMonth <= 6 && event.isPast) {
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
    if (event.year !== year) return false;
    
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
