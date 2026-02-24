import PageLayout from "@/components/PageLayout";
import { motion } from "framer-motion";

export default function DigitalWellnessScan() {
  return (
    <PageLayout
      title="3D Digital Wellness Scans"
      subtitle="Experience the future of dental care with our comprehensive Wellness Scan utilizing digital technology to generate a detailed 3D image."
      breadcrumbs={[{ label: "Services", href: "/our-services" }, { label: "3D Digital Wellness Scan", href: "/3d-digital-wellness-scan" }]}
    >
      <div className="container max-w-4xl">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">iTero 5D Scanner</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">The iTero scanner is cutting-edge dental technology that creates highly accurate digital impressions quickly and painlessly. Using a small handheld wand, we capture detailed 3D images with harmless laser light, processing thousands of images per second into a precise digital model in real-time.</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">Numerous Benefits</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">It eliminates the need for messy impression materials, making the process much more comfortable. Digital impressions are incredibly precise, ensuring a perfect fit for crowns, bridges, and aligners.</p>
          <p className="text-muted-foreground leading-relaxed">You can see your digital impressions in real-time, allowing you to visualize your treatment plan. Digital impressions can be easily stored, shared, and used for future reference.</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-primary/5 rounded-2xl p-8 text-center border border-primary/10">
          <h2 className="text-2xl font-heading font-bold mb-4">Get Your Wellness Scan</h2>
          <p className="text-muted-foreground">The iTero scanner streamlines the dental impression process. Schedule an appointment to get your 3D Digital Wellness Scan.</p>
        </motion.div>
      </div>
    </PageLayout>
  );
}
