import PageLayout from "@/components/PageLayout";
import { motion } from "framer-motion";
import { CreditCard, Calculator, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const cherryFeatures = [
  "No hard credit checks, ever",
  "True 0% APR options available",
  "Interest-bearing plans with APRs as low as 5.99%",
  "No hidden fees",
  "60 seconds to apply",
];

export default function PaymentPlans() {
  return (
    <PageLayout
      title="Payment Plans & Financing"
      subtitle="Quality dental care is an essential investment in your health. We've collaborated with reputable healthcare lenders to provide flexible payment plans."
      breadcrumbs={[{ label: "For Patients", href: "/for-patients" }, { label: "Payment Plans", href: "/payment-plans" }]}
    >
      <div className="container">
        {/* Cherry */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-4xl mx-auto mb-20">
          <div className="bg-background rounded-2xl border border-border/50 p-8 md:p-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                <CreditCard className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-heading font-bold">Cherry Financing</h2>
                <p className="text-muted-foreground">Treat Now, Pay Later</p>
              </div>
            </div>
            <ul className="space-y-3 mb-8">
              {cherryFeatures.map((f) => (
                <li key={f} className="flex items-center gap-3">
                  <ShieldCheck className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground/80">{f}</span>
                </li>
              ))}
            </ul>
            <h3 className="font-heading font-semibold text-lg mb-4">How Cherry Works</h3>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {[
                { step: "1", title: "See If You Qualify", desc: "It only takes 60 seconds to complete the application" },
                { step: "2", title: "Get Care", desc: "Use your approval to pay for your treatment" },
                { step: "3", title: "Pay Over Time", desc: "Choose a plan length that fits your needs with 0% APR options" },
              ].map((s) => (
                <div key={s.step} className="text-center p-4 bg-muted/50 rounded-xl">
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-3 font-bold">{s.step}</div>
                  <h4 className="font-heading font-semibold mb-1">{s.title}</h4>
                  <p className="text-sm text-muted-foreground">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CareCredit */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-4xl mx-auto">
          <div className="bg-background rounded-2xl border border-border/50 p-8 md:p-12 text-center">
            <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mx-auto mb-4">
              <Calculator className="w-7 h-7 text-gold" />
            </div>
            <h2 className="text-2xl font-heading font-bold mb-4">CareCredit</h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">Try the CareCredit payment calculator to find out what your estimated monthly payments could be.</p>
            <Button asChild size="lg" className="bg-primary hover:bg-navy/90 text-primary-foreground rounded-full px-8 h-14">
              <a href="https://www.carecredit.com/payment_calculator/" target="_blank" rel="noopener noreferrer">Calculate My Payment</a>
            </Button>
          </div>
        </motion.div>
      </div>
    </PageLayout>
  );
}
