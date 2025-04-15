
import { Button } from "@/components/ui/button";
import kuusiIcon from "@/assets/kuusi-icon.svg";
import { useLocalization } from "@/hooks/useLocalization";
import rahaLogoNegTxt from "@/assets/raha-logo-neg-txt.svg";

const Hero = () => {
  const { t } = useLocalization();
  
  return (
    <div className="relative overflow-hidden bg-forest-dark">
      <div className="absolute inset-0 bg-topo-pattern opacity-20"></div>
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="max-w-3xl mx-auto text-center text-white">
          <div className="flex justify-center mb-4">
          <img src={kuusiIcon}  alt="Kuusi Icon" className="h-10 w-10" />
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">{t("heroTitle")}</h1>
          <div className="mb-6">
            <p className="text-lg md:text-xl text-white/90">{t("heroDescription")}</p>
            <img src={rahaLogoNegTxt} alt="Raha logo" className="h-40 mx-auto" />
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-brand-orange hover:bg-brand-orange/90 text-white" size="lg" asChild>
              <a href="#events">{t("showUpcomingEvents")}</a>
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white bg-forest-dark">
              {t("showResults")}
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent"></div>
    </div>
  );
};

export default Hero;
