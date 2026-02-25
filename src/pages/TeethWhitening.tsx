import PageLayout from "@/components/PageLayout";
import { motion } from "framer-motion";
import { Sparkles, Clock, ShieldCheck, ThumbsUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const benefits = [
  {
    icon: Clock,
    title: "Instant Transformation",
    description: "Achieve a noticeably brighter smile in just a single one-hour office visit. Perfect for upcoming events or weddings."
  },
  {
    icon: ShieldCheck,
    title: "Professional Safety",
    description: "Administered by our experienced clinical team, ensuring both your comfort and enamel health are perfectly safeguarded."
  },
  {
    icon: Sparkles,
    title: "Lasting Brilliance",
    description: "Unlike over-the-counter options, our professional Zoom treatment maintains its stunning effects for up to a year with proper care."
  },
  {
    icon: ThumbsUp,
    title: "Zero Sensitivity Guarantee",
    description: "We utilize advanced desensitizing agents to ensure your whitening experience is entirely pain-free and comfortable."
  }
];

const steps = [
  {
    step: "01",
    title: "Pre-Treatment Examination",
    desc: "We perform a thorough evaluation and comprehensive cleaning to ensure your teeth are healthy and perfectly prepped for maximum whitening efficacy."
  },
  {
    step: "02",
    title: "Precision Gel Application",
    desc: "Our clinicians apply a specialized, professional-grade whitening gel, formulated to work safely with your enamel while aggressively targeting deep stains."
  },
  {
    step: "03",
    title: "Zoom Light Activation",
    desc: "We activate the gel using the advanced Zoom! LED light array over three 15-minute intervals. Simply lay back, put on noise-canceling headphones, and relax in our massage chairs."
  }
];

export default function TeethWhitening() {
  return (
    <PageLayout
      title="Professional Teeth Whitening"
      subtitle="Erase years of staining in a single visit. Experience Zoom! Whitening—a groundbreaking clinical treatment that safely lightens your teeth by up to eight shades in just one hour."
      breadcrumbs={[{ label: "Services", href: "/our-services" }, { label: "Teeth Whitening", href: "/teeth-whitening" }]}
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
              <span className="text-gold uppercase tracking-widest text-sm font-medium">Zoom! Whitening</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-heading font-semibold text-navy leading-tight mb-6">
              Radiant Confidence, <br/><span className="italic font-light">Instantly Restored.</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
              If you’ve experimented with over-the-counter whitening strips without achieving your desired results, it’s time to upgrade to a professional solution. Over-the-counter products often lack the necessary strength to lift deep, intrinsic stains caused by coffee, wine, or aging.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Our in-office Zoom! Whitening system is administered entirely by dental professionals, guaranteeing your utmost safety, comfort, and a dramatic transformation you can see immediately.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} 
            whileInView={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.6 }}
            viewport={{ once: true }} 
            className="order-1 lg:order-2 relative"
          >
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-border/50 bg-cream">
              {/* Fallback image */}
              <img src="/images/technology.jpg" alt="Teeth Whitening process" className="w-full h-full object-cover mix-blend-multiply" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-[40px] z-[-1]" />
          </motion.div>
        </div>

        {/* VIP Benefits Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          className="mb-24"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-semibold text-navy">The Austin Elite Difference</h2>
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

        {/* Treatment Process */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          className="max-w-4xl mx-auto mb-24"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-semibold text-navy mb-4">The VIP Process</h2>
            <p className="text-muted-foreground text-lg">A relaxing, spa-like pathway to your brightest smile.</p>
          </div>
          
          <div className="space-y-6">
            {steps.map((s, i) => (
              <motion.div 
                key={s.step} 
                initial={{ opacity: 0, x: -20 }} 
                whileInView={{ opacity: 1, x: 0 }} 
                viewport={{ once: true }} 
                transition={{ delay: i * 0.1 }} 
                className="flex flex-col md:flex-row gap-6 md:items-center bg-white p-8 rounded-2xl border border-border/50 shadow-sm"
              >
                <div className="w-16 h-16 rounded-full bg-navy text-white flex items-center justify-center flex-shrink-0 font-heading font-bold text-2xl">
                  {s.step}
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-xl text-navy mb-2">{s.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-md">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <div className="text-center max-w-2xl mx-auto pb-12">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-navy mb-6">Ready to brighten your smile?</h2>
          <Button asChild size="lg" className="bg-gold hover:bg-navy text-navy hover:text-white rounded-full px-10 h-14 text-base transition-colors">
            <Link to="/contact-us">
              Schedule Your Whitening Session
            </Link>
          </Button>
        </div>

      </div>
    </PageLayout>
  );
}
