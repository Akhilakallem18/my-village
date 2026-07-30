import Hero from "../../components/Hero/Hero";
import AboutSection from "../../components/AboutSection/AboutSection";
import StatsSection from "../../components/StatsSection/StatsSection";
import PlacesSection from "../../components/PlacesSection/PlacesSection";
import GallerySection from "../../components/GallerySection/GallerySection";
import Footer from "../../components/Footer/Footer";
import VillageInfo from "../../components/VillageInfo/VillageInfo";
import EventsSection from "../../components/EventsSection/EventsSection";

function Home() {
  return (
    <>
      <Hero />
      <VillageInfo />
      <AboutSection />
      <StatsSection />
      <PlacesSection />
      <GallerySection />
      <EventsSection />
      <Footer />
    </>
  );
}

export default Home;