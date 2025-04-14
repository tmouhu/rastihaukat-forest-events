
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Event } from "@/types/event";
import { fetchSeasonEvents } from "@/services/eventService";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Archive, CalendarDays } from "lucide-react";
import EventCard from "@/components/EventCard";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EventFilter from "@/components/EventFilter";
import { useLocalization } from "@/hooks/useLocalization";

const SeasonArchive = () => {
  const { year, season } = useParams();
  const navigate = useNavigate();
  const { t } = useLocalization();
  const [events, setEvents] = useState<Event[]>([]);
  const [filteredEvents, setFilteredEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTypes, setSelectedTypes] = useState<any[]>([]);

  useEffect(() => {
    const getEvents = async () => {
      try {
        if (year && season) {
          const data = await fetchSeasonEvents(parseInt(year), season.toLowerCase());
          setEvents(data);
          setFilteredEvents(data);
        }
      } catch (error) {
        console.error("Error fetching archive events:", error);
      } finally {
        setLoading(false);
      }
    };

    getEvents();
  }, [year, season]);

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

  const handleFilterChange = (search: string, types: any[]) => {
    setSearchTerm(search);
    setSelectedTypes(types);
  };

  const goBack = () => {
    navigate('/#archive');
  };

  const getSeasonName = (seasonKey: string) => {
    return seasonKey === 'kevät' || seasonKey === 'spring' ? t('spring') : t('fall');
  };

  const seasonTitle = season ? getSeasonName(season.toLowerCase()) : '';

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="py-12 md:py-16 bg-earth/10">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <Button 
                variant="outline" 
                onClick={goBack}
                className="flex items-center"
              >
                <ChevronLeft className="h-4 w-4 mr-1" />
                {t("backToArchive")}
              </Button>
              
              <div className="flex items-center">
                <Archive className="h-6 w-6 mr-3 text-earth" />
                <h2 className="text-2xl md:text-3xl font-bold">
                  {t("seasonTitle", { year, season: seasonTitle })}
                </h2>
              </div>
            </div>
            
            <EventFilter onFilterChange={handleFilterChange} />
            
            {loading ? (
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {[1, 2, 3].map((n) => (
                  <div key={n} className="h-64 rounded-md bg-muted animate-pulse"></div>
                ))}
              </div>
            ) : filteredEvents.length > 0 ? (
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {filteredEvents.map((event) => (
                  <EventCard key={event.id} event={event} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-muted rounded-lg">
                <CalendarDays className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                <h3 className="text-xl font-medium mb-2">{t("noEventsFound")}</h3>
                <p className="text-muted-foreground">
                  {t("noEventsFoundDescription")}
                </p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SeasonArchive;
