import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const SmileWellnessPlan = lazy(() => import("./pages/SmileWellnessPlan"));
const NewPatientSpecial = lazy(() => import("./pages/NewPatientSpecial"));
const PaymentPlans = lazy(() => import("./pages/PaymentPlans"));
const OurServices = lazy(() => import("./pages/OurServices"));
const Invisalign = lazy(() => import("./pages/Invisalign"));
const TeethWhitening = lazy(() => import("./pages/TeethWhitening"));
const DentalImplants = lazy(() => import("./pages/DentalImplants"));
const PorcelainVeneersAndCrowns = lazy(() => import("./pages/PorcelainVeneersAndCrowns"));
const GeneralDentistry = lazy(() => import("./pages/GeneralDentistry"));
const PreventativeDentistry = lazy(() => import("./pages/PreventativeDentistry"));
const CosmeticBonding = lazy(() => import("./pages/CosmeticBonding"));
const DentalEmergencies = lazy(() => import("./pages/DentalEmergencies"));
const DigitalWellnessScan = lazy(() => import("./pages/DigitalWellnessScan"));
const ForPatients = lazy(() => import("./pages/ForPatients"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const ContactUs = lazy(() => import("./pages/ContactUs"));

const queryClient = new QueryClient();

const Loading = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/smile-wellness-plan" element={<SmileWellnessPlan />} />
            <Route path="/new-patient-special" element={<NewPatientSpecial />} />
            <Route path="/payment-plans" element={<PaymentPlans />} />
            <Route path="/financing" element={<PaymentPlans />} />
            <Route path="/our-services" element={<OurServices />} />
            <Route path="/invisalign" element={<Invisalign />} />
            <Route path="/teeth-whitening" element={<TeethWhitening />} />
            <Route path="/dental-implants" element={<DentalImplants />} />
            <Route path="/porcelain-veneers-and-crowns" element={<PorcelainVeneersAndCrowns />} />
            <Route path="/general-dentistry" element={<GeneralDentistry />} />
            <Route path="/preventative-dentistry" element={<PreventativeDentistry />} />
            <Route path="/cosmetic-bonding" element={<CosmeticBonding />} />
            <Route path="/dental-emergencies" element={<DentalEmergencies />} />
            <Route path="/3d-digital-wellness-scan" element={<DigitalWellnessScan />} />
            <Route path="/for-patients" element={<ForPatients />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
