import { motion } from "framer-motion";
import { Award, Users, GraduationCap, Briefcase } from "lucide-react";

const stats = [
  { icon: Award, value: "77+", label: "Years Legacy" },
  { icon: Users, value: "7000+", label: "Students Trained" },
  { icon: GraduationCap, value: "100%", label: "Placement Support" },
  { icon: Briefcase, value: "5", label: "Acre Campus" },
];

const Highlights = () => {
  return (
    <section className="relative -mt-16 z-20 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-card rounded-xl shadow-lg p-6 text-center border border-border"
            >
              <stat.icon className="mx-auto mb-3 text-secondary" size={32} />
              <p className="font-heading text-3xl font-bold text-primary">{stat.value}</p>
              <p className="text-muted-foreground text-sm mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
