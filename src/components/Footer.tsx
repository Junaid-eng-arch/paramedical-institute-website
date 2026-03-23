import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-topbar text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <Link to="/" className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center font-heading font-bold text-lg">
                LF
              </div>
              <div>
                <h3 className="font-heading font-bold text-lg">Little Flower</h3>
                <p className="text-primary-foreground/60 text-xs">Institute of Paramedical Studies</p>
              </div>
            </Link>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Empowering the next generation of healthcare professionals since 1967 under the Social Welfare Campus, Aluva.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {[
                { label: "About", to: "/about" },
                { label: "Programs", to: "/programs" },
                { label: "Campus", to: "/campus" },
                { label: "Contact", to: "/contact" },
              ].map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  className="text-primary-foreground/70 text-sm hover:text-primary-foreground transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Reach Us</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2 text-primary-foreground/70">
                <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                <span>Aluva, Ernakulam, Kerala, India</span>
              </div>
              <div className="flex items-center gap-2 text-primary-foreground/70">
                <Phone size={16} className="flex-shrink-0" />
                <span>+91 484 5567865</span>
              </div>
              <div className="flex items-center gap-2 text-primary-foreground/70">
                <Mail size={16} className="flex-shrink-0" />
                <span>info@littleflowerparamedical.in</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-10 pt-6 text-center text-primary-foreground/50 text-sm">
          <p>© {new Date().getFullYear()} Little Flower Institute of Paramedical Studies, Aluva. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
