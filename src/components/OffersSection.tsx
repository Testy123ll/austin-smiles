import { motion } from "framer-motion";
import { Gift, DollarSign, Shield, Percent, Sparkles, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const offers = [
  { icon: Sparkles, title: "Complimentary Custom Teeth Whitening", subtitle: "for new patients" },
  { icon: DollarSign, title: "$198 New Patient Exam", subtitle: "for patients without dental insurance" },
  { icon: Shield, title: "Smile Wellness Plan", subtitle: "for patients without insurance" },
  { icon: Percent, title: "$1,500 Invisalign® Limited-Time Savings", subtitle: "" },
  { icon: Gift, title: "Complimentary Cosmetic & Invisalign® Consultations", subtitle: "" },
  { icon: MessageCircle, title: "Complimentary Second Opinions", subtitle: "because confidence matters" },
];

export default function OffersSection() {
  return (
    <section id="offers" className="py-24 bg-cream">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            New Patient Offers & Consultations
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We believe high-quality dentistry should be accessible, transparent, and comfortable — whether you're using insurance or not.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          {offers.map((offer, i) => {
            const Icon = offer.icon;
            return (
              <motion.div
                key={offer.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="p-6 bg-background rounded-2xl border border-border/50 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-gold" />
                </div>
                <h3 className="font-heading font-semibold text-foreground text-lg mb-1">{offer.title}</h3>
                {offer.subtitle && <p className="text-sm text-muted-foreground">{offer.subtitle}</p>}
              </motion.div>
            );
          })}
        </div>

        <div className="text-center">
          <p className="text-muted-foreground mb-4">Our team is happy to review insurance benefits, payment options, and next steps before treatment begins.</p>
          <Button asChild size="lg" className="bg-primary hover:bg-teal-dark text-primary-foreground rounded-full px-10 h-14 text-base">
            <a href="https://www.austinelitesmiles.com/contact-us" target="_blank" rel="noopener noreferrer">
              Schedule Your Visit Today
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
