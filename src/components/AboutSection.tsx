import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const highlights = [
  "Privately owned & women-owned dental practice",
  "Cosmetic dentistry guided by AACD accreditation",
  "Periodontal and implant care with a board-certified periodontist",
  "Advanced training in cosmetic and comprehensive dentistry",
  "State-of-the-art digital dentistry, including 3D scans",
  "Thoughtful, unrushed appointments centered on your goals",
];

export default function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-cream">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
              Meet Your Trusted Dental Experts in Austin
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Austin Elite Smiles is a privately owned, women-owned dental practice led by partners Dr. Elizabeth Lowery and Dr. Kasey Lowrance. We provide cosmetic dentistry, Invisalign®, smile makeovers, restorative, and preventive dental care using advanced digital technology in a modern, comfortable, and patient-centered environment.
            </p>
            <p className="text-muted-foreground">
              We work with <strong className="text-foreground">most major dental PPO insurance plans</strong>, offer flexible payment options, and provide a <strong className="text-foreground">Smile Wellness Membership</strong> for patients without insurance.
            </p>
            <p className="text-sm text-muted-foreground mt-3">
              👉 Proudly serving Austin, North Austin, Avery Ranch, Cedar Park, Leander, Round Rock, and Georgetown
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          {highlights.map((text, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex items-start gap-3 p-5 bg-background rounded-xl shadow-sm border border-border/50"
            >
              <Heart className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="currentColor" />
              <p className="text-sm font-medium text-foreground">{text}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-lg text-muted-foreground mb-2">We don't believe in quick fixes.</p>
          <p className="text-2xl font-heading font-bold text-foreground mb-6">We believe in dentistry done right.</p>
          <Button asChild variant="outline" className="rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8">
            <a href="#doctors">Learn More About Us</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
