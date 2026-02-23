import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import DoctorsSection from "@/components/DoctorsSection";
import ServicesSection from "@/components/ServicesSection";
import FocusSection from "@/components/FocusSection";
import ReviewsSection from "@/components/ReviewsSection";
import OffersSection from "@/components/OffersSection";
import GallerySection from "@/components/GallerySection";
import TechnologySection from "@/components/TechnologySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <DoctorsSection />
      <ServicesSection />
      <FocusSection />
      <ReviewsSection />
      <OffersSection />
      <GallerySection />
      <TechnologySection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
