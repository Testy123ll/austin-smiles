import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  { name: "William H.", text: "I had a great experience with everyone in the office during my visit. David Myhre went above and beyond to make sure I had the best smile possible." },
  { name: "J H.", text: "If you want dental work that even other dentists admire, go here! Dr. Lowery was able to save my tooth with a crown instead of an implant. My smile is now absolutely perfect." },
  { name: "Kristen T.", text: "Everything was completely stress-free. I was very impressed with the advanced technology they use. Dr. Lowrance is kind and genuinely caring. By far the best dentist I've been to!" },
  { name: "Troy M.", text: "The staff was extremely professional and respectful, and the facility is clearly state-of-the-art. Nothing felt rushed or sloppy — I felt very comfortable the entire time." },
  { name: "Lindsey D.", text: "They made me feel seen and in control the whole visit. The equipment made me feel like I was at a spa — Netflix with noise canceling headphones, blankets, and heated massage chairs!" },
  { name: "Solara R.", text: "The most spectacular, nourishing, and enjoyable experience I've ever had at a dental office. Their dental technology is state-of-the-art and at the leading edge of scientific discovery." },
];

export default function ReviewsSection() {
  return (
    <section id="reviews" className="py-24 bg-navy text-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">What Our Patients Are Saying</h2>
          <div className="flex justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 text-gold fill-gold" />
            ))}
          </div>
          <p className="text-white/70 text-lg">5.0 Rating · 127 Reviews on Google</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {reviews.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 text-gold fill-gold" />
                ))}
              </div>
              <p className="text-white/80 text-sm leading-relaxed mb-4">"{review.text}"</p>
              <p className="font-semibold text-white">{review.name}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="https://www.google.com/search?q=austin+elite+smiles#lrd=0x8644d2b720c0d73d:0x4f11d603cf5ecfb9,1,,,,"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-navy/70 underline underline-offset-4 font-medium"
          >
            View More Reviews on Google →
          </a>
        </div>
      </div>
    </section>
  );
}
