import { useState } from "react";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const SCHEDULE_URL = "https://mychart.myoryx.com/online-schedule/index.html?realm=aes&univers=com";

const serviceLinks = [
  { label: "All Services", href: "/our-services" },
  { label: "Invisalign®", href: "/invisalign" },
  { label: "Teeth Whitening", href: "/teeth-whitening" },
  { label: "Dental Implants", href: "/dental-implants" },
  { label: "Porcelain Veneers & Crowns", href: "/porcelain-veneers-and-crowns" },
  { label: "General Dentistry", href: "/general-dentistry" },
  { label: "Preventative Dentistry", href: "/preventative-dentistry" },
  { label: "Cosmetic Bonding", href: "/cosmetic-bonding" },
  { label: "Dental Emergencies", href: "/dental-emergencies" },
  { label: "3D Wellness Scan", href: "/3d-digital-wellness-scan" },
];

const patientLinks = [
  { label: "For Patients", href: "/for-patients" },
  { label: "Smile Wellness Plan", href: "/smile-wellness-plan" },
  { label: "New Patient Special", href: "/new-patient-special" },
  { label: "Payment Plans", href: "/payment-plans" },
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about-us" },
  { label: "Services", href: "/our-services", children: serviceLinks },
  { label: "Patients", href: "/for-patients", children: patientLinks },
  { label: "Contact", href: "/contact-us" },
];

interface NavbarProps {
  onOpenModal?: () => void;
}

export default function Navbar({ onOpenModal }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState<string | null>(null);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border/50">
      <div className="container flex items-center justify-between h-20">
        <Link to="/" className="flex-shrink-0">
          <img
            src="/images/logo.png"
            alt="Austin Elite Smiles"
            className="h-14 w-auto"
            fetchPriority="high"
            decoding="async"
            width="180"
            height="56"
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <div
              key={link.label}
              className="relative"
              onMouseEnter={() => link.children && setDropdown(link.label)}
              onMouseLeave={() => setDropdown(null)}
            >
              <Link
                to={link.href}
                className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors rounded-md hover:bg-primary/5 inline-flex items-center gap-1"
              >
                {link.label}
                {link.children && <ChevronDown className="w-3 h-3" />}
              </Link>
              
              {link.children && dropdown === link.label && (
                <div className="absolute top-full left-0 pt-1 z-50">
                  <div className="bg-background rounded-xl border border-border/50 shadow-xl py-2 min-w-[220px]">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        to={child.href}
                        className="block px-4 py-2 text-sm text-foreground/80 hover:text-primary hover:bg-primary/5 transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a href="tel:5128663800" className="flex items-center gap-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
            <Phone className="w-4 h-4" />
            (512) 866-3800
          </a>
          <Button
            id="navbar-schedule-btn"
            onClick={onOpenModal}
            className="bg-primary hover:bg-navy/90 text-primary-foreground rounded-full px-6"
          >
            Schedule Online
          </Button>
        </div>

        <button className="lg:hidden p-2" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-background border-t border-border/50 pb-4 max-h-[80vh] overflow-y-auto">
          {navLinks.map((link) => (
            <div key={link.label}>
              <Link
                to={link.href}
                onClick={() => !link.children && setOpen(false)}
                className="block px-6 py-3 text-sm font-semibold text-foreground/80 hover:text-primary hover:bg-primary/5 transition-colors"
              >
                {link.label}
              </Link>
              {link.children && link.children.map((child) => (
                <Link
                  key={child.href}
                  to={child.href}
                  onClick={() => setOpen(false)}
                  className="block px-10 py-2 text-sm text-foreground/60 hover:text-primary hover:bg-primary/5 transition-colors"
                >
                  {child.label}
                </Link>
              ))}
            </div>
          ))}
          <div className="px-6 pt-3 space-y-2">
            <a href="tel:5128663800" className="flex items-center gap-2 text-sm font-medium text-primary">
              <Phone className="w-4 h-4" /> (512) 866-3800
            </a>
            <Button
              id="navbar-mobile-schedule-btn"
              onClick={() => { onOpenModal?.(); setOpen(false); }}
              className="w-full bg-primary hover:bg-navy/90 rounded-full"
            >
              Schedule Online
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
