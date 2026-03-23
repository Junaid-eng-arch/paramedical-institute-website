import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import heroCampus from "@/assets/hero-campus.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-[85vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroCampus} alt="Little Flower Institute Campus" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-hero-overlay/85" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-2xl">
       <p className="text-white font-body font-semibold text-sm tracking-widest uppercase mb-4">
  Little Flower Institute of Paramedical Studies, Aluva
</p>
         <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl leading-tight mb-4">
             <span className="text-white">Empowering Careers in</span>{" "}
                <span className="text-white">Healthcare</span>
                </h1>
          <p className="text-primary-foreground/80 text-lg md:text-xl font-light mb-8 max-w-xl">
            58+ years of legacy in education. Building the next generation of healthcare professionals with hands-on training and 100% placement support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/programs" className="px-8 py-3.5 bg-secondary text-secondary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity text-center">
              Explore Programs
            </Link>
            <Link to="/contact" className="px-8 py-3.5 border-2 border-primary-foreground/30 text-primary-foreground font-semibold rounded-lg hover:bg-primary-foreground/10 transition-colors text-center">
              Apply Now
            </Link>
          </div>
        </motion.div>
      </div>

       <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/60">
        <ChevronDown size={28} />
      </motion.div> 
 
    </section>
  );
};

export default HeroSection;
