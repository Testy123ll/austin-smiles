import PageLayout from "@/components/PageLayout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const resources = [
  { name: "Smile Wellness Plan", href: "/smile-wellness-plan", desc: "Affordable membership for patients without insurance" },
  { name: "Payment Plans", href: "/payment-plans", desc: "Flexible financing options with Cherry and CareCredit" },
  { name: "New Patient Special", href: "/new-patient-special", desc: "$198 exam, cleaning, x-rays, scan & whitening" },
  { name: "MyChart", href: "https://mychart.myoryx.com/patient/#/auth/login?realm=aes", desc: "Access your patient portal", external: true },
  { name: "Pay Bill", href: "https://c.moolah.cc/austinelitesmiles", desc: "Make a payment online", external: true },
];

export default function ForPatients() {
  return (
    <PageLayout
      title="For Patients"
      subtitle="Explore our comprehensive resources designed to enhance your dental care experience."
      breadcrumbs={[{ label: "For Patients", href: "/for-patients" }]}
    >
      <div className="container">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {resources.map((r, i) => (
            <motion.div key={r.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
              {(r as any).external ? (
                <a href={r.href} target="_blank" rel="noopener noreferrer" className="group block p-6 bg-background rounded-2xl border border-border/50 hover:shadow-lg hover:border-primary/30 transition-all h-full">
                  <h3 className="font-heading font-semibold text-lg text-foreground group-hover:text-primary transition-colors mb-2">{r.name}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{r.desc}</p>
                  <div className="flex items-center gap-2 text-sm text-primary">Visit <ArrowRight className="w-4 h-4" /></div>
                </a>
              ) : (
                <Link to={r.href} className="group block p-6 bg-background rounded-2xl border border-border/50 hover:shadow-lg hover:border-primary/30 transition-all h-full">
                  <h3 className="font-heading font-semibold text-lg text-foreground group-hover:text-primary transition-colors mb-2">{r.name}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{r.desc}</p>
                  <div className="flex items-center gap-2 text-sm text-primary opacity-0 group-hover:opacity-100 transition-opacity">Learn More <ArrowRight className="w-4 h-4" /></div>
                </Link>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
