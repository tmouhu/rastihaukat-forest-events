
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
        
        // Check if any events are currently active
        const now = new Date();
        const updatedEvents = data.map(event => {
          const startTime = new Date(event.startDateTime);
          const endTime = new Date(event.endDateTime);
          const isActive = now >= startTime && now <= endTime;
          return { ...event, isActive };
        });
        
        setEvents(updatedEvents);
      } catch (error) {
        console.error("Error fetching events:", error);
      } finally {
        setLoading(false);
      }
    };

    getEvents();
    
    // Set up interval to check for active events every minute
    const intervalId = setInterval(() => {
      setEvents(prevEvents => {
        const now = new Date();
        return prevEvents.map(event => {
          const startTime = new Date(event.startDateTime);
          const endTime = new Date(event.endDateTime);
          const isActive = now >= startTime && now <= endTime;
          return { ...event, isActive };
        });
      });
    }, 60000); // Check every minute
    
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section id="events" className="py-12 md:py-16 bg-topo-pattern">
      <div className="container mx-auto px-4">
        <div className="flex items-center mb-8">
          <Calendar className="h-6 w-6 mr-3 text-forest" />
          <h2 className="text-2xl md:text-3xl font-bold">Tulevat tapahtumat</h2>
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
            <h3 className="text-xl font-medium mb-2">Ei tulevia tapahtumia</h3>
            <p className="text-muted-foreground">
              Tarkista myöhemmin uudet suunnistustapahtumat.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default EventsSection;
