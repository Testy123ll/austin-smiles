import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";
import { X, Sparkles, ShieldCheck, Zap, ChevronRight, Loader2 } from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────
type Step =
  | "triage"          // Step 1: What are you looking to achieve?
  | "cosmetic-path"   // Step 2: VIP cosmetic options
  | "lead-capture"    // Step 3: Form
  | "general-path"    // Non-cosmetic routing
  | "emergency-path"  // Emergency routing
  | "success";

interface SmartTriageModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// ─── Animation variants ───────────────────────────────────────────────────────
const fadeSlide = {
  initial: { opacity: 0, y: 22 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } },
  exit:    { opacity: 0, y: -16, transition: { duration: 0.25 } },
};

// ─── Helper: Step indicator ───────────────────────────────────────────────────
function StepDot({ active, done }: { active: boolean; done: boolean }) {
  return (
    <div
      className={`w-2 h-2 rounded-full transition-all duration-400 ${
        done
          ? "bg-teal-400 scale-100"
          : active
          ? "bg-teal-400 scale-125 ring-2 ring-teal-400/30"
          : "bg-white/20"
      }`}
    />
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function SmartTriageModal({ isOpen, onClose }: SmartTriageModalProps) {
  const [step, setStep]                   = useState<Step>("triage");
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting]   = useState(false);

  // Reset on close
  useEffect(() => {
    if (!isOpen) {
      const timer = setTimeout(() => {
        setStep("triage");
        setSelectedService(null);
        setIsSubmitting(false);
      }, 350);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // Escape key
  useEffect(() => {
    const handler = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [onClose]);

  const stepNumber = step === "triage" ? 1 : step === "cosmetic-path" ? 2 : step === "lead-capture" ? 3 : 3;

  async function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 1600));
    setIsSubmitting(false);
    setStep("success");
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-[#040d14]/80 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Panel */}
          <motion.div
            key="panel"
            initial={{ opacity: 0, scale: 0.96, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } }}
            exit={{ opacity: 0, scale: 0.97, y: 20, transition: { duration: 0.25 } }}
            className="fixed inset-0 z-[101] flex items-center justify-center p-4 pointer-events-none"
          >
            <div
              className="relative w-full max-w-lg pointer-events-auto rounded-none bg-[#0d1f2d] border border-teal-700/30 shadow-[0_30px_80px_rgba(0,0,0,0.7)] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Top accent bar */}
              <div className="h-0.5 w-full bg-gradient-to-r from-teal-500 via-teal-300 to-teal-600" />

              {/* Header */}
              <div className="flex items-center justify-between px-7 pt-6 pb-4 border-b border-white/8">
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-full bg-teal-500/20 flex items-center justify-center">
                    <Sparkles className="w-3.5 h-3.5 text-teal-300" />
                  </div>
                  <div>
                    <p className="text-[11px] font-body font-medium tracking-[0.2em] uppercase text-teal-400">
                      Concierge Booking
                    </p>
                    <p className="text-white font-heading text-sm font-semibold leading-tight">
                      Austin Elite Smiles
                    </p>
                  </div>
                </div>

                {/* Step dots */}
                <div className="flex items-center gap-2 mr-4">
                  <StepDot active={stepNumber === 1} done={stepNumber > 1} />
                  <StepDot active={stepNumber === 2} done={stepNumber > 2} />
                  <StepDot active={stepNumber === 3} done={step === "success"} />
                </div>

                <button
                  onClick={onClose}
                  aria-label="Close modal"
                  className="w-8 h-8 flex items-center justify-center rounded-full text-white/40 hover:text-white hover:bg-white/10 transition-all duration-200"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* ─────────────────── Step Content ─────────────────── */}
              <div className="min-h-[380px] px-7 py-8">
                <AnimatePresence mode="wait">

                  {/* ── STEP 1: Triage ── */}
                  {step === "triage" && (
                    <motion.div key="triage" {...fadeSlide}>
                      <h2 className="font-heading text-2xl font-semibold text-white mb-2">
                        What are you looking to achieve today?
                      </h2>
                      <p className="text-white/50 font-body text-sm mb-8">
                        Choose the option that best describes your visit. We'll guide you to the right experience.
                      </p>

                      <div className="flex flex-col gap-4">
                        {/* Cosmetic */}
                        <TriageCard
                          id="triage-cosmetic"
                          icon={<Sparkles className="w-5 h-5 text-teal-300" />}
                          title="Cosmetic & Smile Makeover"
                          subtitle="Veneers, Invisalign®, Whitening & transformations"
                          accent="teal"
                          onClick={() => setStep("cosmetic-path")}
                        />
                        {/* General */}
                        <TriageCard
                          id="triage-general"
                          icon={<ShieldCheck className="w-5 h-5 text-emerald-300" />}
                          title="General Hygiene & Checkup"
                          subtitle="Routine cleaning, exam & preventive care"
                          accent="emerald"
                          onClick={() => setStep("general-path")}
                        />
                        {/* Emergency */}
                        <TriageCard
                          id="triage-emergency"
                          icon={<Zap className="w-5 h-5 text-amber-300" />}
                          title="Dental Emergency"
                          subtitle="Urgent pain, broken tooth or swelling — we prioritize you"
                          accent="amber"
                          onClick={() => setStep("emergency-path")}
                        />
                      </div>
                    </motion.div>
                  )}

                  {/* ── STEP 2: Cosmetic VIP Path ── */}
                  {step === "cosmetic-path" && (
                    <motion.div key="cosmetic" {...fadeSlide}>
                      <div className="inline-flex items-center gap-2 mb-5 px-3 py-1 rounded-full bg-teal-500/15 border border-teal-500/25">
                        <Sparkles className="w-3.5 h-3.5 text-teal-300" />
                        <span className="text-teal-300 text-xs font-body font-semibold tracking-wide uppercase">
                          VIP Cosmetic Path
                        </span>
                      </div>

                      <h2 className="font-heading text-2xl font-semibold text-white mb-2">
                        Let's design your{" "}
                        <span className="italic font-light text-teal-200">dream smile.</span>
                      </h2>
                      <p className="text-white/50 font-body text-sm mb-8">
                        Select your primary area of interest so we can tailor your consultation.
                      </p>

                      <div className="flex flex-col gap-3">
                        {[
                          { id: "svc-veneers", label: "Veneers", desc: "Porcelain perfection that transforms your smile" },
                          { id: "svc-invisalign", label: "Invisalign®", desc: "Straighten discreetly with clear aligners" },
                          { id: "svc-whitening", label: "Teeth Whitening", desc: "Professional-grade brilliance in one visit" },
                        ].map((svc) => (
                          <button
                            key={svc.id}
                            id={svc.id}
                            onClick={() => {
                              setSelectedService(svc.label);
                              setStep("lead-capture");
                            }}
                            className={`group w-full text-left flex items-center justify-between px-5 py-4 border transition-all duration-250 rounded-none
                              ${selectedService === svc.label
                                ? "border-teal-400 bg-teal-500/15"
                                : "border-white/10 hover:border-teal-400/60 hover:bg-white/5"
                              }`}
                          >
                            <div>
                              <p className="text-white font-body font-semibold text-sm">{svc.label}</p>
                              <p className="text-white/45 font-body text-xs mt-0.5">{svc.desc}</p>
                            </div>
                            <ChevronRight className="w-4 h-4 text-teal-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                          </button>
                        ))}
                      </div>

                      <button
                        onClick={() => setStep("triage")}
                        className="mt-6 text-white/35 hover:text-white/70 text-xs font-body transition-colors duration-200 flex items-center gap-1"
                      >
                        ← Back
                      </button>
                    </motion.div>
                  )}

                  {/* ── General Path ── */}
                  {step === "general-path" && (
                    <motion.div key="general" {...fadeSlide}>
                      <div className="inline-flex items-center gap-2 mb-5 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/25">
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-300" />
                        <span className="text-emerald-300 text-xs font-body font-semibold tracking-wide uppercase">
                          General & Preventive
                        </span>
                      </div>
                      <h2 className="font-heading text-2xl font-semibold text-white mb-2">
                        Let's schedule your visit.
                      </h2>
                      <p className="text-white/50 font-body text-sm mb-8">
                        We offer comprehensive hygiene and checkup appointments. Fill in your details and we'll confirm a time that works for you.
                      </p>
                      <LeadForm
                        onSubmit={handleFormSubmit}
                        isSubmitting={isSubmitting}
                        offerBadge={null}
                        ctaLabel="Schedule My Appointment"
                      />
                      <button
                        onClick={() => setStep("triage")}
                        className="mt-4 text-white/35 hover:text-white/70 text-xs font-body transition-colors duration-200 flex items-center gap-1"
                      >
                        ← Back
                      </button>
                    </motion.div>
                  )}

                  {/* ── Emergency Path ── */}
                  {step === "emergency-path" && (
                    <motion.div key="emergency" {...fadeSlide}>
                      <div className="inline-flex items-center gap-2 mb-5 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/25">
                        <Zap className="w-3.5 h-3.5 text-amber-300" />
                        <span className="text-amber-300 text-xs font-body font-semibold tracking-wide uppercase">
                          Dental Emergency
                        </span>
                      </div>
                      <h2 className="font-heading text-2xl font-semibold text-white mb-2">
                        We'll see you as soon as possible.
                      </h2>
                      <p className="text-white/50 font-body text-sm mb-3">
                        For immediate emergencies, please call us directly:
                      </p>
                      <a
                        href="tel:5128663800"
                        className="inline-flex items-center gap-2 mb-6 px-5 py-3 bg-amber-500/15 border border-amber-500/30 text-amber-300 font-body font-semibold text-base rounded-none hover:bg-amber-500/25 transition-all duration-200"
                      >
                        📞 (512) 866-3800
                      </a>
                      <p className="text-white/40 font-body text-xs mb-8">
                        Or leave your details and our team will contact you within minutes during office hours.
                      </p>
                      <LeadForm
                        onSubmit={handleFormSubmit}
                        isSubmitting={isSubmitting}
                        offerBadge={null}
                        ctaLabel="Request Emergency Slot"
                      />
                      <button
                        onClick={() => setStep("triage")}
                        className="mt-4 text-white/35 hover:text-white/70 text-xs font-body transition-colors duration-200 flex items-center gap-1"
                      >
                        ← Back
                      </button>
                    </motion.div>
                  )}

                  {/* ── STEP 3: Lead Capture ── */}
                  {step === "lead-capture" && (
                    <motion.div key="lead" {...fadeSlide}>
                      <div className="inline-flex items-center gap-2 mb-5 px-3 py-1 rounded-full bg-teal-500/15 border border-teal-500/25">
                        <Sparkles className="w-3.5 h-3.5 text-teal-300" />
                        <span className="text-teal-300 text-xs font-body font-semibold tracking-wide uppercase">
                          {selectedService ?? "VIP Consultation"}
                        </span>
                      </div>

                      <h2 className="font-heading text-2xl font-semibold text-white mb-2">
                        Secure your VIP spot.
                      </h2>
                      <p className="text-white/50 font-body text-sm mb-7">
                        Enter your details below and our concierge team will reach out within 24 hours to confirm your exclusive consultation.
                      </p>

                      <LeadForm
                        onSubmit={handleFormSubmit}
                        isSubmitting={isSubmitting}
                        offerBadge={
                          selectedService === "Invisalign®"
                            ? "$1,500 Invisalign® Limited-Time Savings"
                            : null
                        }
                        ctaLabel="Claim My VIP Consultation"
                      />

                      <button
                        onClick={() => setStep("cosmetic-path")}
                        className="mt-4 text-white/35 hover:text-white/70 text-xs font-body transition-colors duration-200 flex items-center gap-1"
                      >
                        ← Back
                      </button>
                    </motion.div>
                  )}

                  {/* ── Success ── */}
                  {step === "success" && (
                    <motion.div key="success" {...fadeSlide} className="flex flex-col items-center text-center py-6">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
                        className="w-16 h-16 rounded-full bg-teal-500/20 border border-teal-400/40 flex items-center justify-center mb-6"
                      >
                        <svg className="w-8 h-8 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </motion.div>
                      <h2 className="font-heading text-2xl font-semibold text-white mb-3">
                        You're all set!
                      </h2>
                      <p className="text-white/55 font-body text-sm max-w-xs leading-relaxed mb-8">
                        Our concierge team will reach out within 24 hours to confirm your appointment details. We look forward to welcoming you.
                      </p>
                      <button
                        onClick={onClose}
                        className="px-8 h-11 bg-teal-500 hover:bg-teal-400 text-white font-body font-semibold text-sm tracking-wide uppercase transition-all duration-200"
                      >
                        Close
                      </button>
                    </motion.div>
                  )}

                </AnimatePresence>
              </div>

              {/* Footer */}
              {step !== "success" && (
                <div className="px-7 pb-5 pt-2 border-t border-white/6">
                  <p className="text-white/25 font-body text-[11px] text-center">
                    🔒 Your information is private and will never be shared.
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

// ─── Triage Card ─────────────────────────────────────────────────────────────
function TriageCard({
  id,
  icon,
  title,
  subtitle,
  accent,
  onClick,
}: {
  id: string;
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  accent: "teal" | "emerald" | "amber";
  onClick: () => void;
}) {
  const accentMap = {
    teal:    "border-teal-400/60 bg-teal-500/10 hover:bg-teal-500/20 hover:border-teal-400",
    emerald: "border-emerald-400/60 bg-emerald-500/10 hover:bg-emerald-500/20 hover:border-emerald-400",
    amber:   "border-amber-400/60 bg-amber-500/10 hover:bg-amber-500/20 hover:border-amber-400",
  };
  const iconBgMap = {
    teal:    "bg-teal-500/20",
    emerald: "bg-emerald-500/20",
    amber:   "bg-amber-500/20",
  };

  return (
    <button
      id={id}
      onClick={onClick}
      className={`group w-full text-left flex items-start gap-4 px-5 py-4 border transition-all duration-250 rounded-none ${accentMap[accent]}`}
    >
      <div className={`flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center mt-0.5 ${iconBgMap[accent]}`}>
        {icon}
      </div>
      <div className="flex-1">
        <p className="text-white font-body font-semibold text-sm leading-snug">{title}</p>
        <p className="text-white/45 font-body text-xs mt-1 leading-relaxed">{subtitle}</p>
      </div>
      <ChevronRight className="w-4 h-4 text-white/30 group-hover:text-white/70 self-center transition-colors duration-200" />
    </button>
  );
}

// ─── Lead Capture Form ───────────────────────────────────────────────────────
function LeadForm({
  onSubmit,
  isSubmitting,
  offerBadge,
  ctaLabel,
}: {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
  isSubmitting: boolean;
  offerBadge: string | null;
  ctaLabel: string;
}) {
  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4">
      <div className="grid grid-cols-1 gap-4">
        <input
          id="form-name"
          required
          type="text"
          placeholder="Full Name"
          className="w-full h-11 px-4 bg-white/6 border border-white/12 text-white placeholder-white/30
            font-body text-sm rounded-none outline-none
            focus:border-teal-400/70 focus:bg-white/8 transition-all duration-200"
        />
        <input
          id="form-email"
          required
          type="email"
          placeholder="Email Address"
          className="w-full h-11 px-4 bg-white/6 border border-white/12 text-white placeholder-white/30
            font-body text-sm rounded-none outline-none
            focus:border-teal-400/70 focus:bg-white/8 transition-all duration-200"
        />
        <input
          id="form-phone"
          required
          type="tel"
          placeholder="Phone Number"
          className="w-full h-11 px-4 bg-white/6 border border-white/12 text-white placeholder-white/30
            font-body text-sm rounded-none outline-none
            focus:border-teal-400/70 focus:bg-white/8 transition-all duration-200"
        />
      </div>

      {/* Offer badge */}
      {offerBadge && (
        <div className="flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-teal-900/60 to-teal-800/40 border border-teal-400/30">
          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-400/20 flex items-center justify-center">
            <Sparkles className="w-3 h-3 text-teal-300" />
          </div>
          <p className="text-teal-200 font-body text-xs font-semibold leading-snug">
            🎉 {offerBadge} — available for patients who book today.
          </p>
        </div>
      )}

      <button
        id="form-submit-btn"
        type="submit"
        disabled={isSubmitting}
        className="relative w-full h-12 bg-teal-500 hover:bg-teal-400 disabled:opacity-60
          text-white font-body font-semibold text-sm tracking-wide uppercase
          rounded-none transition-all duration-250 flex items-center justify-center gap-2
          shadow-[0_0_24px_rgba(20,184,166,0.35)] hover:shadow-[0_0_36px_rgba(20,184,166,0.55)]"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            Submitting...
          </>
        ) : (
          ctaLabel
        )}
      </button>
    </form>
  );
}
