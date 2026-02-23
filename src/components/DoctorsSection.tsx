import { motion } from "framer-motion";

const doctors = [
  { name: "Dr. Elizabeth Lowery", role: "AACD-Accredited Cosmetic Dentist", image: "/images/doctor-1.jpg" },
  { name: "Dr. Kasey Lowrance", role: "Partner & General Dentist", image: "/images/doctor-2.jpg" },
  { name: "Dr. David Myhre", role: "Associate Dentist & Military Veteran", image: "/images/doctor-3.jpg" },
  { name: "Dr. Chad Orlich", role: "Board-Certified Periodontist", image: "/images/doctor-4.jpg" },
];

const logos = [
  { src: "/images/ada-logo.png", alt: "American Dental Association" },
  { src: "/images/aaca-logo.png", alt: "American Academy of Clear Aligners" },
  { src: "/images/bbb-logo.png", alt: "BBB Accredited Business" },
  { src: "/images/tda-logo.png", alt: "Texas Dental Association" },
];

export default function DoctorsSection() {
  return (
    <section id="doctors" className="py-24 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-4"
        >
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">Our Team</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground">
            Meet The Doctors
          </h2>
        </motion.div>

        <div className="flex justify-center items-center gap-8 flex-wrap mb-16 mt-8">
          {logos.map((logo, i) => (
            <img key={i} src={logo.src} alt={logo.alt} className="h-16 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity" />
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {doctors.map((doc, i) => (
            <motion.div
              key={doc.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group text-center"
            >
              <div className="relative overflow-hidden rounded-2xl mb-5 aspect-[3/4]">
                <img
                  src={doc.image}
                  alt={doc.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-foreground">{doc.name}</h3>
              <p className="text-sm text-muted-foreground mt-1">{doc.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
