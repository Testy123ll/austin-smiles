import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, CalendarDays } from "lucide-react";

const SCHEDULE_URL = "https://mychart.myoryx.com/online-schedule/index.html?realm=aes&univers=com";

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-teal-dark/90 to-navy" />
        <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center mix-blend-overlay opacity-30" />
        {/* Subtle animated glowing orb effect for premium feel */}
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 -right-1/4 w-[800px] h-[800px] bg-gold/20 rounded-full blur-[120px]"
        />
      </div>

      <div className="container relative z-10 py-12 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="h-px bg-gold w-12" />
            <p className="text-gold font-medium tracking-[0.2em] uppercase text-sm">
              Welcome to Austin Elite Smiles
            </p>
          </motion.div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-semibold text-white leading-[1.1] mb-6 drop-shadow-sm">
            Elevating the Art of <span className="italic font-light text-cream/90">Cosmetic Dentistry</span>
          </h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="text-xl md:text-2xl font-heading font-light text-cream/80 mb-10 max-w-2xl leading-relaxed"
          >
            Confident Smiles. Unrushed Care. Spa-Level Comfort in Austin, TX.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-5"
          >
            <Button asChild size="lg" className="bg-gold hover:bg-white text-navy hover:text-navy rounded-none px-8 text-base h-14 transition-all duration-300 shadow-[0_0_20px_rgba(234,179,8,0.3)]">
              <a href={SCHEDULE_URL} target="_blank" rel="noopener noreferrer">
                <CalendarDays className="w-5 h-5 mr-3" /> Schedule Consultation
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-cream/20 text-cream hover:bg-cream/10 rounded-none px-8 text-base h-14 backdrop-blur-sm transition-all duration-300">
              <a href="tel:5128663800">
                <Phone className="w-5 h-5 mr-3" /> Call (512) 866-3800
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
