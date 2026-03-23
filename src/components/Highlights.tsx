import { Award, Users, GraduationCap, Briefcase } from "lucide-react";
import Reveal from "@/components/Reveal";

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
            <Reveal
              key={stat.label}
              delay={i * 100}
              className="bg-card rounded-xl shadow-lg p-6 text-center border border-border"
            >
              <stat.icon className="mx-auto mb-3 text-secondary" size={32} />
              <p className="font-heading text-3xl font-bold text-primary">{stat.value}</p>
              <p className="text-muted-foreground text-sm mt-1">{stat.label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
