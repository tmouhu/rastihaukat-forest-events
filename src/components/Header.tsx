
import { useState } from "react";
import { Menu, X, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocalization } from "@/hooks/useLocalization";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLocalization();
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-forest/20">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <div className="mr-2">
            <MapPin className="h-6 w-6 text-forest-dark" />
          </div>
          <h1 className="text-xl md:text-2xl font-bold text-forest-dark">{t("appName")}</h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center">
          <div className="flex space-x-6 mr-4">
            <a href="#events" className="text-foreground hover:text-forest-dark font-medium">
              {t("upcomingEvents")}
            </a>
            <a href="#past-events" className="text-foreground hover:text-forest-dark font-medium">
              {t("pastEvents")}
            </a>
            <a href="#archive" className="text-foreground hover:text-forest-dark font-medium">
              {t("archive")}
            </a>
            <a href="#instructions" className="text-foreground hover:text-forest-dark font-medium">
              {t("instructions")}
            </a>
          </div>
          <LanguageSwitcher />
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <LanguageSwitcher />
          <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Menu" className="ml-2">
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
              {t("upcomingEvents")}
            </a>
            <a 
              href="#past-events" 
              className="py-2 text-foreground hover:text-forest-dark font-medium" 
              onClick={() => setIsMenuOpen(false)}
            >
              {t("pastEvents")}
            </a>
            <a 
              href="#archive" 
              className="py-2 text-foreground hover:text-forest-dark font-medium" 
              onClick={() => setIsMenuOpen(false)}
            >
              {t("archive")}
            </a>
            <a 
              href="#instructions" 
              className="py-2 text-foreground hover:text-forest-dark font-medium" 
              onClick={() => setIsMenuOpen(false)}
            >
              {t("instructions")}
            </a>
            <Button 
              className="bg-forest hover:bg-forest-dark text-white font-semibold w-full" 
              onClick={() => setIsMenuOpen(false)}
            >
              {t("learnToOrienteer")}
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
