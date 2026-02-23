import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, CalendarDays } from "lucide-react";

const SCHEDULE_URL = "https://mychart.myoryx.com/online-schedule/index.html?realm=aes&univers=com";

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20">
      <div className="absolute inset-0 z-0">
        <img src="/images/hero-bg.jpg" alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/70 to-navy/30" />
      </div>

      <div className="container relative z-10 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">
            Welcome to Austin Elite Smiles
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight mb-4">
            Cosmetic & Family Dentistry in Austin, TX
          </h1>
          <p className="text-xl md:text-2xl font-heading italic text-white/80 mb-8">
            Confident Smiles. Unrushed Care. Elevated Comfort.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-primary hover:bg-teal-dark text-primary-foreground rounded-full px-8 text-base h-14">
              <a href={SCHEDULE_URL} target="_blank" rel="noopener noreferrer">
                <CalendarDays className="w-5 h-5 mr-2" /> Schedule Online
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 rounded-full px-8 text-base h-14">
              <a href="tel:5128663800">
                <Phone className="w-5 h-5 mr-2" /> Call (512) 866-3800
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
