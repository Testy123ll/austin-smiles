import PageLayout from "@/components/PageLayout";
import { motion } from "framer-motion";

const sections = [
  { title: "Dental Fillings", desc: "Addressing cavities promptly is crucial. With fillings, we can halt tooth decay advancement in just one visit. Regular 6-month cleanings prevent new cavities." },
  { title: "Dental Crowns", desc: "Custom-made caps protect the natural root of your tooth and enhance functionality. Available in various materials for both restorative and cosmetic purposes." },
  { title: "Root Canal Therapy", desc: "Root canal therapy alleviates pain by removing infected tooth pulp, cleaning and disinfecting the area. It can prevent tooth extraction and preserve your natural tooth." },
  { title: "Extractions", desc: "Preserving your smile is our top priority, but when a tooth poses more challenges than benefits, extraction using gentle methods alongside anesthesia or sedation safely removes decayed teeth." },
  { title: "Dental Implants", desc: "Dental implants offer more than cosmetic enhancement—they reinforce bite strength, contribute to overall mouth health, and can slow or halt bone loss by mimicking natural tooth roots." },
  { title: "Dental Bridges", desc: "A dental bridge addresses the gap left by missing teeth. This permanent fixture is affixed to adjacent teeth, ensuring stability and preventing teeth from shifting." },
];

export default function GeneralDentistry() {
  return (
    <PageLayout
      title="General Dentistry"
      subtitle="Maintain your smile's optimal feel and function with restorative dentistry, from dental fillings to more complex procedures."
      breadcrumbs={[{ label: "Services", href: "/our-services" }, { label: "General Dentistry", href: "/general-dentistry" }]}
    >
      <div className="container max-w-4xl">
        {sections.map((s, i) => (
          <motion.div key={s.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="mb-12 last:mb-0">
            <p className="text-sm font-medium text-primary uppercase tracking-widest mb-2">General Dentistry</p>
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">{s.title}</h2>
            <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </PageLayout>
  );
}
