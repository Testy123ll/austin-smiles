import { motion } from "framer-motion";
import { Coffee, Headphones, Sparkles, Wind } from "lucide-react";

export default function ExperienceSection() {
  const experiences = [
    {
      title: "Curated Beverage Bar",
      description: "Enjoy a selection of premium coffees, sparkling waters, and teas while you relax in our lounge.",
      icon: Coffee,
    },
    {
      title: "Noise-Canceling Audio",
      description: "Escape into your own world with complimentary noise-canceling headphones and a selection of music or podcasts.",
      icon: Headphones,
    },
    {
      title: "Massage Chairs",
      description: "Melt tension away during your treatment with our plush, built-in massage dental chairs.",
      icon: Wind,
    },
    {
      title: "Warm Towel Service",
      description: "Conclude your visit with a soothing, lavender-infused warm towel to refresh and rejuvenate.",
      icon: Sparkles,
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-cream">
      <div className="container max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden rounded-t-full shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80" 
                alt="Spa-like dental experience" 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 lg:-right-12 bg-white p-6 md:p-8 shadow-xl max-w-[240px] md:max-w-[280px] rounded-bl-3xl rounded-tr-3xl">
              <p className="font-heading italic text-xl text-navy">
                "Not just a dental visit, an escape."
              </p>
              <div className="mt-4 flex gap-1 text-gold">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.7"></path>
                  </svg>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px bg-gold w-12" />
              <p className="text-gold font-medium tracking-[0.2em] uppercase text-sm">
                The AES Experience
              </p>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-semibold text-navy leading-tight mb-6">
              Spa-Level Comfort, <br/><span className="italic font-light text-navy/70">Exceptional Care</span>
            </h2>
            <p className="text-lg font-light text-navy/80 leading-relaxed mb-12">
              We believe that visiting the dentist should be a relaxing and rejuvenating experience. Our practice is designed to be a sanctuary where you can unwind while receiving the highest quality of cosmetic and restorative clinical care.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {experiences.map((exp, i) => (
                <div key={i} className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/50 transition-colors border border-transparent hover:border-gold/10">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <exp.icon className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg text-navy mb-2">{exp.title}</h3>
                    <p className="text-sm text-navy/70 leading-relaxed">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
