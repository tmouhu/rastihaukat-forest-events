
import { useEffect, useState } from "react";
import { Event } from "@/types/event";
import { fetchArchiveEvents } from "@/services/eventService";
import EventCard from "./EventCard";
import { Archive } from "lucide-react";

const ArchiveSection = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getEvents = async () => {
      try {
        const data = await fetchArchiveEvents();
        setEvents(data);
      } catch (error) {
        console.error("Error fetching archive events:", error);
      } finally {
        setLoading(false);
      }
    };

    getEvents();
  }, []);

  return (
    <section id="archive" className="py-12 md:py-16 bg-earth/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center mb-8">
          <Archive className="h-6 w-6 mr-3 text-earth" />
          <h2 className="text-2xl md:text-3xl font-bold">Arkisto</h2>
        </div>
        
        {loading ? (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2].map((n) => (
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
          <div className="text-center py-12 bg-muted rounded-lg">
            <h3 className="text-xl font-medium mb-2">Ei arkistoituja tapahtumia</h3>
            <p className="text-muted-foreground">
              Arkistoidut tapahtumat näkyvät täällä.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ArchiveSection;
