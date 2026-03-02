import { useState, lazy, Suspense } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";

// ── All below-fold sections are lazy-loaded ────────────────────────────────
// This keeps the initial JS parse budget tiny — only Hero + Navbar are eager.
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

// Modal is only needed on interaction — lazy load it too
const SmartTriageModal   = lazy(() => import("@/components/SmartTriageModal"));

// Lightweight section skeleton shown while lazy chunks download
const SectionShell = () => (
  <div className="w-full py-24 flex items-center justify-center">
    <div className="w-6 h-6 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
  </div>
);

const Index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen">
      {/* ── Above-fold: eager ───────────────────────────────────── */}
      <Navbar onOpenModal={() => setIsModalOpen(true)} />
      <HeroSection onOpenModal={() => setIsModalOpen(true)} />

      {/* ── Below-fold: lazy via Suspense ───────────────────────── */}
      <Suspense fallback={<SectionShell />}>
        <ExperienceSection />
      </Suspense>
      <Suspense fallback={<SectionShell />}>
        <AboutSection />
      </Suspense>
      <Suspense fallback={<SectionShell />}>
        <DoctorsSection />
      </Suspense>
      <Suspense fallback={<SectionShell />}>
        <ServicesSection />
      </Suspense>
      <Suspense fallback={<SectionShell />}>
        <FocusSection />
      </Suspense>
      <Suspense fallback={<SectionShell />}>
        <ReviewsSection />
      </Suspense>
      <Suspense fallback={<SectionShell />}>
        <OffersSection />
      </Suspense>
      <Suspense fallback={<SectionShell />}>
        <GallerySection />
      </Suspense>
      <Suspense fallback={<SectionShell />}>
        <TechnologySection />
      </Suspense>
      <Suspense fallback={<SectionShell />}>
        <ContactSection />
      </Suspense>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>

      {/* ── Modal: only rendered after user interaction ─────────── */}
      {isModalOpen && (
        <Suspense fallback={null}>
          <SmartTriageModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          />
        </Suspense>
      )}
    </div>
  );
};

export default Index;
