import Header from "../components/circle-1/Header";
import Navigation from "../components/circle-1/Navigation";
import HeroSection from "../components/circle-1/HeroSection";
import FeatureSection from "../components/circle-1/FeatureSection";
import DesignSection from "../components/circle-1/DesignSection";
import BluetoothSection from "../components/circle-1/BluetoothSection";
import KingVoiceSection from "../components/circle-1/KingVoiceSection";
import SpecificationsSection from "../components/circle-1/Specifications";
import ReviewsSection from "../components/circle-1/ReviewsSection";
import CompareModelsSection from "../components/circle-1/CompareModelsSection";
import SupportSection from "../components/circle-1/SupportSection";
import OtherProductsSection from "../components/circle-1/OtherProductsSection";
import SocialMediaSection from "../components/circle-1/SocialMediaSection";
import FAQSection from "../components/circle-1/FAQSection";
import Footer from "../components/circle-1/Footer";
import LanyardSection from "../components/circle-1/LanyardSection";
import NearestStoreSection from "../components/circle-1/NearestStoreSection";
import SimilarProducts from "../components/circle-1/SimilarProducts";
import CarouselComponent from "../components/circle-1/Carousel";
import PowerFeatures from "../components/circle-1/PowerFeatures";

function CircleOne() {
  return (
    <main className="flex overflow-hidden flex-col justify-end bg-white">
      <Header />
      <Navigation />
      <HeroSection />
      <FeatureSection />
      <DesignSection />
      <LanyardSection />
      <BluetoothSection />
      <KingVoiceSection />
      <PowerFeatures />
      <CarouselComponent />
      <SpecificationsSection />
      <ReviewsSection />
      <CompareModelsSection />
      <NearestStoreSection />
      <SimilarProducts />
      <SupportSection />
      <OtherProductsSection />
      <SocialMediaSection />
      <FAQSection />
      <Footer />
    </main>
  );
}

export default CircleOne;
