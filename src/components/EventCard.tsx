
import { useState } from "react";
import { Event } from "@/types/event";
import { getEventTypeName } from "@/services/eventService";
import { Calendar, Clock, MapPin, ChevronDown, ChevronUp, Navigation, Car, FileText, Medal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";

interface EventCardProps {
  event: Event;
}

const EventCard = ({ event }: EventCardProps) => {
  const [expanded, setExpanded] = useState(false);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return format(date, "E, d MMMM yyyy");
  };

  const formatTime = (dateString: string) => {
    const date = new Date(dateString);
    return format(date, "HH:mm");
  };

  return (
    <Card className={`w-full overflow-hidden transition-all duration-300 ${expanded ? 'shadow-md' : 'shadow-sm'}`}>
      <CardHeader className="p-4 pb-0">
        <div className="flex justify-between items-start">
          <Badge className={`event-type-badge ${event.eventType}`}>
            {getEventTypeName(event.eventType)}
          </Badge>
          
          {event.isPast && event.resultsLink && (
            <Badge variant="outline" className="border-brand-red text-brand-red">
              Results Available
            </Badge>
          )}
        </div>
        <CardTitle className="text-lg sm:text-xl mt-2">{event.title}</CardTitle>
      </CardHeader>
      <CardContent className="p-4">
        <div className="flex flex-col space-y-3">
          <div className="flex items-start">
            <Calendar className="h-5 w-5 mr-3 text-muted-foreground shrink-0 mt-0.5" />
            <div>
              <p className="font-medium">{formatDate(event.startDateTime)}</p>
              {formatDate(event.startDateTime) !== formatDate(event.endDateTime) && (
                <p className="text-sm text-muted-foreground">
                  to {formatDate(event.endDateTime)}
                </p>
              )}
            </div>
          </div>
          
          <div className="flex items-start">
            <Clock className="h-5 w-5 mr-3 text-muted-foreground shrink-0 mt-0.5" />
            <div>
              <p className="font-medium">
                {formatTime(event.startDateTime)} - {formatTime(event.endDateTime)}
              </p>
            </div>
          </div>
          
          <div className="flex items-start">
            <MapPin className="h-5 w-5 mr-3 text-muted-foreground shrink-0 mt-0.5" />
            <div>
              <p className="font-medium">{event.locationName}</p>
              <p className="text-sm text-muted-foreground">
                {event.coordinates.lat.toFixed(3)}, {event.coordinates.lon.toFixed(3)}
              </p>
            </div>
          </div>
          
          {event.navigationLink && (
            <div className="ml-8">
              <Button variant="outline" size="sm" className="text-brand-blue" asChild>
                <a href={event.navigationLink} target="_blank" rel="noopener noreferrer">
                  <Navigation className="h-4 w-4 mr-2" />
                  Navigate
                </a>
              </Button>
            </div>
          )}
        </div>
        
        {expanded && (
          <div className="mt-4 animate-fade-in">
            <Separator className="mb-4" />
            
            {event.parkingInfo && (
              <div className="mb-4">
                <div className="flex items-start">
                  <Car className="h-5 w-5 mr-3 text-muted-foreground shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Parking</p>
                    <p className="text-sm">{event.parkingInfo}</p>
                  </div>
                </div>
              </div>
            )}
            
            {event.tracks.length > 0 && (
              <div className="mb-4">
                <h4 className="font-medium mb-2">Tracks</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {event.tracks.map((track, index) => (
                    <div key={index} className="flex items-center bg-muted rounded-md p-2">
                      <div className="w-6 h-6 rounded-full bg-forest flex items-center justify-center text-white font-medium mr-2">
                        {track.name}
                      </div>
                      <div>
                        <p className="text-sm font-medium">{track.length}</p>
                        <p className="text-xs text-muted-foreground">{track.difficulty}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {event.notes && (
              <div className="mb-4">
                <div className="flex items-start">
                  <FileText className="h-5 w-5 mr-3 text-muted-foreground shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Notes</p>
                    <p className="text-sm">{event.notes}</p>
                  </div>
                </div>
              </div>
            )}
            
            {event.isPast && event.resultsLink && (
              <div className="mb-4">
                <div className="flex items-start">
                  <Medal className="h-5 w-5 mr-3 text-muted-foreground shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Results</p>
                    <Button variant="link" className="h-auto p-0 text-brand-blue" asChild>
                      <a href={event.resultsLink} target="_blank" rel="noopener noreferrer">
                        View Results
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            )}
            
            {event.mapFile && (
              <div className="rounded-md overflow-hidden border mt-4">
                <img 
                  src="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Event map preview" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-2 bg-muted flex justify-end">
                  <Button variant="outline" size="sm">
                    <FileText className="h-4 w-4 mr-2" />
                    View Full Map
                  </Button>
                </div>
              </div>
            )}
          </div>
        )}
      </CardContent>
      <CardFooter className="p-2 bg-muted/50 flex justify-center">
        <Button 
          variant="ghost" 
          size="sm"
          onClick={() => setExpanded(!expanded)}
          className="w-full text-muted-foreground hover:text-foreground"
        >
          {expanded ? (
            <>
              <ChevronUp className="h-4 w-4 mr-2" />
              Show Less
            </>
          ) : (
            <>
              <ChevronDown className="h-4 w-4 mr-2" />
              Show More
            </>
          )}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default EventCard;
