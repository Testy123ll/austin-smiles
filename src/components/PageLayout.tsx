import Navbar from "./Navbar";
import Footer from "./Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CalendarDays, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const SCHEDULE_URL = "https://mychart.myoryx.com/online-schedule/index.html?realm=aes&univers=com";

interface PageLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
  showCTA?: boolean;
  breadcrumbs?: { label: string; href: string }[];
}

export default function PageLayout({ children, title, subtitle, showCTA = true, breadcrumbs }: PageLayoutProps) {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Banner */}
      <section className="relative pt-20 bg-navy">
        <div className="container py-16 md:py-24">
          {breadcrumbs && (
            <nav className="mb-4">
              <ol className="flex items-center gap-2 text-sm text-white/50">
                <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
                {breadcrumbs.map((crumb, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span>/</span>
                    {i === breadcrumbs.length - 1 ? (
                      <span className="text-white/80">{crumb.label}</span>
                    ) : (
                      <Link to={crumb.href} className="hover:text-primary transition-colors">{crumb.label}</Link>
                    )}
                  </li>
                ))}
              </ol>
            </nav>
          )}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-4">{title}</h1>
            {subtitle && <p className="text-lg md:text-xl text-white/70 max-w-3xl">{subtitle}</p>}
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Content */}
      <main className="py-16 md:py-24">
        {children}
      </main>

      {/* CTA Section */}
      {showCTA && (
        <section className="py-16 bg-primary/5">
          <div className="container text-center">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">Ready to Get Started?</h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">Schedule your appointment today and take the first step toward a healthier, more confident smile.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-teal-dark text-primary-foreground rounded-full px-8 h-14 text-base">
                <a href={SCHEDULE_URL} target="_blank" rel="noopener noreferrer">
                  <CalendarDays className="w-5 h-5 mr-2" /> Schedule Online
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-8 h-14 text-base">
                <a href="tel:5128663800">
                  <Phone className="w-5 h-5 mr-2" /> Call (512) 866-3800
                </a>
              </Button>
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}
