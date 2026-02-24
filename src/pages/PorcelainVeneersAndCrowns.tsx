import PageLayout from "@/components/PageLayout";
import { motion } from "framer-motion";

const sections = [
  {
    title: "Traditional Veneers",
    category: "Porcelain Veneers",
    desc: "Custom porcelain veneers are made of a razor-thin layer of porcelain bonded directly onto your tooth surface. Porcelain closely matches natural tooth color and texture, making veneers a highly effective but subtle treatment for cosmetic imperfections.",
  },
  {
    title: "Lumineers®",
    category: "Porcelain Veneers",
    desc: "Lumineers® are minimal prep veneers that require less tooth structure removal than traditional veneers and can be reversible.",
  },
  {
    title: "Are Porcelain Veneers Right For Me?",
    category: "Porcelain Veneers",
    desc: "Veneers correct mild to moderate chips and cracks, close small gaps, change tooth size or shape, and whiten intrinsic stains that can't be removed with professional whitening.",
  },
  {
    title: "Emax Crowns & Bridges",
    category: "Porcelain Crowns",
    desc: "Emax crowns appear translucent for a realistic, natural look while providing strength and resistance to chips and breaks. Zirconia bridges are also a beautiful and strong alternative for the posterior of the mouth.",
  },
  {
    title: "How Are They Placed?",
    category: "Porcelain Crowns",
    desc: "The dentist reduces the tooth size to make space, takes a digital impression for custom fabrication, and places a temporary crown. At your delivery appointment, the temporary is replaced with your porcelain crown.",
  },
];

export default function PorcelainVeneersAndCrowns() {
  return (
    <PageLayout
      title="Porcelain Veneers & Crowns"
      subtitle="Enhance your smile with porcelain veneers and crowns—versatile solutions for correcting imperfections with flawless, natural-looking results."
      breadcrumbs={[{ label: "Services", href: "/our-services" }, { label: "Porcelain Veneers & Crowns", href: "/porcelain-veneers-and-crowns" }]}
    >
      <div className="container max-w-4xl">
        {sections.map((s, i) => (
          <motion.div key={s.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="mb-12 last:mb-0">
            <p className="text-sm font-medium text-primary uppercase tracking-widest mb-2">{s.category}</p>
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">{s.title}</h2>
            <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </PageLayout>
  );
}
