import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

interface ServiceDetailProps {
  title: string;
  description: string;
  imagePosition?: "left" | "right";
  imageSrc?: string;
  benefits?: string[];
  index?: number;
}

export default function ServiceDetailSection({ title, description, imagePosition = "right", imageSrc, benefits, index = 0 }: ServiceDetailProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="mb-16 last:mb-0"
    >
      <div className={`grid md:grid-cols-2 gap-12 items-center ${imagePosition === "left" ? "md:flex-row-reverse" : ""}`}>
        <div className={imagePosition === "left" ? "md:order-2" : ""}>
          <h3 className="text-sm font-medium text-primary uppercase tracking-widest mb-2">Service</h3>
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">{title}</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">{description}</p>
          {benefits && benefits.length > 0 && (
            <ul className="space-y-3">
              {benefits.map((b, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/80">{b}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
        {imageSrc && (
          <div className={`${imagePosition === "left" ? "md:order-1" : ""} rounded-2xl overflow-hidden bg-muted aspect-[4/3]`}>
            <img src={imageSrc} alt={title} className="w-full h-full object-cover" />
          </div>
        )}
      </div>
    </motion.div>
  );
}
