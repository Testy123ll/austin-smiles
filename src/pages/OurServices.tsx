import PageLayout from "@/components/PageLayout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const services = [
  { name: "Cosmetic Bonding", href: "/cosmetic-bonding" },
  { name: "Invisalign®", href: "/invisalign" },
  { name: "Porcelain Veneers & Crowns", href: "/porcelain-veneers-and-crowns" },
  { name: "Teeth Whitening", href: "/teeth-whitening" },
  { name: "Preventative Dentistry", href: "/preventative-dentistry" },
  { name: "3D Digital Wellness Scan", href: "/3d-digital-wellness-scan" },
  { name: "Dental Emergencies", href: "/dental-emergencies" },
  { name: "General Dentistry", href: "/general-dentistry" },
  { name: "Dental Implants", href: "/dental-implants" },
];

export default function OurServices() {
  return (
    <PageLayout
      title="Our Services"
      subtitle="Picture yourself with a smile that lights up every room you enter. Explore our services below."
      breadcrumbs={[{ label: "Our Services", href: "/our-services" }]}
    >
      <div className="container">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {services.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <Link to={s.href} className="group block p-6 bg-background rounded-2xl border border-border/50 hover:shadow-lg hover:border-primary/30 transition-all">
                <h3 className="font-heading font-semibold text-lg text-foreground group-hover:text-primary transition-colors mb-2">{s.name}</h3>
                <div className="flex items-center gap-2 text-sm text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn More <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
