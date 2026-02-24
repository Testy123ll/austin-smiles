import PageLayout from "@/components/PageLayout";
import { motion } from "framer-motion";
import { Monitor, Stethoscope, Clock } from "lucide-react";

const features = [
  { icon: Monitor, title: "Digital X-Rays & Imaging", desc: "Enhanced diagnosis means better results. Modern imaging techniques allow swift, accurate evaluation and prompt treatment planning." },
  { icon: Stethoscope, title: "Problem Focused Exams", desc: "Our team conducts limited exams to target the specific problem, enabling prompt relief and restoration to your normal routine." },
  { icon: Clock, title: "Same Day Emergency Treatment", desc: "We prioritize working you into our schedule promptly. Same-day treatment aims to alleviate pain with interim measures until permanent treatment." },
];

export default function DentalEmergencies() {
  return (
    <PageLayout
      title="Dental Emergencies"
      subtitle="Don't delay seeking essential dental care during emergencies. Reach out to our team promptly to preserve your smile!"
      breadcrumbs={[{ label: "Services", href: "/our-services" }, { label: "Dental Emergencies", href: "/dental-emergencies" }]}
    >
      <div className="container max-w-4xl">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">Do I Need Emergency Dental Care?</h2>
          <p className="text-muted-foreground leading-relaxed">Persistent pain or an injury to your mouth or teeth are clear signs that you need to see a dentist right away. If you're experiencing unexplained pain or if something has fallen out of your mouth, give us a call and our team will assess your situation.</p>
          <div className="bg-gold/10 rounded-xl p-6 mt-6 border border-gold/20">
            <p className="text-sm font-medium text-primary mb-1">DID YOU KNOW...</p>
            <p className="text-foreground/80">If you lose a tooth, place it in cold milk while you head to your emergency appointment. — Mayo Clinic</p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div key={f.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center p-6 bg-background rounded-2xl border border-border/50">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </PageLayout>
  );
}
