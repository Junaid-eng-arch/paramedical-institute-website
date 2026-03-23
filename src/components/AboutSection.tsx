import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import aboutStudents from "../assets/about-students.webp";

const features = [
  "ISO 9001:2015 Certified Institution",
  "CTDS Affiliated (Council for Technical Development)",
  "Registered under NITI Aayog, Government of India",
  "Established under Social Welfare Campus (since 1967)",
  "Associated with Multi-Speciality Hospitals",
  "On-the-Job Training & Internships",
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-blue-600 font-semibold text-sm tracking-widest uppercase mb-2">
  About Us
</p>
           <h2 className="font-heading text-3xl md:text-4xl text-black mb-6">
  A Legacy of Excellence in <span className="text-black">Paramedical Education</span>
</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Little Flower Institute of Paramedical Studies, located in Aluva, Ernakulam (just 2 km from the railway station), 
              is a premier institution offering BSc and BVoc programs. With a strong focus on practical training, 
              hospital exposure, and career development, we have been nurturing healthcare professionals for over five decades.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Our 5-acre campus provides a conducive learning environment with modern facilities including hostels, 
              a 15-hour canteen, live laboratory studies, and direct association with multi-speciality hospitals.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {features.map((feature) => (
                <div key={feature} className="flex items-start gap-2">
                  <CheckCircle size={18} className="text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-foreground/80">{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-lg mb-6">
              <img
                src={aboutStudents}
                alt="Students at Little Flower Institute"
                className="w-full h-72 object-cover"
              />
            </div>
            <div className="space-y-4">
              <div className="bg-card rounded-xl p-6 shadow-sm border border-border">
                <h3 className="font-heading text-xl font-bold text-primary mb-2">Our Mission</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  To provide quality paramedical education that combines theoretical knowledge with practical skills, 
                  producing competent healthcare professionals ready to serve the community.
                </p>
              </div>
              <div className="bg-card rounded-xl p-6 shadow-sm border border-border">
                <h3 className="font-heading text-xl font-bold text-primary mb-2">Our Vision</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  To be a leading institution in paramedical education, recognized for academic excellence, 
                  innovative training methods, and producing skilled professionals who make a difference in healthcare.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
