
import { useState } from "react";
import { Menu, X, MapPin, Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-forest/20">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <div className="mr-2">
            <MapPin className="h-6 w-6 text-forest-dark" />
          </div>
          <h1 className="text-xl md:text-2xl font-bold text-forest-dark">Rastihaukat</h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 items-center">
          <a href="#events" className="text-foreground hover:text-forest-dark font-medium">
            Upcoming Events
          </a>
          <a href="#past-events" className="text-foreground hover:text-forest-dark font-medium">
            Past Events
          </a>
          <Button className="bg-forest hover:bg-forest-dark text-white">
            Join Next Event
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Menu">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-forest/20 animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a 
              href="#events" 
              className="py-2 text-foreground hover:text-forest-dark font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Upcoming Events
            </a>
            <a 
              href="#past-events" 
              className="py-2 text-foreground hover:text-forest-dark font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Past Events
            </a>
            <Button className="bg-forest hover:bg-forest-dark text-white w-full">
              Join Next Event
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
