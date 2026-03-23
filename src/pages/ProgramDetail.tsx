import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Clock, BookOpen, ArrowLeft, CheckCircle, GraduationCap, Briefcase } from "lucide-react";
import { programs } from "@/data/programs";
import heroCampus from "@/assets/hero-campus.jpg";

const ProgramDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const program = programs.find((p) => p.slug === slug);

  if (!program) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center">
          <h2 className="font-heading text-2xl text-foreground mb-4">Program Not Found</h2>
          <Link to="/programs" className="text-primary underline hover:opacity-80">
            ← Back to Programs
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Banner */}
      <section className="relative h-72 md:h-96 flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src={program.image} alt={program.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-hero-overlay/80" />
        </div>
        <div className="relative z-10 container mx-auto px-4 pb-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Link to="/programs" className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground text-sm mb-4 transition-colors">
              <ArrowLeft size={16} /> All Programs
            </Link>
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-secondary text-secondary-foreground mb-3">
              {program.type}
            </span>
            <h1 className="font-heading text-3xl md:text-5xl text-primary-foreground mb-3">{program.title}</h1>
            <div className="flex items-center gap-6 text-primary-foreground/80 text-sm">
              <span className="flex items-center gap-1.5"><Clock size={16} /> {program.duration}</span>
              <span className="flex items-center gap-1.5"><BookOpen size={16} /> Full Time</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-10">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
                <h2 className="font-heading text-2xl text-foreground mb-4">Program Overview</h2>
                <p className="text-muted-foreground leading-relaxed">{program.details.overview}</p>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                <h2 className="font-heading text-2xl text-foreground mb-4 flex items-center gap-2">
                  <BookOpen size={22} className="text-primary" /> Key Subjects
                </h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {program.details.subjects.map((subject) => (
                    <div key={subject} className="flex items-center gap-2 p-3 bg-muted rounded-lg">
                      <CheckCircle size={16} className="text-accent flex-shrink-0" />
                      <span className="text-sm text-foreground/80">{subject}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                <h2 className="font-heading text-2xl text-foreground mb-4 flex items-center gap-2">
                  <Briefcase size={22} className="text-primary" /> Career Opportunities
                </h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {program.details.career.map((role) => (
                    <div key={role} className="flex items-center gap-2 p-3 bg-card rounded-lg border border-border">
                      <GraduationCap size={16} className="text-secondary flex-shrink-0" />
                      <span className="text-sm text-foreground/80">{role}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="space-y-6">
              <div className="bg-card rounded-xl p-6 shadow-sm border border-border">
                <h3 className="font-heading text-lg font-bold text-foreground mb-4">Program Details</h3>
                <div className="space-y-4 text-sm">
                  <div className="flex justify-between border-b border-border pb-3">
                    <span className="text-muted-foreground">Duration</span>
                    <span className="font-semibold text-foreground">{program.duration}</span>
                  </div>
                  <div className="flex justify-between border-b border-border pb-3">
                    <span className="text-muted-foreground">Degree Type</span>
                    <span className="font-semibold text-foreground">{program.type}</span>
                  </div>
                  <div className="flex justify-between border-b border-border pb-3">
                    <span className="text-muted-foreground">Mode</span>
                    <span className="font-semibold text-foreground">Full Time</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Affiliation</span>
                    <span className="font-semibold text-foreground">CTDS</span>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-xl p-6 shadow-sm border border-border">
                <h3 className="font-heading text-lg font-bold text-foreground mb-3">Eligibility</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{program.details.eligibility}</p>
              </div>

              <Link
                to="/contact"
                className="block w-full px-6 py-3.5 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity text-center"
              >
                Apply for This Program
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProgramDetail;
