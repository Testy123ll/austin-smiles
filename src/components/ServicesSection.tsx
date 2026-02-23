import { motion } from "framer-motion";
import { Sparkles, Smile, Shield, ScanLine, AlertCircle, Stethoscope, CircleDot, Moon, Zap, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const SCHEDULE_URL = "https://mychart.myoryx.com/online-schedule/index.html?realm=aes&univers=com";

const services = [
  { icon: Sparkles, name: "Cosmetic Dentistry" },
  { icon: Smile, name: "Cosmetic Bonding" },
  { icon: Smile, name: "Invisalign®" },
  { icon: Sparkles, name: "Porcelain Veneers & Crowns" },
  { icon: Zap, name: "Teeth Whitening" },
  { icon: Shield, name: "Preventative Dentistry" },
  { icon: ScanLine, name: "3D Digital Wellness Scan" },
  { icon: AlertCircle, name: "Dental Emergencies" },
  { icon: Stethoscope, name: "General Dentistry" },
  { icon: CircleDot, name: "Dental Implants" },
  { icon: Heart, name: "TMJ Treatment" },
  { icon: Moon, name: "Sleep Apnea & Snoring" },
  { icon: Shield, name: "Perio Protect" },
  { icon: Moon, name: "Sedation Dentistry" },
  { icon: Zap, name: "Laser Teeth Cleaning" },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-cream">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            Comprehensive Dental Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We provide complete dental care for adults and families in Austin, TX
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-6xl mx-auto mb-12">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.03 }}
                className="group flex flex-col items-center text-center p-5 bg-background rounded-xl border border-border/50 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 cursor-pointer"
              >
                <div className="w-12 h-12 rounded-full bg-teal-light flex items-center justify-center mb-3 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-sm font-semibold text-foreground">{service.name}</h3>
              </motion.div>
            );
          })}
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="bg-primary hover:bg-teal-dark text-primary-foreground rounded-full px-10 h-14 text-base">
            <a href={SCHEDULE_URL} target="_blank" rel="noopener noreferrer">Book an Appointment</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
