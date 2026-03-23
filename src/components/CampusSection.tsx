

import { motion } from "framer-motion";
import { Building2, UtensilsCrossed, FlaskConical, Hotel, Stethoscope, Users } from "lucide-react";
import campusView from "@/assets/hero-campus.webp";

const facilities = [
  { icon: Building2, title: "5-Acre Campus", description: "Spacious green campus with modern infrastructure", accent: "#0d9488" },
  { icon: Hotel, title: "Hostel Facility", description: "Comfortable accommodation for outstation students", accent: "#0891b2" },
  { icon: UtensilsCrossed, title: "15-Hour Canteen", description: "Hygienic food services throughout the day", accent: "#d97706" },
  { icon: Stethoscope, title: "Hospital Association", description: "Direct tie-ups with multi-speciality hospitals", accent: "#dc2626" },
  { icon: FlaskConical, title: "Live Lab Study", description: "State-of-the-art laboratories for practical training", accent: "#7c3aed" },
  { icon: Users, title: "Personality Development", description: "Soft skills, communication, and career training", accent: "#059669" },
];

const CampusSection = () => {
  return (
    <section
      id="campus"
      style={{
        padding: "80px 0",
        background: "linear-gradient(160deg, #f0fdfa 0%, #ecfeff 40%, #f8fafc 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative background blobs */}
      <div style={{
        position: "absolute", top: "-80px", right: "-80px",
        width: "400px", height: "400px",
        background: "radial-gradient(circle, rgba(13,148,136,0.10) 0%, transparent 70%)",
        borderRadius: "50%", pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", bottom: "-60px", left: "-60px",
        width: "350px", height: "350px",
        background: "radial-gradient(circle, rgba(217,119,6,0.08) 0%, transparent 70%)",
        borderRadius: "50%", pointerEvents: "none",
      }} />

      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px", position: "relative" }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: "center", marginBottom: "48px" }}
        >
          <span className="inline-block text-primary font-semibold text-xs tracking-widest uppercase mb-3">
            Campus & Facilities
          </span>
          <h2 style={{
            fontSize: "clamp(28px, 4vw, 40px)",
            fontWeight: 800,
            color: "#0f172a",
            marginBottom: "16px",
            lineHeight: 1.2,
          }}>
            Everything You Need to{" "}
            <span style={{
              color: "#0f172a",
            }}>
              Succeed
            </span>
          </h2>
          <p style={{ color: "#64748b", maxWidth: "560px", margin: "0 auto", fontSize: "16px", lineHeight: 1.7 }}>
            Our campus provides a complete ecosystem for learning, living, and growing as a healthcare professional.
          </p>
        </motion.div>

        {/* Campus Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            borderRadius: "20px",
            overflow: "hidden",
            marginBottom: "48px",
            boxShadow: "0 20px 60px rgba(13,148,136,0.15), 0 4px 16px rgba(0,0,0,0.08)",
            border: "1px solid rgba(13,148,136,0.15)",
          }}
        >
         <img
  src={campusView}
  alt="Little Flower Institute Campus, Aluva"
  style={{
    width: "100%",
    height: "clamp(220px, 35vw, 340px)",
    objectFit: "cover",
    objectPosition: "center 40%", // Focuses on the architecture/skyline
    borderRadius: "12px",
    display: "block",
    filter: "brightness(0.95) contrast(1.05)", // Enhances visual depth
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)"
  }}
/>
        </motion.div>

        {/* Facility Cards */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "20px",
        }}>
          {facilities.map((facility, i) => (
            <motion.div
              key={facility.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              whileHover={{ y: -4, boxShadow: `0 16px 40px ${facility.accent}22` }}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "16px",
                padding: "24px",
                borderRadius: "16px",
                background: "#ffffff",
                border: `1px solid ${facility.accent}22`,
                boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
                transition: "box-shadow 0.3s ease, transform 0.3s ease",
                cursor: "default",
              }}
            >
              {/* Icon box */}
              <div style={{
                width: "52px",
                height: "52px",
                borderRadius: "14px",
                background: `linear-gradient(135deg, ${facility.accent}18, ${facility.accent}30)`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                border: `1px solid ${facility.accent}30`,
              }}>
                <facility.icon size={24} style={{ color: facility.accent }} />
              </div>

              <div>
                <h3 style={{
                  fontSize: "17px",
                  fontWeight: 700,
                  color: "#0f172a",
                  marginBottom: "6px",
                  lineHeight: 1.3,
                }}>
                  {facility.title}
                </h3>
                <p style={{ color: "#64748b", fontSize: "14px", lineHeight: 1.6, margin: 0 }}>
                  {facility.description}
                </p>
              </div>

              {/* Subtle accent bar */}
              <div style={{
                position: "absolute",
                top: 0, left: "24px",
                width: "40px", height: "3px",
                borderRadius: "0 0 4px 4px",
                background: facility.accent,
                opacity: 0.5,
              }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CampusSection;
