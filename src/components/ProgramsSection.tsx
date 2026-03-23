import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Clock, BookOpen, ArrowRight } from "lucide-react";
import { programs } from "@/data/programs";

const ProgramsSection = () => {
  return (
    <section id="programs" className="section-padding bg-muted">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-blue-500 text-sm tracking-widest uppercase mb-2">Our Programs</p>
          <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-4">
            <span className="block text-foreground">Career-Focused Healthcare</span>
            <span className="block text-foreground">Programs</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose from our CTDS-affiliated BSc and BVoc programs designed to prepare you for a successful healthcare career.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program, i) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="bg-card rounded-xl shadow-sm border border-border overflow-hidden hover:shadow-lg transition-shadow group"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary mb-4">
                  {program.type}
                </span>
                <h3 className="font-heading text-lg font-bold text-foreground mb-3">{program.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{program.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Clock size={14} /> {program.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <BookOpen size={14} /> Full Time
                    </span>
                  </div>
                  <Link to={`/programs/${program.slug}`} className="text-primary font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                    Details <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
