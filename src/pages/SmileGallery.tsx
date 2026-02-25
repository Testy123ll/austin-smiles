import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const allCases = [
  { 
    before: "/images/before-1.png", 
    after: "/images/after-1.png",
    category: "Veneers",
    description: "Complete smile makeover using porcelain veneers to correct discoloration and alignment."
  },
  { 
    before: "/images/before-2.jpg", 
    after: "/images/after-2.jpg",
    category: "Invisalign",
    description: "Orthodontic correction of crowding using clear aligners over 12 months."
  },
  { 
    before: "/images/before-3.jpg", 
    after: "/images/after-3.jpg",
    category: "Composite Bonding",
    description: "Restored chipped front teeth seamlessly with tooth-colored composite bonding."
  },
  { 
    before: "/images/before-1.png", // Using existing as placeholder
    after: "/images/after-1.png",
    category: "Whitening",
    description: "Professional in-office whitening treatment for a brighter, more youthful smile."
  },
  { 
    before: "/images/before-2.jpg", 
    after: "/images/after-2.jpg",
    category: "Dental Implants",
    description: "Replaced missing teeth with natural-looking dental implants."
  },
  { 
    before: "/images/before-3.jpg", 
    after: "/images/after-3.jpg",
    category: "Full Mouth Reconstruction",
    description: "Comprehensive restorative and cosmetic treatments for optimal health and aesthetics."
  },
];

export default function SmileGallery() {
  const [sliderPos, setSliderPos] = useState<number[]>(Array(allCases.length).fill(50));
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Veneers", "Invisalign", "Composite Bonding", "Whitening", "Dental Implants"];

  const handleSlider = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const newPos = [...sliderPos];
    newPos[index] = Number(e.target.value);
    setSliderPos(newPos);
  };

  const filteredCases = activeCategory === "All" 
    ? allCases 
    : allCases.filter(c => c.category === activeCategory);

  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <div className="container">
        <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-primary mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
        </Link>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">Our Work</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6">
            Smile Gallery
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our portfolio of life-changing smile transformations. See real results from real patients who trusted Austin Elite Smiles with their care.
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCases.map((c, i) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              key={`${c.category}-${i}`}
              className="group bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-border/50"
            >
              {/* Slider Component */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={c.after} alt="After treatment" className="absolute inset-0 w-full h-full object-cover" />
                <div
                  className="absolute inset-0 overflow-hidden"
                  style={{ width: `${sliderPos[allCases.indexOf(c)]}%` }}
                >
                  <img src={c.before} alt="Before treatment" className="absolute inset-0 w-full h-full object-cover" style={{ minWidth: `${100 / (sliderPos[allCases.indexOf(c)] / 100)}%` }} />
                </div>
                
                {/* Slider Handle */}
                <div
                  className="absolute top-0 bottom-0 w-0.5 bg-white shadow-lg pointer-events-none z-10"
                  style={{ left: `${sliderPos[allCases.indexOf(c)]}%` }}
                >
                  <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white shadow-lg flex items-center justify-center">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                      <polyline points="15 18 9 12 15 6" />
                      <polyline points="9 18 15 12 9 6" className="rotate-180" />
                    </svg>
                  </div>
                </div>
                
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={sliderPos[allCases.indexOf(c)]}
                  onChange={(e) => handleSlider(allCases.indexOf(c), e)}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20"
                />
                
                {/* Labels */}
                <div className="absolute top-3 left-3 bg-foreground/80 backdrop-blur-sm text-background text-xs px-2 py-1 rounded-sm font-medium shadow-sm">Before</div>
                <div className="absolute top-3 right-3 bg-primary text-primary-foreground text-xs px-2 py-1 rounded-sm font-medium shadow-sm">After</div>
              </div>

              {/* Description */}
              <div className="p-6">
                <div className="inline-block px-3 py-1 mb-3 text-xs font-semibold text-primary bg-primary/10 rounded-full">
                  {c.category}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {c.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        
        {filteredCases.length === 0 && (
          <div className="text-center py-20 text-muted-foreground">
            No transformations found for this category yet.
          </div>
        )}

        <div className="text-center mt-20">
          <h3 className="text-2xl font-heading font-semibold text-foreground mb-4">Ready for your own transformation?</h3>
          <Button size="lg" className="rounded-full px-8">
            Schedule a Consultation
          </Button>
        </div>
      </div>
    </div>
  );
}
