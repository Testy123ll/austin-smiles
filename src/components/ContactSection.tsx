import { motion } from "framer-motion";
import { MapPin, Clock, Phone, Mail, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const SCHEDULE_URL = "https://mychart.myoryx.com/online-schedule/index.html?realm=aes&univers=com";

const hours = [
  { day: "Monday", time: "8:00 AM – 5:00 PM" },
  { day: "Tuesday", time: "8:00 AM – 5:00 PM" },
  { day: "Wednesday", time: "8:00 AM – 5:00 PM" },
  { day: "Thursday", time: "9:00 AM – 5:00 PM" },
  { day: "Friday", time: "8:00 AM – 5:00 PM" },
  { day: "Saturday", time: "Closed" },
  { day: "Sunday", time: "Closed" },
];

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            Your Austin Dentist, Conveniently Located
          </h2>
          <p className="text-muted-foreground">
            Proudly serving Austin, North Austin, Avery Ranch, Cedar Park, Leander, Round Rock, and Georgetown
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 bg-cream rounded-2xl"
          >
            <h3 className="font-heading font-semibold text-xl text-foreground mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <p className="text-sm text-foreground">15004 Avery Ranch Blvd, Building B, Suite 100, Austin, TX 78717</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="tel:5128663800" className="text-sm text-foreground hover:text-primary transition-colors">
                  (512) 866-3800
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="mailto:office@austinelitesmiles.com" className="text-sm text-foreground hover:text-primary transition-colors">
                  office@austinelitesmiles.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3 mt-6 pt-6 border-t border-border">
              <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <p className="text-sm text-foreground">Convenient location with easy parking</p>
            </div>
            <div className="flex items-start gap-3 mt-3">
              <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <p className="text-sm text-foreground">Friendly, knowledgeable front office team</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-8 bg-cream rounded-2xl"
          >
            <h3 className="font-heading font-semibold text-xl text-foreground mb-6 flex items-center gap-2">
              <Clock className="w-5 h-5 text-primary" /> Office Hours
            </h3>
            <div className="space-y-3">
              {hours.map((h) => (
                <div key={h.day} className="flex justify-between text-sm">
                  <span className="text-foreground font-medium">{h.day}</span>
                  <span className={h.time === "Closed" ? "text-muted-foreground" : "text-foreground"}>{h.time}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col justify-center items-center p-8 bg-primary rounded-2xl text-primary-foreground text-center"
          >
            <h3 className="font-heading font-semibold text-2xl mb-4">Ready to Get Started?</h3>
            <p className="text-primary-foreground/80 mb-6 text-sm">
              Book your appointment online or give us a call — we'd love to welcome you.
            </p>
            <div className="space-y-3 w-full max-w-xs">
              <Button asChild size="lg" className="w-full bg-white text-primary hover:bg-white/90 rounded-full font-semibold">
                <a href={SCHEDULE_URL} target="_blank" rel="noopener noreferrer">Schedule Online</a>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full border-white/30 text-white hover:bg-white/10 rounded-full">
                <a href="tel:5128663800">Call (512) 866-3800</a>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full border-white/30 text-white hover:bg-white/10 rounded-full">
                <a href="https://c.moolah.cc/austinelitesmiles" target="_blank" rel="noopener noreferrer">Pay Bill</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
