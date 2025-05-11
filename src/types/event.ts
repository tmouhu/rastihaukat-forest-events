
export type EventType = "itarastit" | "iterastit" | "sprint";

export interface TrackInfo {
  name: string;
  length: string;
  difficulty: string;
}

export interface EventData {
  data: Event[];
  meta: {
    pagination: {
      page: number
      pageSize: number;
      pageCount: number;
      total: number;
    }
  }
}

export interface Event {
  id: string;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  title: string;
  startDateTime: string;
  endDateTime: string;
  locationName: string;
  streetAddress: string;
  parkingInfo?: string;
  navigationUrl?: string;
  notes?: string;
  courseSetter?: string;
  eventUrl?: string;
  resultsUrl?: string;
  type: EventType;
}
