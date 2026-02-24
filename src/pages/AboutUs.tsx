import PageLayout from "@/components/PageLayout";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const amenities = [
  "Watch Streaming Shows", "Noise Cancelling Headphones", "Nitrous (Laughing) Gas",
  "Numbing Reversal Available", "Heat Massage Chairs", "Personal Lip Balm",
  "Beverage Station", "Warm Towels", "Blankets",
];

export default function AboutUs() {
  return (
    <PageLayout
      title="About Our Practice"
      subtitle="At Austin Elite Smiles, we are committed to listening to you and helping you achieve your dental goals."
      breadcrumbs={[{ label: "About Us", href: "/about-us" }]}
    >
      <div className="container max-w-4xl">
        {/* Mission */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">Our Mission</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">We are dedicated to exceeding patient expectations by providing a superior level of care in a high-quality, safe, and nonjudgmental environment. Our commitment to personalized attention ensures that each patient receives compassionate care tailored to their unique needs.</p>
          <p className="text-muted-foreground leading-relaxed">We believe in delivering an elevated dental experience where great customer service is paramount. We work collaboratively with patients to develop personalized treatment plans, listening attentively, guiding, motivating, and educating every step of the way.</p>
        </motion.div>

        {/* Amenities */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">Elevated Amenities</h2>
          <p className="text-muted-foreground mb-8">We seamlessly blend comfort with state-of-the-art technology. From plush seating with golf course views to advanced dental equipment.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {amenities.map((a) => (
              <div key={a} className="flex items-center gap-3 p-4 bg-background rounded-xl border border-border/50">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-foreground/80 font-medium text-sm uppercase">{a}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-primary/5 rounded-2xl p-8 text-center border border-primary/10">
          <p className="text-muted-foreground mb-2">Our locally owned office has over 30 years combined experience.</p>
          <h3 className="text-xl font-heading font-bold mb-4">Ready to Get Started on Your Journey to a Healthy and Beautiful Smile?</h3>
          <p className="text-muted-foreground">Call us at <a href="tel:5128663800" className="text-primary font-medium">512-866-3800</a> to schedule an appointment.</p>
        </motion.div>
      </div>
    </PageLayout>
  );
}
