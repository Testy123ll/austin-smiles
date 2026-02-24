import PageLayout from "@/components/PageLayout";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const benefits = [
  "Longest-lasting dental restoration",
  "Stronger than natural teeth",
  "Delays bone loss",
  "Non-invasive to natural teeth",
  "Promotes anti-aging benefits",
  "Easy to care for",
  "Functions like natural teeth",
];

export default function DentalImplants() {
  return (
    <PageLayout
      title="Dental Implants"
      subtitle="Don't allow a missing tooth to hinder your enjoyment of life. Dental implants provide an optimal solution for replacing missing teeth."
      breadcrumbs={[{ label: "Services", href: "/our-services" }, { label: "Dental Implants", href: "/dental-implants" }]}
    >
      <div className="container max-w-4xl">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">Why Should I Choose Them?</h2>
          <p className="text-muted-foreground leading-relaxed">Dental implants emerge as the premier solution. They seamlessly fill the gap in your smile and restore your oral health. Unlike alternative methods, dental implants uniquely combat bone loss and can be customized for a single tooth or an entire arch.</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">What Are They?</h2>
          <p className="text-muted-foreground leading-relaxed">Dental implants, crafted from hypoallergenic and biocompatible titanium, serve as artificial tooth roots. They seamlessly integrate with bone, mirroring natural teeth stability. They resist decay and help prevent bone loss associated with tooth loss.</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">State of the Art Implant Technology</h2>
          <p className="text-muted-foreground leading-relaxed">Our state-of-the-art 3D CBCT scanning technology enables us to digitally map your dental implant procedure prior to treatment. This facilitates minimally invasive techniques, enhances outcomes, and accelerates recovery.</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-2xl font-heading font-bold mb-6">Benefits of Dental Implants</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {benefits.map((b) => (
              <div key={b} className="flex items-center gap-3 p-4 bg-background rounded-xl border border-border/50">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-foreground/80 font-medium">{b}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </PageLayout>
  );
}
