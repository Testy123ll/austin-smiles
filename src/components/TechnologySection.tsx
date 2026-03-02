import { motion } from "framer-motion";
import { Sparkles, Sofa, Award } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const features = [
  { icon: Sparkles, text: "Choose from a range of cosmetic treatment options that fit your budget and needs." },
  { icon: Sofa, text: "Enjoy comforts like blankets, massage chairs, and a movie or show while you're in the dental chair." },
  { icon: Award, text: "Our personalized smile makeovers boost your confidence and empower you to make a lasting impression." },
];

export default function TechnologySection() {
  return (
    <section className="py-16 md:py-24 bg-cream">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              Cutting-Edge Technology for Superior Dental Care
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              At Austin Elite Smiles, we use the latest in dental technology to provide precise, comfortable, and efficient care. Our 3D Wellness Scans offer a comprehensive view of your oral health. Digital X-rays minimize radiation exposure while delivering high-resolution images. Plus, our advanced laser therapies ensure gentle, pain-free treatments with faster healing times.
            </p>

            <div className="space-y-6 mb-8">
              {features.map((f, i) => {
                const Icon = f.icon;
                return (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <p className="text-sm text-foreground">{f.text}</p>
                  </div>
                );
              })}
            </div>

            <Button asChild variant="outline" className="rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8">
              <Link to="/3d-digital-wellness-scan">
                Learn More
              </Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img src="/images/technology.jpg" alt="State-of-the-art dental technology" loading="lazy" decoding="async" className="w-full h-auto" />
            </div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-gold/10 rounded-full blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
