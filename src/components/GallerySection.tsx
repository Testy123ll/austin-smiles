import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";

const cases = [
  { before: "/images/before-1.png", after: "/images/after-1.png" },
  { before: "/images/before-2.jpg", after: "/images/after-2.jpg" },
  { before: "/images/before-3.jpg", after: "/images/after-3.jpg" },
];

export default function GallerySection() {
  const [sliderPos, setSliderPos] = useState<number[]>([50, 50, 50]);

  const handleSlider = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const newPos = [...sliderPos];
    newPos[index] = Number(e.target.value);
    setSliderPos(newPos);
  };

  return (
    <section id="gallery" className="py-24 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            Unhappy With Your Smile? You Are Not Alone.
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Stained, chipped, missing, or misaligned teeth can hold you back. We can help! Take the first step towards learning what options you have.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-12">
          {cases.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative overflow-hidden rounded-2xl aspect-[4/3] shadow-lg"
            >
              <img src={c.after} alt="After treatment" loading="lazy" decoding="async" className="absolute inset-0 w-full h-full object-cover" />
              <div
                className="absolute inset-0 overflow-hidden"
                style={{ width: `${sliderPos[i]}%` }}
              >
                <img src={c.before} alt="Before treatment" loading="lazy" decoding="async" className="absolute inset-0 w-full h-full object-cover" style={{ minWidth: `${100 / (sliderPos[i] / 100)}%` }} />
              </div>
              <div
                className="absolute top-0 bottom-0 w-0.5 bg-white shadow-lg z-10"
                style={{ left: `${sliderPos[i]}%` }}
              >
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white shadow-lg flex items-center justify-center">
                  <span className="text-xs font-bold text-foreground">⇔</span>
                </div>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={sliderPos[i]}
                onChange={(e) => handleSlider(i, e)}
                className="absolute inset-0 w-full h-full opacity-0 cursor-col-resize z-20"
              />
              <div className="absolute top-3 left-3 bg-navy/70 text-white text-xs px-2 py-1 rounded-full font-medium">Before</div>
              <div className="absolute top-3 right-3 bg-primary/90 text-white text-xs px-2 py-1 rounded-full font-medium">After</div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/smile-gallery"
            className="text-primary hover:text-navy/70 underline underline-offset-4 font-medium"
          >
            See Our Full Smile Gallery →
          </Link>
        </div>
      </div>
    </section>
  );
}
