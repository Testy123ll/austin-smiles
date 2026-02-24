import PageLayout from "@/components/PageLayout";
import { motion } from "framer-motion";
import { Shield, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const healthyPlan = {
  name: "Healthy Mouth Wellness Plan",
  price: "$42/mo.",
  benefits: [
    "2 routine cleanings per year",
    "2 check-up exams",
    "1 set of routine X-rays per year",
    "1 problem focused exam with X-ray per year",
    "2 Fluoride treatments a year",
    "Annual Oral Cancer Screening",
    "3D dental wellness scans",
  ],
  discounts: [
    "15% off fillings, crowns, preventative, restorative treatment",
    "15% off Perio Protect",
    "10% off Invisalign and Cosmetic Services",
  ],
};

const perioPlan = {
  name: "Perio Wellness Plan",
  price: "$64/mo.",
  benefits: [
    "3-4 Perio Maintenance cleanings",
    "2 check-up exams",
    "1 set of routine X-rays per year",
    "Gingival Irrigation",
    "1 problem exam with X-ray per year",
    "2 Fluoride treatments",
    "Annual Oral Cancer Screening",
    "3D dental wellness scans",
  ],
  discounts: [
    "15% off Scaling and Root Planing",
    "15% off fillings, crowns, preventative, restorative treatment",
    "15% off Perio Protect",
    "10% off Invisalign & Cosmetic Services",
  ],
};

const noBenefits = [
  "Yearly Maximums",
  "Claim Forms",
  "Waiting Periods",
  "Deductibles",
  "Pre-Existing Conditions Limitations",
  "Pre-Authorization Requirements",
];

export default function SmileWellnessPlan() {
  return (
    <PageLayout
      title="Smile Wellness Plan"
      subtitle="No Insurance? We Can Help! Affordable membership plans tailored to meet your dental needs and budget."
      breadcrumbs={[{ label: "For Patients", href: "/for-patients" }, { label: "Smile Wellness Plan", href: "/smile-wellness-plan" }]}
    >
      <div className="container">
        {/* Intro */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-muted-foreground text-lg leading-relaxed">
            At Austin Elite Smiles, we are committed to providing top-quality dental care without breaking the bank. That's why we've created an affordable membership plan tailored to meet both your dental needs and your budget.
          </p>
        </motion.div>

        {/* Plan Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20">
          {[healthyPlan, perioPlan].map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-background rounded-2xl border border-border/50 p-8 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-xl text-foreground">{plan.name}</h3>
                  <p className="text-2xl font-bold text-primary">{plan.price}</p>
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">Benefits:</h4>
                <ul className="space-y-2">
                  {plan.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground/80">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">Discounts:</h4>
                <ul className="space-y-2">
                  {plan.discounts.map((d) => (
                    <li key={d} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                      <span className="text-foreground/80">{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* No Hassle Benefits */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-center mb-4">Joining is Simple</h2>
          <p className="text-center text-muted-foreground mb-12">Benefits include:</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {noBenefits.map((benefit) => (
              <div key={benefit} className="flex items-center gap-3 p-4 bg-background rounded-xl border border-border/50">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                <div>
                  <span className="font-bold text-primary text-lg">NO</span>
                  <p className="text-sm font-medium text-foreground/80 uppercase">{benefit}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </PageLayout>
  );
}
