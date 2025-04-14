
import { FileText, HelpCircle, Map, Compass, Users, CreditCard } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const InstructionsSection = () => {
  return (
    <section id="instructions" className="py-12 md:py-16 bg-gradient-to-b from-white to-forest/5">
      <div className="container mx-auto px-4">
        <div className="flex items-center mb-8">
          <FileText className="h-6 w-6 mr-3 text-forest-dark" />
          <h2 className="text-2xl md:text-3xl font-bold">Ohjeet osallistujille</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="border-forest/20">
            <CardHeader>
              <CardTitle className="flex items-center">
                <HelpCircle className="h-5 w-5 mr-2 text-forest" />
                Mitä on Itärastit?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Itärastit on Helsingin suunnalla toimiva kuntosuunnistustapahtuma, joka järjestetään viikoittain maalis-lokakuussa. Tapahtuma on avoin kaikille, aloittelijoista kokeneisiin suunnistajiin. Eri tasoiset radat mahdollistavat sopivan haasteen kaikille.</p>
            </CardContent>
          </Card>
          
          <Card className="border-forest/20">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Map className="h-5 w-5 mr-2 text-forest" />
                Radat ja vaikeustasot
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Itärasteilla on tarjolla yleensä 3-4 eri rataa erilaisilla vaikeustasoilla:</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li><span className="font-medium">A-rata:</span> Pisin ja vaikein (n. 5-7 km)</li>
                <li><span className="font-medium">B-rata:</span> Keskipitkä ja keskivaikea (n. 4-5 km)</li>
                <li><span className="font-medium">C-rata:</span> Helpohko rata (n. 3-4 km)</li>
                <li><span className="font-medium">D-rata:</span> Helppo ja lyhyt, aloittelijoille (n. 2-3 km)</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="border-forest/20">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Compass className="h-5 w-5 mr-2 text-forest" />
                Osallistuminen
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Itärasteille voit tulla ilman ennakkoilmoittautumista, mutta joihinkin tapahtumiin suositellaan ilmoittautumista Rastilippu-palvelussa. Lähtö on yleensä vapaa tietyn aikavälin sisällä (tyypillisesti klo 16:00-18:30).</p>
              <p className="mt-2">Ota mukaan:</p>
              <ul className="list-disc list-inside mt-1 space-y-1">
                <li>Kompassi (jos on)</li>
                <li>Sään mukainen varustus</li>
                <li>Emit-kortti (voit myös vuokrata paikan päältä)</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="border-forest/20">
            <CardHeader>
              <CardTitle className="flex items-center">
                <CreditCard className="h-5 w-5 mr-2 text-forest" />
                Hinnat
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Osallistumismaksut:</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Aikuiset: 10€</li>
                <li>Alle 16v: 5€</li>
                <li>Perhelippu: 20€</li>
                <li>Emit-kortin vuokra: 4€</li>
              </ul>
              <p className="mt-2">Maksu käteisellä, kortilla tai MobilePay:llä tapahtumapaikalla.</p>
            </CardContent>
          </Card>
          
          <Card className="border-forest/20 md:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="h-5 w-5 mr-2 text-forest" />
                Aloittelijoille
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Jos olet aloittelija, suosittelemme valitsemaan C- tai D-radan. Tapahtumapaikalla järjestetään lyhyt opastus aloittelijoille, kunhan pyydät sitä järjestäjiltä. Voit myös tulla seuraamaan ensin ja osallistua myöhemmin.</p>
              <p className="mt-2">Hyviä vinkkejä aloittelijoille:</p>
              <ul className="list-disc list-inside mt-1 space-y-1">
                <li>Pidä kartta aina suunnattuna maaston mukaan</li>
                <li>Seuraa isompia maastonmuotoja (polut, tiet, ojat, mäet)</li>
                <li>Älä pelkää kysyä neuvoa järjestäjiltä tai muilta suunnistajilta</li>
                <li>Kompassi helpottaa suunnistamista, mutta et välttämättä tarvitse sitä helpommilla radoilla</li>
              </ul>
              <p className="mt-3 font-medium">Tervetuloa mukaan!</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default InstructionsSection;
