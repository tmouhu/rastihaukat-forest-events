
import { useEffect, useState } from "react";
import { Event, EventType } from "@/types/event";
import { fetchUpcomingEvents } from "@/services/eventService";
import EventCard from "./EventCard";
import EventFilter from "./EventFilter";
import { Calendar, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const EventsSection = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [filteredEvents, setFilteredEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [showAll, setShowAll] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTypes, setSelectedTypes] = useState<EventType[]>([]);

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
        setFilteredEvents(updatedEvents);
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

  useEffect(() => {
    let result = [...events];
    
    // Filter by event type if any are selected
    if (selectedTypes.length > 0) {
      result = result.filter(event => selectedTypes.includes(event.eventType));
    }
    
    // Filter by search term
    if (searchTerm) {
      const lowerSearchTerm = searchTerm.toLowerCase();
      result = result.filter(
        event => 
          event.title.toLowerCase().includes(lowerSearchTerm) ||
          event.locationName.toLowerCase().includes(lowerSearchTerm) ||
          event.streetAddress.toLowerCase().includes(lowerSearchTerm) ||
          (event.notes && event.notes.toLowerCase().includes(lowerSearchTerm)) ||
          (event.courseSetter && event.courseSetter.toLowerCase().includes(lowerSearchTerm))
      );
    }
    
    setFilteredEvents(result);
  }, [events, searchTerm, selectedTypes]);

  const handleFilterChange = (search: string, types: EventType[]) => {
    setSearchTerm(search);
    setSelectedTypes(types);
  };

  // Display only first 5 events if not showing all
  const displayEvents = showAll ? filteredEvents : filteredEvents.slice(0, 5);
  const hasMoreEvents = filteredEvents.length > 5;

  return (
    <section id="events" className="py-12 md:py-16 bg-topo-pattern">
      <div className="container mx-auto px-4">
        <div className="flex items-center mb-8">
          <Calendar className="h-6 w-6 mr-3 text-forest" />
          <h2 className="text-2xl md:text-3xl font-bold">Tulevat tapahtumat</h2>
        </div>
        
        <EventFilter onFilterChange={handleFilterChange} />
        
        {loading ? (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((n) => (
              <div key={n} className="h-64 rounded-md bg-muted animate-pulse"></div>
            ))}
          </div>
        ) : filteredEvents.length > 0 ? (
          <>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {displayEvents.map((event) => (
                <EventCard key={event.id} event={event} expanded={event.isActive} />
              ))}
            </div>
            
            {hasMoreEvents && !showAll && (
              <div className="mt-8 text-center">
                <Button 
                  onClick={() => setShowAll(true)}
                  variant="outline"
                  className="border-forest text-forest hover:bg-forest/10"
                >
                  Näytä kaikki tapahtumat
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            )}
            
            {showAll && hasMoreEvents && (
              <div className="mt-8 text-center">
                <Button 
                  onClick={() => setShowAll(false)}
                  variant="outline"
                >
                  Näytä vähemmän
                </Button>
              </div>
            )}
          </>
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
