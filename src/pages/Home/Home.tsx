import Hero from "../../components/Hero/Hero";
import AboutSection from "../../components/AboutSection/AboutSection";
import StatsSection from "../../components/StatsSection/StatsSection";
import PlacesSection from "../../components/PlacesSection/PlacesSection";
import GallerySection from "../../components/GallerySection/GallerySection";
import Footer from "../../components/Footer/Footer";

function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <StatsSection />
      <PlacesSection />
      <GallerySection />
      <Footer />
    </>
  );
}

export default Home;