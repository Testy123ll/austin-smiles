import PageLayout from "@/components/PageLayout";
import { motion } from "framer-motion";

export default function CosmeticBonding() {
  return (
    <PageLayout
      title="Cosmetic Bonding"
      subtitle="An affordable and reversible way to improve your smile in just one visit."
      breadcrumbs={[{ label: "Services", href: "/our-services" }, { label: "Cosmetic Bonding", href: "/cosmetic-bonding" }]}
    >
      <div className="container max-w-4xl">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <p className="text-muted-foreground leading-relaxed text-lg">
            Not sure you're ready for porcelain veneers? Cosmetic bonding is an affordable and, in most cases, reversible way to improve your smile in just one visit until you're ready to transition to a longer-lasting solution.
          </p>
          <p className="text-muted-foreground leading-relaxed text-lg mt-4">
            It uses tooth-colored high-end cosmetic composite to replace missing tooth structure or hide cosmetically unappealing minor defects in a tooth, such as chips, discoloration, and minor spacing irregularities. Because cosmetic bonding, also known as resin veneers, does not involve sending the case to the lab, the smile can usually be completed in just one visit!
          </p>
        </motion.div>
      </div>
    </PageLayout>
  );
}
