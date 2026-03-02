import { useState, lazy, Suspense } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import { ErrorBoundary } from "@/components/ErrorBoundary";

// ── Below-fold sections: lazy-loaded as a group ────────────────────────────
// Grouped into fewer Suspense boundaries to avoid cascade failures
const ExperienceSection  = lazy(() => import("@/components/ExperienceSection"));
const AboutSection       = lazy(() => import("@/components/AboutSection"));
const DoctorsSection     = lazy(() => import("@/components/DoctorsSection"));
const ServicesSection    = lazy(() => import("@/components/ServicesSection"));
const FocusSection       = lazy(() => import("@/components/FocusSection"));
const ReviewsSection     = lazy(() => import("@/components/ReviewsSection"));
const OffersSection      = lazy(() => import("@/components/OffersSection"));
const GallerySection     = lazy(() => import("@/components/GallerySection"));
const TechnologySection  = lazy(() => import("@/components/TechnologySection"));
const ContactSection     = lazy(() => import("@/components/ContactSection"));
const Footer             = lazy(() => import("@/components/Footer"));

// Modal: only rendered after user interaction
const SmartTriageModal   = lazy(() => import("@/components/SmartTriageModal"));

// Lightweight spinner shown while lazy chunks download
const PageLoader = () => (
  <div className="w-full py-32 flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
  </div>
);

const Index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen">
      {/* ── Above-fold: always eager ───────────────────────────── */}
      <Navbar onOpenModal={openModal} />
      <HeroSection onOpenModal={openModal} />

      {/* ── Below-fold: single Suspense boundary ──────────────── */}
      <ErrorBoundary>
        <Suspense fallback={<PageLoader />}>
          <ExperienceSection />
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
        </Suspense>
      </ErrorBoundary>

      {/* ── Modal: deferred until user interaction ─────────────── */}
      {isModalOpen && (
        <Suspense fallback={null}>
          <SmartTriageModal isOpen={isModalOpen} onClose={closeModal} />
        </Suspense>
      )}
    </div>
  );
};

export default Index;
