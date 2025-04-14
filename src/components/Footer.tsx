
import { MapPin, Mail, ExternalLink, Instagram, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-forest-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <MapPin className="h-6 w-6 mr-2 text-brand-orange" />
              <h3 className="text-xl font-bold">Rastihaukat</h3>
            </div>
            <p className="text-white/80 mb-4">
              Orienteering club organizing weekly training events in the forests around Helsinki.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="hover:text-brand-orange text-white/80" asChild>
                <a href="#" aria-label="Facebook">
                  <Facebook className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-brand-orange text-white/80" asChild>
                <a href="#" aria-label="Instagram">
                  <Instagram className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#events" className="text-white/80 hover:text-white hover:underline">
                  Upcoming Events
                </a>
              </li>
              <li>
                <a href="#past-events" className="text-white/80 hover:text-white hover:underline">
                  Past Events & Results
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-white hover:underline">
                  About Orienteering
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-white hover:underline">
                  Membership
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <Mail className="h-5 w-5 mr-3 text-white/70 mt-0.5" />
                <a href="mailto:info@rastihaukat.fi" className="text-white/80 hover:text-white hover:underline">
                  info@rastihaukat.fi
                </a>
              </div>
              <div>
                <Button className="bg-brand-orange hover:bg-brand-orange/90 text-white" asChild>
                  <a href="#" className="flex items-center">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Official Website
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-4 border-t border-white/10 text-center text-white/60 text-sm">
          <p>© {new Date().getFullYear()} Rastihaukat Orienteering Club. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
