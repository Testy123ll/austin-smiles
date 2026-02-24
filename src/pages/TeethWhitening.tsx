import PageLayout from "@/components/PageLayout";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const benefits = [
  { title: "Quick and Effective Results", desc: "In just one hour, this treatment can notably brighten your teeth. Ideal for individuals seeking immediate results." },
  { title: "Safe and Comfortable Treatment", desc: "Administered by seasoned dental professionals, your comfort and well-being are safeguarded throughout the process." },
  { title: "Long-Lasting Whiteness", desc: "The treatment typically maintains its effects for up to a year with proper care." },
];

const steps = [
  { step: "1", title: "Pre-Treatment Examination & Cleaning", desc: "We conduct a thorough examination and remove any plaque or tartar that may interfere with the whitening process." },
  { step: "2", title: "Application of Whitening Gel", desc: "A specialized gel is applied, formulated to synergize with a concentrated light to effectively disperse stains." },
  { step: "3", title: "Activation with Zoom Light", desc: "The Zoom light activates the gel over three 15-minute sessions. Relax and enjoy music or stream your favorite shows." },
];

export default function TeethWhitening() {
  return (
    <PageLayout
      title="Teeth Whitening"
      subtitle="Explore Zoom Teeth Whitening—a groundbreaking treatment that can lighten your teeth by several shades in just one hour."
      breadcrumbs={[{ label: "Services", href: "/our-services" }, { label: "Teeth Whitening", href: "/teeth-whitening" }]}
    >
      <div className="container max-w-4xl">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">Why Should I Try It?</h2>
          <p className="text-muted-foreground leading-relaxed">If you've experimented with over-the-counter whitening products without achieving desired results, Zoom Teeth Whitening is administered by dental professionals, guaranteeing your safety and comfort. It's ideal for those aiming to enhance their confidence with a radiant, white smile.</p>
        </motion.div>

        <div className="mb-16">
          <h2 className="text-2xl font-heading font-bold mb-8">Benefits of Zoom Teeth Whitening</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <motion.div key={b.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="p-6 bg-background rounded-2xl border border-border/50">
                <CheckCircle className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-heading font-semibold mb-2">{b.title}</h3>
                <p className="text-sm text-muted-foreground">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-heading font-bold mb-8">The Treatment Process</h2>
          <div className="space-y-6">
            {steps.map((s, i) => (
              <motion.div key={s.step} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 font-bold text-lg">{s.step}</div>
                <div>
                  <h3 className="font-heading font-semibold text-lg mb-1">{s.title}</h3>
                  <p className="text-muted-foreground">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
