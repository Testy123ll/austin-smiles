import { motion } from "framer-motion";

const doctors = [
  { 
    name: "Dr. Elizabeth Lowery", 
    role: "AACD-Accredited Cosmetic Dentist", 
    image: "/images/doctor-1.jpg",
    credentials: "DDS, FAACD"
  },
  { 
    name: "Dr. Kasey Lowrance", 
    role: "Partner & General Dentist", 
    image: "/images/doctor-2.jpg",
    credentials: "DMD"
  },
  { 
    name: "Dr. David Myhre", 
    role: "Associate Dentist & Military Veteran", 
    image: "/images/doctor-3.jpg",
    credentials: "DDS"
  },
  { 
    name: "Dr. Chad Orlich", 
    role: "Board-Certified Periodontist", 
    image: "/images/doctor-4.jpg",
    credentials: "DDS, MS"
  },
];

const logos = [
  { src: "/images/ada-logo.png", alt: "American Dental Association" },
  { src: "/images/aaca-logo.png", alt: "American Academy of Clear Aligners" },
  { src: "/images/bbb-logo.png", alt: "BBB Accredited Business" },
  { src: "/images/tda-logo.png", alt: "Texas Dental Association" },
];

export default function DoctorsSection() {
  return (
    <section id="doctors" className="py-16 md:py-24 bg-cream overflow-hidden">
      <div className="container max-w-7xl">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-xl"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px bg-gold w-8" />
              <span className="text-gold uppercase tracking-widest text-sm font-medium"> Clinical Excellence</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-semibold text-navy leading-tight">
              Meet The <span className="italic font-light">Doctors</span>
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex gap-6 opacity-60 grayscale"
          >
            {/* Displaying one or two key logos for authority next to header */}
             <img src="/images/ada-logo.png" alt="ADA" className="h-10 w-auto object-contain" />
             <img src="/images/aaca-logo.png" alt="AACA" className="h-10 w-auto object-contain" />
          </motion.div>
        </div>

        {/* Doctors Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-20">
          {doctors.map((doc, i) => (
            <motion.div
              key={doc.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl mb-6 aspect-[3/4] bg-navy/5">
                <img
                  src={doc.image}
                  alt={doc.name}
                  className="w-full h-full object-cover grayscale mix-blend-multiply transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105 group-hover:mix-blend-normal"
                />
                
                {/* Overlay Gradient on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Credentials pop up on hover */}
                <div className="absolute bottom-6 left-6 right-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md text-white text-xs font-semibold rounded-full border border-white/30">
                    {doc.credentials}
                  </span>
                </div>
              </div>
              
              <div className="text-center md:text-left px-2">
                <h3 className="text-2xl font-heading font-semibold text-navy mb-1">{doc.name}</h3>
                <p className="text-sm font-light text-navy/70 leading-relaxed">{doc.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Association Logos Footer */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border-t border-navy/10 pt-12 text-center"
        >
          <p className="text-sm text-navy/50 tracking-widest uppercase font-medium mb-8">Proudly Affiliated With</p>
          <div className="flex justify-center items-center gap-8 md:gap-16 flex-wrap">
            {logos.map((logo, i) => (
              <img 
                key={i} 
                src={logo.src} 
                alt={logo.alt} 
                className="h-10 md:h-12 w-auto object-contain grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300" 
              />
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
