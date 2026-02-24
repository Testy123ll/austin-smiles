import PageLayout from "@/components/PageLayout";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const SCHEDULE_URL = "https://mychart.myoryx.com/online-schedule/index.html?realm=aes&univers=com";

const packageIncludes = [
  "4 sets of Viviera Retainers",
  "Refinements",
  "Whitening gels to use in trays to whiten while you straighten",
];

export default function Invisalign() {
  return (
    <PageLayout
      title="Invisalign® at Austin Elite Smiles"
      subtitle="Achieving a straighter, healthier smile no longer means enduring bulky metal braces. With Invisalign®, you can attain the smile you've always desired without anyone even noticing."
      breadcrumbs={[{ label: "Services", href: "/our-services" }, { label: "Invisalign®", href: "/invisalign" }]}
    >
      <div className="container max-w-4xl">
        {/* Gold Plus Provider */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-gold/10 rounded-2xl p-8 text-center mb-16 border border-gold/20">
          <h3 className="font-heading font-bold text-xl text-foreground mb-2">Gold Plus Provider</h3>
          <p className="text-muted-foreground">We are proud to be a Gold Plus Provider with Invisalign, placing Austin Elite Smiles among the top practices in the industry.</p>
        </motion.div>

        {/* Why Invisalign */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">Why Invisalign®?</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Are you fed up with feeling self-conscious about your smile? Seeking a more discreet option for straightening your teeth? Invisalign® aligners consist of durable plastic trays that gently guide your teeth into alignment. They're virtually invisible, comfortable, and removable, enabling you to eat and brush your teeth without any hassle.</p>
          <div className="bg-muted/50 rounded-xl p-6 border border-border/50">
            <p className="text-sm font-medium text-primary">DID YOU KNOW...</p>
            <p className="text-foreground/80">Invisalign® aligners are made from a thermoplastic material that's BPA-free.</p>
          </div>
        </motion.div>

        {/* Health Benefits */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">Health Benefits of Invisalign®</h2>
          <p className="text-muted-foreground leading-relaxed">Beyond achieving a straighter smile, Invisalign® reduces the risk of gum disease, tooth decay, and jaw problems. Improved dental alignment promotes better oral hygiene practices, as straighter teeth are easier to clean and maintain. You're not just enhancing your smile; you're investing in your long-term oral health.</p>
        </motion.div>

        {/* First Visit */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">Your First Visit</h2>
          <p className="text-muted-foreground leading-relaxed">Before beginning your Invisalign® journey, it's essential to undergo a thorough dental examination. We'll take scans of your teeth to generate precise digital 3D models of your mouth. Invisalign® labs use these models to map out your tooth movement and fabricate your custom alignment trays.</p>
        </motion.div>

        {/* Special Offers */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-primary/5 rounded-2xl p-8 md:p-12 mb-16 border border-primary/10">
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">Special Invisalign® Offers</h2>
          <p className="text-muted-foreground mb-6">Discover the smile you've always dreamed of with a complimentary consultation. For a limited time, enjoy exclusive savings on your Invisalign® treatment.</p>
          <h3 className="font-heading font-semibold mb-4">Our Comprehensive Package Includes:</h3>
          <ul className="space-y-3 mb-6">
            {packageIncludes.map((p) => (
              <li key={p} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-foreground/80">{p}</span>
              </li>
            ))}
          </ul>
          <Button asChild size="lg" className="bg-primary hover:bg-teal-dark text-primary-foreground rounded-full px-8 h-14">
            <a href={SCHEDULE_URL} target="_blank" rel="noopener noreferrer">Book Now</a>
          </Button>
        </motion.div>

        {/* SmileView */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">Try the Invisalign® SmileView Technology</h2>
          <p className="text-muted-foreground mb-6">Take a smiling selfie and see what Invisalign® can do for you.</p>
          <Button asChild variant="outline" size="lg" className="rounded-full px-8 h-14">
            <a href="https://providerbio.invisalign.com/sv/c19458995#start" target="_blank" rel="noopener noreferrer">Try It Now</a>
          </Button>
        </motion.div>
      </div>
    </PageLayout>
  );
}
