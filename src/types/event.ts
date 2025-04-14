
export type EventType = "itarastit" | "iterastit" | "sprint";

export interface TrackInfo {
  name: string;
  length: string;
  difficulty: string;
}

export interface Event {
  id: string;
  title: string;
  eventType: EventType;
  startDateTime: string;
  endDateTime: string;
  locationName: string;
  coordinates: {
    lat: number;
    lon: number;
  };
  parkingInfo?: string;
  navigationLink?: string;
  tracks: TrackInfo[];
  notes?: string;
  mapFile?: string;
  resultsLink?: string;
  isPast: boolean;
}
