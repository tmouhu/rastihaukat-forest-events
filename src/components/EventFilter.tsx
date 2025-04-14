
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Filter, X } from "lucide-react";
import { EventType } from "@/types/event";
import { Badge } from "@/components/ui/badge";
import { getEventTypeName } from "@/services/eventService";

interface EventFilterProps {
  onFilterChange: (filter: string, types: EventType[]) => void;
}

const EventFilter = ({ onFilterChange }: EventFilterProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [selectedTypes, setSelectedTypes] = useState<EventType[]>([]);
  
  const eventTypes: EventType[] = ["itarastit", "iterastit", "sprint"];
  
  useEffect(() => {
    // Trigger search when text or filters change
    onFilterChange(searchTerm, selectedTypes);
  }, [searchTerm, selectedTypes, onFilterChange]);
  
  const toggleEventType = (type: EventType) => {
    if (selectedTypes.includes(type)) {
      setSelectedTypes(selectedTypes.filter(t => t !== type));
    } else {
      setSelectedTypes([...selectedTypes, type]);
    }
  };
  
  const clearFilters = () => {
    setSearchTerm("");
    setSelectedTypes([]);
  };
  
  return (
    <div className="mb-6 bg-white p-4 rounded-lg shadow-sm">
      <div className="flex flex-col space-y-3">
        <div className="flex gap-2">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              type="text"
              placeholder="Haku tapahtumista..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-9"
            />
          </div>
          <Button 
            type="button" 
            variant="outline" 
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center"
          >
            <Filter className="h-4 w-4 mr-2" />
            Suodata
          </Button>
        </div>
        
        {showFilters && (
          <div className="pt-3 border-t">
            <h3 className="text-sm font-medium mb-2">Tapahtuman tyyppi</h3>
            <div className="flex flex-wrap gap-2">
              {eventTypes.map((type) => (
                <Badge
                  key={type}
                  variant={selectedTypes.includes(type) ? type as any : "outline"}
                  className={`cursor-pointer ${
                    selectedTypes.includes(type) 
                      ? "text-white" 
                      : "text-foreground hover:bg-muted"
                  }`}
                  onClick={() => toggleEventType(type)}
                >
                  {getEventTypeName(type)}
                </Badge>
              ))}
            </div>
            
            {(selectedTypes.length > 0 || searchTerm) && (
              <Button 
                type="button" 
                variant="ghost" 
                size="sm" 
                onClick={clearFilters}
                className="mt-2 text-muted-foreground"
              >
                <X className="h-4 w-4 mr-1" />
                Tyhjennä suodattimet
              </Button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default EventFilter;
