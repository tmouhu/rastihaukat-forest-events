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
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Itärastit</h1>
          <p className="text-lg md:text-xl mb-8 text-white/90">Tule suunnistamaan keskeisiin paikkoihin julkisilla tai fillarilla. Hae haasteita Helsingin ja lähiympäristön kauniista metsistä. Itärasteille kaikki ovat tervetulleita kaikki aloittelijasta jo kokeneempiin suunnistajiin.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-brand-orange hover:bg-brand-orange/90 text-white" size="lg" asChild>
              <a href="#events">Näytä tuleva tapahtumat</a>
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white bg-forest-dark">Näytä tulokset</Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent"></div>
    </div>;
};
export default Hero;