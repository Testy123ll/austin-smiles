import PageLayout from "@/components/PageLayout";
import { motion } from "framer-motion";
import { CheckCircle, Activity, Heart, Key, Clock, Settings, Maximize, SmilePlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const benefits = [
  { icon: Key, title: "Longest-Lasting", text: "The most durable & longest-lasting dental restoration available today." },
  { icon: ShieldCheck, title: "Superior Strength", text: "Crafted from titanium, making them significantly stronger than natural teeth." },
  { icon: Activity, title: "Prevents Bone Loss", text: "Actively stimulates the jawbone to halt and reverse bone deterioration." },
  { icon: Heart, title: "Non-Invasive", text: "Unlike bridges, implants do not require altering adjacent healthy teeth." },
  { icon: SmilePlus, title: "Anti-Aging Benefits", text: "Maintains facial structure and prevents the 'sunken' look of missing teeth." },
  { icon: Settings, title: "Effortless Care", text: "Maintain them exactly like natural teeth—just brush, floss, and smile." },
];

// Fallback if ShieldCheck isn't in scope (we import it below)
import { ShieldCheck } from "lucide-react";

export default function DentalImplants() {
  return (
    <PageLayout
      title="Elite Dental Implants"
      subtitle="Don't allow a missing tooth to hinder your enjoyment of life. Dental implants provide the ultimate, highly-aesthetic permanent solution for replacing missing teeth."
      breadcrumbs={[{ label: "Services", href: "/our-services" }, { label: "Dental Implants", href: "/dental-implants" }]}
    >
      <div className="container max-w-6xl">
        
        {/* Main Feature Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }} 
            className="order-2 lg:order-1"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px bg-gold w-8" />
              <span className="text-gold uppercase tracking-widest text-sm font-medium">Permanent Restoration</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-heading font-semibold text-navy leading-tight mb-6">
              The Premier Solution for <br/><span className="italic font-light">Missing Teeth</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
              Dental implants emerge as the unrivaled gold standard in modern restorative dentistry. Crafted from hypoallergenic and biocompatible titanium, these small posts serve as artificial tooth roots that seamlessly integrate with your jawbone.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg">
              By mirroring the structural stability of natural teeth, implants effortlessly fill the gap in your smile, restore your complete chewing function, and actively combat the bone loss automatically associated with tooth loss.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} 
            whileInView={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.6 }}
            viewport={{ once: true }} 
            className="order-1 lg:order-2 relative"
          >
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-border/50 bg-cream">
              {/* Fallback image */}
              <img src="/images/technology.jpg" alt="Dental Implants" className="w-full h-full object-cover mix-blend-multiply" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-[40px] z-[-1]" />
          </motion.div>
        </div>

        {/* Tech Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          className="bg-navy text-white rounded-3xl p-10 md:p-16 mb-24 text-center shadow-xl relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://transparenttextures.com/patterns/stardust.png')]" />
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">State-of-the-Art Implant Technology</h2>
            <p className="text-cream/80 text-lg mb-0 font-light leading-relaxed">
              Our clinic utilizes state-of-the-art 3D CBCT scanning technology. This enables our specialists to digitally map your entire dental implant procedure in three dimensions prior to treatment. This unmatched precision facilitates minimally invasive surgical techniques, dramatically enhances aesthetic outcomes, and accelerates patient recovery times.
            </p>
          </div>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          className="mb-24"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-semibold text-navy">The Implant Advantage</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, i) => {
              const Icon = benefit.icon;
              return (
                <motion.div 
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-card border border-border/50 p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-navy/5 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-navy" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{benefit.text}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* CTA */}
        <div className="text-center max-w-2xl mx-auto pb-12">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-navy mb-6">Schedule Your Implant Consultation</h2>
          <Button asChild size="lg" className="bg-gold hover:bg-navy text-navy hover:text-white rounded-full px-10 h-14 text-base transition-colors">
            <Link to="/contact-us">
              Restore Your Smile Today
            </Link>
          </Button>
        </div>

      </div>
    </PageLayout>
  );
}
