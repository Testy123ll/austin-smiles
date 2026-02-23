import { Facebook, Instagram, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-navy text-white py-16">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <img src="/images/logo-white.png" alt="Austin Elite Smiles" className="h-16 w-auto mb-4" />
            <p className="text-white/60 text-sm leading-relaxed">
              Cosmetic & Family Dentistry in Austin, TX. Confident smiles, unrushed care, elevated comfort.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Quick Links</h4>
            <div className="space-y-2">
              {["Home", "About", "Services", "Doctors", "Gallery", "Reviews", "Offers", "Contact"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block text-sm text-white/60 hover:text-primary transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Contact Us</h4>
            <div className="space-y-3 text-sm text-white/60">
              <p>Phone: <a href="tel:5128663800" className="hover:text-primary transition-colors">512-866-3800</a></p>
              <p>Fax: 512-222-4575</p>
              <p><a href="mailto:office@austinelitesmiles.com" className="hover:text-primary transition-colors">office@austinelitesmiles.com</a></p>
              <div className="flex gap-3 pt-2">
                <a href="https://facebook.com/austinelitesmiles/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors" aria-label="Facebook">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="http://instagram.com/austinelitesmiles/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors" aria-label="Instagram">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="https://google.com/maps/place/Austin+Elite+Smiles" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors" aria-label="Google Maps">
                  <MapPin className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40">
          <p>© {new Date().getFullYear()} Austin Elite Smiles™. All Rights Reserved.</p>
          <div className="flex gap-4">
            <a href="https://www.austinelitesmiles.com/privacy-policy" target="_blank" rel="noopener noreferrer" className="hover:text-white/70 transition-colors">Privacy Policy</a>
            <a href="https://www.austinelitesmiles.com/terms-and-conditions" target="_blank" rel="noopener noreferrer" className="hover:text-white/70 transition-colors">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
