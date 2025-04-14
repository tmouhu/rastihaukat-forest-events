
import { useEffect, useState } from "react";
import { Event } from "@/types/event";
import { fetchArchiveEvents } from "@/services/eventService";
import { Archive, Calendar, ChevronRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

interface SeasonArchive {
  year: number;
  season: string;
  eventCount: number;
}

const ArchiveSection = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [seasons, setSeasons] = useState<SeasonArchive[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getEvents = async () => {
      try {
        const data = await fetchArchiveEvents();
        setEvents(data);
        
        // Organize events by season
        const seasonsMap = new Map<string, { year: number, season: string, eventCount: number }>();
        
        data.forEach(event => {
          if (event.year) {
            const isSpringSeason = new Date(event.startDateTime).getMonth() < 6; // Before July
            const seasonName = isSpringSeason ? "Kevät" : "Syksy";
            const seasonKey = `${event.year}-${seasonName}`;
            
            if (seasonsMap.has(seasonKey)) {
              const current = seasonsMap.get(seasonKey)!;
              seasonsMap.set(seasonKey, {
                ...current,
                eventCount: current.eventCount + 1
              });
            } else {
              seasonsMap.set(seasonKey, {
                year: event.year,
                season: seasonName,
                eventCount: 1
              });
            }
          }
        });
        
        // Convert map to array and sort by year (newest first) and season
        const seasonsArray = Array.from(seasonsMap.values())
          .sort((a, b) => {
            if (a.year !== b.year) return b.year - a.year;
            return a.season === "Kevät" ? -1 : 1;
          });
        
        setSeasons(seasonsArray);
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
          <h2 className="text-2xl md:text-3xl font-bold">Tapahtumaarkisto</h2>
        </div>
        
        {loading ? (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[1, 2, 3, 4].map((n) => (
              <div key={n} className="h-32 rounded-md bg-muted animate-pulse"></div>
            ))}
          </div>
        ) : seasons.length > 0 ? (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {seasons.map((season, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardHeader className="p-4 pb-2">
                  <div className="flex justify-between items-center">
                    <Badge variant="earth" className="text-white">
                      {season.year}
                    </Badge>
                    <Badge variant="outline" className="text-sm">
                      {season.eventCount} tapahtumaa
                    </Badge>
                  </div>
                  <CardTitle className="text-lg mt-2">{season.season}</CardTitle>
                </CardHeader>
                <CardContent className="p-4 pt-2">
                  <Button 
                    variant="outline" 
                    className="w-full mt-2 text-earth border-earth hover:bg-earth/10"
                    asChild
                  >
                    <Link to={`/archive/${season.year}/${season.season.toLowerCase()}`}>
                      <Calendar className="h-4 w-4 mr-2" />
                      Katso kausi
                      <ChevronRight className="ml-auto h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
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
