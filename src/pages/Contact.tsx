import ContactSection from "@/components/ContactSection";
import { motion } from "framer-motion";
import heroCampus from "@/assets/hero-campus.jpg";

const Contact = () => (
  <>
    <section className="relative h-64 md:h-80 flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroCampus} alt="Contact Us" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-hero-overlay/85" />
      </div>
      <div className="relative z-10 container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <p className="text-secondary font-semibold text-sm tracking-widest uppercase mb-2">Get In Touch</p>
          <h1 className="font-heading text-4xl md:text-5xl text-primary-foreground">Contact Us</h1>
        </motion.div>
      </div>
    </section>
    <ContactSection />
  </>
);

export default Contact;
