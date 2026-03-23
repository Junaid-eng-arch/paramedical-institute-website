import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Mail, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Programs", to: "/programs" },
  { label: "Campus", to: "/campus" },
  { label: "Contact", to: "/contact" },
];

const TopBar = () => (
  <div className="bg-topbar text-primary-foreground py-2 px-4 text-sm hidden md:block">
    <div className="container mx-auto flex justify-between items-center">
      <div className="flex items-center gap-6">
        <a href="tel:+910000000000" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <Phone size={14} />
          <span>+91 484 XXX XXXX</span>
        </a>
        <a href="mailto:info@littleflowerparamedical.in" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <Mail size={14} />
          <span>info@littleflowerparamedical.in</span>
        </a>
      </div>
      <div className="flex items-center gap-4">
        <span className="text-primary-foreground/80">ISO 9001:2015 Certified</span>
        <span className="text-primary-foreground/80">|</span>
        <span className="text-primary-foreground/80">CTDS Affiliated</span>
      </div>
    </div>
  </div>
);

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      <TopBar />
      <nav className="sticky top-0 z-50 bg-card/95 backdrop-blur-md shadow-sm border-b border-border">
        <div className="container mx-auto flex justify-between items-center py-3 px-4">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-heading font-bold text-lg">
              LF
            </div>
            <div>
              <h1 className="text-base font-heading font-bold text-primary leading-tight">Little Flower</h1>
              <p className="text-[11px] text-muted-foreground leading-tight">Institute of Paramedical Studies</p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className={`px-4 py-2 text-sm font-medium transition-colors rounded-md hover:bg-muted ${
                  location.pathname === link.to ? "text-primary bg-muted" : "text-foreground/80 hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="ml-3 px-5 py-2 bg-primary text-primary-foreground text-sm font-semibold rounded-lg hover:opacity-90 transition-opacity"
            >
              Enquire Now
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden overflow-hidden bg-card border-t border-border"
            >
              <div className="flex flex-col p-4 gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    to={link.to}
                    onClick={() => setMobileOpen(false)}
                    className={`px-4 py-3 text-sm font-medium rounded-md transition-colors ${
                      location.pathname === link.to ? "text-primary bg-muted" : "text-foreground/80 hover:text-primary hover:bg-muted"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  to="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="mt-2 px-5 py-3 bg-primary text-primary-foreground text-sm font-semibold rounded-lg text-center"
                >
                  Enquire Now
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;
