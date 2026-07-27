import Hero from "../../components/Hero/Hero";
import AboutSection from "../../components/AboutSection/AboutSection";
import StatsSection from "../../components/StatsSection/StatsSection";
import PlacesSection from "../../components/PlacesSection/PlacesSection";

function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <StatsSection />
      <PlacesSection />
    </>
  );
}

export default Home;