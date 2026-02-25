import { motion } from "framer-motion";
import { Sparkles, Smile, Shield, ScanLine, AlertCircle, Stethoscope, CircleDot, Moon, Zap, Heart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const primaryServices = [
  { 
    icon: Sparkles, 
    name: "Cosmetic Dentistry", 
    desc: "Veneers, bonding, and total smile makeovers.",
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80",
    link: "/our-services"
  },
  { 
    icon: Smile, 
    name: "Invisalign®", 
    desc: "Clear aligners for discreet, comfortable straightening.",
    image: "https://images.unsplash.com/photo-1598256989932-5444ecccdef9?auto=format&fit=crop&q=80",
    link: "/invisalign"
  },
  { 
    icon: Zap, 
    name: "Zoom! Whitening", 
    desc: "Dramatic results in a single one-hour visit.",
    image: "https://images.unsplash.com/photo-1536622201383-7c093a62883d?auto=format&fit=crop&q=80",
    link: "/teeth-whitening"
  },
  { 
    icon: CircleDot, 
    name: "Dental Implants", 
    desc: "Permanent, natural-looking tooth replacement.",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80",
    link: "/dental-implants"
  },
];

const secondaryServices = [
  { icon: Shield, name: "Preventative Care", link: "/preventative-dentistry" },
  { icon: ScanLine, name: "3D Wellness Scan", link: "/3d-digital-wellness-scan" },
  { icon: AlertCircle, name: "Emergency Care", link: "/dental-emergencies" },
  { icon: Stethoscope, name: "General Dentistry", link: "/general-dentistry" },
  { icon: Heart, name: "TMJ Treatment", link: "/our-services" },
  { icon: Moon, name: "Sleep Apnea", link: "/our-services" },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px bg-gold w-12" />
            <p className="text-gold font-medium tracking-[0.2em] uppercase text-sm">
              Artistry & Care
            </p>
            <div className="h-px bg-gold w-12" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-semibold text-navy mb-6">
            Elite Dental Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
            From comprehensive preventative care to complete cosmetic transformations, we offer a full spectrum of world-class dentistry designed to elevate your smile.
          </p>
        </motion.div>

        {/* Primary Bento Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-16">
          {primaryServices.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative h-[320px] rounded-3xl overflow-hidden cursor-pointer"
              >
                {/* Background Image & Overlay */}
                <div className="absolute inset-0">
                  <img src={service.image} alt={service.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/40 to-transparent transition-opacity duration-500 group-hover:opacity-90" />
                </div>
                
                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center mb-4 transition-transform duration-500 group-hover:-translate-y-2">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-heading font-semibold mb-2 transition-transform duration-500 group-hover:-translate-y-2">{service.name}</h3>
                  
                  {/* Hover Reveal Content */}
                  <div className="overflow-hidden">
                    <div className="translate-y-[120%] opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 flex flex-col gap-4">
                      <p className="text-white/80 text-sm font-light">{service.desc}</p>
                      <Link to={service.link} className="inline-flex items-center text-gold text-sm font-medium hover:text-white transition-colors">
                        Explore Treatment <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Secondary Services List */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-cream rounded-3xl p-8 md:p-12 border border-border/50"
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4 border-b border-border/50 pb-8">
            <h3 className="text-2xl font-heading font-semibold text-navy">Comprehensive Health</h3>
            <Button asChild variant="outline" className="rounded-full border-navy text-navy hover:bg-navy hover:text-white transition-colors">
              <Link to="/our-services">View All Services</Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-y-6 gap-x-4">
            {secondaryServices.map((service) => {
              const Icon = service.icon;
              return (
                <Link to={service.link} key={service.name} className="flex items-center gap-3 group">
                  <div className="w-10 h-10 rounded-full bg-navy/5 flex items-center justify-center group-hover:bg-gold/10 transition-colors">
                    <Icon className="w-5 h-5 text-navy group-hover:text-gold transition-colors" />
                  </div>
                  <span className="text-sm font-medium text-navy/80 group-hover:text-navy transition-colors">{service.name}</span>
                </Link>
              );
            })}
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}
