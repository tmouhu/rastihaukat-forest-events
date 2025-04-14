import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
const Hero = () => {
  return <div className="relative overflow-hidden bg-forest-dark">
      <div className="absolute inset-0 bg-topo-pattern opacity-20"></div>
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="max-w-3xl mx-auto text-center text-white">
          <div className="flex justify-center mb-4">
            <MapPin className="h-10 w-10 text-brand-orange" />
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Rastihaukat Orienteering
          </h1>
          <p className="text-lg md:text-xl mb-8 text-white/90">
            Join our open training events in the beautiful forests around Helsinki.
            All skill levels welcome - from beginners to experienced orienteers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-brand-orange hover:bg-brand-orange/90 text-white" size="lg" asChild>
              <a href="#events">View Upcoming Events</a>
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white bg-forest-dark">
              Learn About Orienteering
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent"></div>
    </div>;
};
export default Hero;