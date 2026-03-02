import { motion } from "framer-motion";
import { CalendarDays, Star } from "lucide-react";

interface HeroSectionProps {
  onOpenModal: () => void;
}

// Royalty-free luxury spa/medical waiting room video from Pexels (no download required — direct embed)
const VIDEO_URL =
  "https://videos.pexels.com/video-files/3191572/3191572-uhd_2560_1440_25fps.mp4";

const SCHEDULE_URL =
  "https://mychart.myoryx.com/online-schedule/index.html?realm=aes&univers=com";

export default function HeroSection({ onOpenModal }: HeroSectionProps) {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* ─── Background Video ─── */}
      <div className="absolute inset-0 z-0">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={VIDEO_URL}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        />
        {/* Dark cinematic overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0d1f2d]/85 via-[#0d2b2b]/80 to-[#0d1f2d]/90" />
        {/* Teal accent glow — bottom left */}
        <div className="absolute bottom-0 left-0 w-[600px] h-[400px] bg-[#0d9488]/25 rounded-full blur-[140px] pointer-events-none" />
        {/* Subtle shimmer line */}
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-teal-400/40 to-transparent" />
      </div>

      {/* ─── Content ─── */}
      <div className="container relative z-10 py-32 md:py-40 pt-36 md:pt-44">
        <div className="max-w-3xl">
          {/* Label row */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-4 mb-7"
          >
            <div className="h-px w-10 bg-teal-400/80" />
            <p className="text-teal-300 font-body font-medium tracking-[0.22em] uppercase text-xs">
              Welcome to Austin Elite Smiles
            </p>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading text-5xl md:text-6xl lg:text-[4.5rem] font-semibold text-white leading-[1.08] mb-6 drop-shadow-sm"
          >
            Confident Smiles.{" "}
            <span className="italic font-light text-teal-200/95">
              Unrushed Care.
            </span>{" "}
            Elevated Comfort.
          </motion.h1>

          {/* Sub-copy */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45, duration: 1 }}
            className="text-lg md:text-xl font-body font-light text-white/70 mb-12 max-w-xl leading-relaxed"
          >
            Experience dentistry reimagined — where clinical excellence meets
            spa-level luxury in the heart of Austin, TX.
          </motion.p>

          {/* Social proof micro-badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55, duration: 0.8 }}
            className="flex items-center gap-2 mb-10"
          >
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 fill-teal-400 text-teal-400"
                />
              ))}
            </div>
            <span className="text-white/60 font-body text-sm">
              500+ five-star reviews
            </span>
          </motion.div>

          {/* ─── CTA Buttons ─── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            {/* Primary — VIP */}
            <button
              id="hero-vip-btn"
              onClick={onOpenModal}
              className="group relative inline-flex items-center justify-center gap-3 px-8 h-14 text-sm font-body font-semibold tracking-wide uppercase rounded-none
                bg-teal-500 hover:bg-teal-400 text-white
                shadow-[0_0_28px_rgba(20,184,166,0.45)]
                hover:shadow-[0_0_40px_rgba(20,184,166,0.65)]
                transition-all duration-300 overflow-hidden"
            >
              {/* Shimmer sweep */}
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/15 to-transparent" />
              <CalendarDays className="w-4 h-4 relative z-10" />
              <span className="relative z-10">Book VIP Consultation</span>
            </button>

            {/* Secondary — Standard */}
            <a
              id="hero-standard-btn"
              href={SCHEDULE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 h-14 text-sm font-body font-semibold tracking-wide uppercase rounded-none
                border border-white/25 text-white/90
                hover:border-white/50 hover:bg-white/8 hover:text-white
                backdrop-blur-sm transition-all duration-300"
            >
              Standard Booking
            </a>
          </motion.div>
        </div>
      </div>

      {/* ─── Scroll indicator ─── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-white/40 font-body text-[11px] tracking-widest uppercase">
          Scroll
        </span>
        <div className="w-px h-10 bg-gradient-to-b from-white/40 to-transparent animate-pulse" />
      </motion.div>
    </section>
  );
}
