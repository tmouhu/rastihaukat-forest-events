
import { useEffect, useState } from "react";
import { Event } from "@/types/event";
import { fetchUpcomingEvents } from "@/services/eventService";
import EventCard from "./EventCard";
import { Calendar } from "lucide-react";

const EventsSection = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getEvents = async () => {
      try {
        const data = await fetchUpcomingEvents();
        setEvents(data);
      } catch (error) {
        console.error("Error fetching events:", error);
      } finally {
        setLoading(false);
      }
    };

    getEvents();
  }, []);

  return (
    <section id="events" className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="flex items-center mb-8">
          <Calendar className="h-6 w-6 mr-3 text-forest" />
          <h2 className="text-2xl md:text-3xl font-bold">Upcoming Events</h2>
        </div>
        
        {loading ? (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((n) => (
              <div key={n} className="h-64 rounded-md bg-muted animate-pulse"></div>
            ))}
          </div>
        ) : events.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {events.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-muted/50 rounded-lg">
            <h3 className="text-xl font-medium mb-2">No upcoming events</h3>
            <p className="text-muted-foreground">
              Check back soon for new orienteering events.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default EventsSection;
