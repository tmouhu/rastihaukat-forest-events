
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import EventsSection from "@/components/EventsSection";
import PastEventsSection from "@/components/PastEventsSection";
import ArchiveSection from "@/components/ArchiveSection";
import InstructionsSection from "@/components/InstructionsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <EventsSection />
        <PastEventsSection />
        <ArchiveSection />
        <InstructionsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
