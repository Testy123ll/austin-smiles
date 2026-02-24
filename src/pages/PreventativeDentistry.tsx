import PageLayout from "@/components/PageLayout";
import { motion } from "framer-motion";

const sections = [
  { title: "Diagnostic & Prevention", desc: "Visiting us twice a year enables early detection of minor issues before they become major, costly problems. Our check-ups typically last about an hour, and we strive to ensure your comfort." },
  { title: "Digital X-Rays & CBCT", desc: "Digital x-rays offer safe, swift imaging with only a fraction of radiation compared to traditional film. We also employ CBCT technology for detailed 3D images invaluable for complex treatments, implant preparation, and TMJ evaluation." },
  { title: "Cleaning & Hygiene", desc: "Routine cleanings eliminate bacterial plaque and debris, reversing minor stains. We recommend scheduling every six months. At home, use fluoride toothpaste, a soft-bristled electric toothbrush, and floss daily." },
  { title: "Periodontal Care", desc: "Untreated gum disease can impact overall health with gum recession, bone loss, and tooth loss. We provide deep cleanings (scaling and root planing) and Perio Protect to safeguard your oral and systemic health." },
  { title: "3D Digital Wellness Scans", desc: "Our advanced evaluation utilizes digital technology to generate a detailed 3D image of your teeth, gums, and bite—aiding treatment planning, creating digital records, and monitoring changes over time." },
];

export default function PreventativeDentistry() {
  return (
    <PageLayout
      title="Preventative Dentistry"
      subtitle="Strong preventative care serves as the foundation for your oral and overall well-being."
      breadcrumbs={[{ label: "Services", href: "/our-services" }, { label: "Preventative Dentistry", href: "/preventative-dentistry" }]}
    >
      <div className="container max-w-4xl">
        {sections.map((s, i) => (
          <motion.div key={s.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="mb-12 last:mb-0">
            <p className="text-sm font-medium text-primary uppercase tracking-widest mb-2">Preventative Dentistry</p>
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">{s.title}</h2>
            <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </PageLayout>
  );
}
