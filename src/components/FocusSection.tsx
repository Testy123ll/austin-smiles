import { motion } from "framer-motion";
import { MessageCircle, Heart, Clock, Microscope } from "lucide-react";

const focuses = [
  {
    icon: MessageCircle,
    title: "Clear Communication",
    desc: "Our dedicated team ensures transparent communication, providing all necessary information about your care well in advance, allowing ample time for questions. No surprises, guaranteed.",
  },
  {
    icon: Heart,
    title: "Patient-Centered Care",
    desc: "We recognize that your path to wellness is unique and personal, your treatment options should be as well! Wherever you are on your health journey, we're committed to providing you with the best dental experience possible.",
  },
  {
    icon: Clock,
    title: "We Respect & Value Your Time",
    desc: "We value your time, just as much as we value your health. Our team ensures that appointments are scheduled with generous time allocations, guaranteeing quality care without rushing.",
  },
  {
    icon: Microscope,
    title: "Science-Based Materials & Technology",
    desc: "We're dedicated to enhancing your experience and level of care through evidence-based dentistry, trusted materials, supplies, labs and ongoing investment in dental technology.",
  },
];

export default function FocusSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground">Our Focus</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {focuses.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center group"
              >
                <div className="w-16 h-16 mx-auto rounded-2xl bg-gold/10 flex items-center justify-center mb-5 group-hover:bg-primary transition-colors duration-300">
                  <Icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-lg font-heading font-semibold text-foreground mb-3">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
