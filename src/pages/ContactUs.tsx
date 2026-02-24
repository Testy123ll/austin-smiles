import PageLayout from "@/components/PageLayout";
import { motion } from "framer-motion";
import { Phone, MapPin, Clock, Mail } from "lucide-react";

export default function ContactUs() {
  return (
    <PageLayout
      title="Contact Us"
      subtitle="To request an appointment or for general inquiries, please reach out."
      breadcrumbs={[{ label: "Contact Us", href: "/contact-us" }]}
      showCTA={false}
    >
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Info */}
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <p className="text-muted-foreground leading-relaxed mb-8">A healthy, beautiful smile can make all the difference. We are open and available to answer questions and schedule appointments.</p>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold mb-1">Phone</h3>
                  <a href="tel:5128663800" className="text-primary hover:underline">512-866-3800</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold mb-1">Address</h3>
                  <p className="text-muted-foreground">15004 Avery Ranch Blvd., Bldg B, Suite 100, Austin, TX 78717</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold mb-1">Hours</h3>
                  <p className="text-muted-foreground">M-W, F: 8:00am-5:00pm</p>
                  <p className="text-muted-foreground">Thurs: 9:00am-5:00pm</p>
                  <p className="text-muted-foreground">Sat-Sun: Closed</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold mb-1">Email</h3>
                  <a href="mailto:office@austinelitesmiles.com" className="text-primary hover:underline">office@austinelitesmiles.com</a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="rounded-2xl overflow-hidden border border-border/50 h-full min-h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3440.5!2d-97.7498!3d30.3092!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644d2b720c0d73d%3A0x4f11d603cf5ecfb9!2sAustin%20Elite%20Smiles!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "400px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Austin Elite Smiles Location"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </PageLayout>
  );
}
