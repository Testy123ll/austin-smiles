import PageLayout from "@/components/PageLayout";
import { motion } from "framer-motion";
import { CheckCircle, Award, Smile, ShieldCheck, HeartPulse } from "lucide-react";
import { Button } from "@/components/ui/button";

const SCHEDULE_URL = "https://mychart.myoryx.com/online-schedule/index.html?realm=aes&univers=com";

const packageIncludes = [
  "4 sets of Vivera® Retainers",
  "Unlimited Refinements",
  "Premium whitening gels to use in trays to whiten while you straighten",
];

const benefits = [
  {
    icon: Smile,
    title: "Virtually Invisible",
    description: "Clear plastic trays that seamlessly blend with your natural smile, allowing you to undergo treatment discreetly."
  },
  {
    icon: Award,
    title: "Unmatched Comfort",
    description: "Custom-crafted from smooth, BPA-free thermoplastic. No sharp metal brackets or poking wires."
  },
  {
    icon: ShieldCheck,
    title: "Removable Convenience",
    description: "Easily remove your aligners to enjoy your favorite foods, brush, and floss without any restrictions."
  },
  {
    icon: HeartPulse,
    title: "Holistic Health",
    description: "Straighter teeth are easier to clean, significantly reducing the risk of gum disease and tooth decay."
  }
];

export default function Invisalign() {
  return (
    <PageLayout
      title="Invisalign® Clear Aligners"
      subtitle="Achieving a beautifully straight, healthy smile no longer means enduring bulky metal braces. Seamlessly align your teeth with the ultimate discreet aesthetic treatment."
      breadcrumbs={[{ label: "Services", href: "/our-services" }, { label: "Invisalign®", href: "/invisalign" }]}
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
              <span className="text-gold uppercase tracking-widest text-sm font-medium">Gold Plus Provider</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-heading font-semibold text-navy leading-tight mb-6">
              The Clear Choice for <br/><span className="italic font-light">Discreet Alignment</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
              Are you fed up with feeling self-conscious about your smile but seeking a more refined option than traditional metal braces? Invisalign® gently and accurately guides your teeth into perfect alignment using a series of custom, durable plastic trays.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg">
              As a proud Gold Plus Provider, Austin Elite Smiles ranks among the top practices in the industry. We use advanced 3D scanning technology to map your entire treatment journey before you even wear your first tray.
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
              {/* Fallback image if real one isn't available, using a placeholder for Invisalign */}
              <img src="/images/technology.jpg" alt="Invisalign Clear Aligners" className="w-full h-full object-cover mix-blend-multiply" />
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
            <h2 className="text-3xl font-heading font-semibold text-navy">The Premium Invisalign® Experience</h2>
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

        {/* Special Package Module */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          className="bg-navy text-white rounded-3xl p-10 md:p-16 text-center shadow-xl relative overflow-hidden mb-24"
        >
          {/* Subtle Background Pattern */}
          <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://transparenttextures.com/patterns/stardust.png')]" />
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Exclusive Invisalign® Package</h2>
            <p className="text-cream/80 text-lg mb-8 font-light">
              Discover the smile you've always dreamed of. For a limited time, enjoy exclusive savings on your comprehensive Invisalign® treatment.
            </p>
            
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 mb-10 text-left w-full md:w-3/4 mx-auto backdrop-blur-sm">
              <h3 className="font-heading font-semibold text-gold mb-6 text-xl border-b border-white/10 pb-4">Our Comprehensive Package Includes:</h3>
              <ul className="space-y-4">
                {packageIncludes.map((p, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-gold flex-shrink-0" />
                    <span className="text-white/90 text-lg">{p}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gold hover:bg-white text-navy rounded-full px-8 h-14 text-base transition-colors">
                <a href={SCHEDULE_URL} target="_blank" rel="noopener noreferrer">
                  Book Your Complimentary Consultation
                </a>
              </Button>
            </div>
          </div>
        </motion.div>

        {/* SmileView Tech */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          className="text-center max-w-2xl mx-auto"
        >
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Smile className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-navy mb-4">Preview Your Future Smile</h2>
          <p className="text-muted-foreground mb-8 text-lg">
            Curious about the results? Take a smiling selfie and use the Invisalign® SmileView™ Technology to see what your new smile could look like instantly.
          </p>
          <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-white rounded-full px-10 h-14 text-base">
            <a href="https://providerbio.invisalign.com/sv/c19458995#start" target="_blank" rel="noopener noreferrer">
              Try SmileView™ Now
            </a>
          </Button>
        </motion.div>

      </div>
    </PageLayout>
  );
}
