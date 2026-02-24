import PageLayout from "@/components/PageLayout";
import { motion } from "framer-motion";
import { CheckCircle, CalendarCheck, Users, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const SCHEDULE_URL = "https://mychart.myoryx.com/online-schedule/index.html?realm=aes&univers=com";

const includes = [
  { title: "Professional Teeth Cleaning", desc: "We'll perform a gentle yet thorough teeth cleaning to help keep your pearly whites clean and healthy." },
  { title: "Comprehensive Exam and X-Rays", desc: "One of our team members will capture digital x-rays of your mouth to assess oral health concerns and provide our dentists with greater insight into your oral well-being." },
  { title: "iTero 3D Oral Wellness Scan", desc: "With the iTero 3D Wellness Scan wand, our dentists can generate a digital impression of your mouth, offering a comprehensive view of your smile from every angle." },
];

const features = [
  { icon: CalendarCheck, title: "Book Your Appointment Any Time", desc: "We offer online scheduling that fits into your busy lifestyle. We're always accepting new patients!" },
  { icon: Users, title: "Available for All Ages", desc: "From toddlers to seniors, everyone is welcome to take advantage of our $198 New Patient Special." },
  { icon: Sparkles, title: "Comfortable, Comprehensive Care", desc: "Your comfort and oral health are our top priorities. We provide expert care in a laid-back, relaxed, and judgment-free environment." },
];

export default function NewPatientSpecial() {
  return (
    <PageLayout
      title="New Patient Special"
      subtitle="For just $198, get an exam, cleaning, x-rays, wellness scan and complimentary whitening to achieve a confident smile."
      breadcrumbs={[{ label: "For Patients", href: "/for-patients" }, { label: "New Patient Special", href: "/new-patient-special" }]}
    >
      <div className="container">
        {/* Price Badge */}
        <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="text-center mb-16">
          <div className="inline-flex items-center gap-4 bg-primary/10 rounded-2xl px-8 py-6 border border-primary/20">
            <span className="text-5xl md:text-6xl font-heading font-bold text-primary">$198</span>
            <div className="text-left">
              <p className="font-heading font-semibold text-foreground">New Patient Special</p>
              <p className="text-sm text-muted-foreground">Exam + Cleaning + X-Rays + Scan + Whitening</p>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-4 max-w-md mx-auto">*New patients only, in the absence of periodontal disease needing scaling and root planing (deep cleaning). Fluoride not included.</p>
        </motion.div>

        {/* Complimentary Whitening */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-gold/10 rounded-2xl p-8 md:p-12 mb-16 text-center border border-gold/20">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">Complimentary Teeth Whitening For Life</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">Schedule now to get complimentary whitening for life after completing a new patient appointment including exam, x-rays and a healthy mouth cleaning with us!</p>
          <Button asChild size="lg" className="bg-primary hover:bg-teal-dark text-primary-foreground rounded-full px-8 h-14">
            <a href={SCHEDULE_URL} target="_blank" rel="noopener noreferrer">Book Now</a>
          </Button>
        </motion.div>

        {/* What's Included */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-center mb-10">$198 Special Offer Includes:</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {includes.map((item, i) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="max-w-2xl mx-auto mb-16">
          <h2 className="text-2xl font-heading font-bold text-center mb-8">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible>
            <AccordionItem value="costs">
              <AccordionTrigger className="font-heading font-semibold">Will There Be Any Additional Costs at My First Visit?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">Nope! We hate hidden fees just as much as you do. As long as you qualify for our $198 New Patient Special, you won't have to pay any additional costs.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="after">
              <AccordionTrigger className="font-heading font-semibold">What Happens After My First Visit?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">Depending on your situation, you may be asked to schedule follow-up treatment or another six-month dental exam. There's no commitment, though! We also offer an in-house dental membership plan that covers preventive care and offers discounts on additional dental work.</AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div key={f.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center p-6 bg-background rounded-2xl border border-border/50">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </PageLayout>
  );
}
