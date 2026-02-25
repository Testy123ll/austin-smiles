import PageLayout from "@/components/PageLayout";
import { motion } from "framer-motion";
import { ScanFace, Zap, Eye, Database } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const benefits = [
  {
    icon: Zap,
    title: "Mess-Free & Comfortable",
    description: "Eliminates the need for gooey, uncomfortable impression materials, making your visit significantly more pleasant."
  },
  {
    icon: ScanFace,
    title: "Incredible Precision",
    description: "Digital impressions provide unmatched accuracy, ensuring a perfect, custom fit for crowns, bridges, and Invisalign aligners."
  },
  {
    icon: Eye,
    title: "Real-Time Visualization",
    description: "See your digital impressions instantly on-screen, allowing you to visualize your treatment plan alongside our experts."
  },
  {
    icon: Database,
    title: "Seamless Record Keeping",
    description: "Your 3D scans are securely stored digitally and can be easily shared or used for future reference and continuity of care."
  }
];

export default function DigitalWellnessScan() {
  return (
    <PageLayout
      title="3D Digital Wellness Scans"
      subtitle="Experience the future of personalized dental care. Our comprehensive 3D Wellness Scan utilizes state-of-the-art iTero technology to generate a detailed, interactive model of your oral health."
      breadcrumbs={[{ label: "Services", href: "/our-services" }, { label: "3D Digital Wellness Scan", href: "/3d-digital-wellness-scan" }]}
    >
      <div className="container max-w-6xl">
        
        {/* Main Feature Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }} 
            className="order-2 lg:order-1"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px bg-gold w-8" />
              <span className="text-gold uppercase tracking-widest text-sm font-medium">iTero 5D Scanner</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-heading font-semibold text-navy leading-tight mb-6">
              Precision Mapping for <br/><span className="italic font-light">Perfect Smiles</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
              The iTero scanner is cutting-edge dental technology that creates highly accurate digital impressions quickly and painlessly. 
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Using a small, ergonomic handheld wand, we capture detailed 3D images with harmless optical light. By processing thousands of images per second, we build a precise digital model of your teeth in real-time—giving us the ultimate blueprint for your aesthetic or restorative treatment.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} 
            whileInView={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.6 }}
            viewport={{ once: true }} 
            className="order-1 lg:order-2 relative"
          >
            <div className="aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-border/50 bg-cream">
              {/* Fallback image if real one isn't available, using a placeholder layout */}
              <img src="/images/technology.jpg" alt="iTero 3D Scanner in action" className="w-full h-full object-cover mix-blend-multiply" />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gold/10 rounded-full blur-[40px] z-[-1]" />
          </motion.div>
        </div>

        {/* Benefits Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          className="mb-24"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-semibold text-navy">The VIP Experience: Unmatched Benefits</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card border border-border/50 p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-navy/5 rounded-full flex items-center justify-center mb-6 group-hover:bg-gold/10 transition-colors">
                  <benefit.icon className="w-6 h-6 text-navy group-hover:text-gold transition-colors" />
                </div>
                <h3 className="text-xl font-heading font-medium text-foreground mb-3">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action Module */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          className="bg-navy text-white rounded-3xl p-10 md:p-16 text-center shadow-xl relative overflow-hidden"
        >
          {/* Subtle Background Pattern */}
          <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://transparenttextures.com/patterns/stardust.png')]" />
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Discover Your Diagnostic Baseline</h2>
            <p className="text-cream/80 text-lg mb-10 font-light">
              The iTero scanner entirely streamlines the dental impression and diagnostic process. Schedule an appointment today to get a crystal-clear, 3D Digital Wellness Scan and begin your journey to an elite smile.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gold hover:bg-white text-navy rounded-full px-8 h-14 text-base transition-colors">
                <a href="https://mychart.myoryx.com/online-schedule/index.html?realm=aes&univers=com" target="_blank" rel="noopener noreferrer">
                  Book Your Scan Now
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-cream/20 text-cream hover:bg-cream/10 rounded-full px-8 h-14 text-base backdrop-blur-sm transition-colors">
                <Link to="/contact-us">
                  Contact Our Clinic
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>

      </div>
    </PageLayout>
  );
}
