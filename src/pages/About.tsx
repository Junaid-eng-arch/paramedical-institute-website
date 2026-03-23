import AboutSection from "@/components/AboutSection";
import Highlights from "@/components/Highlights";
import Reveal from "@/components/Reveal";
import heroCampus from "../assets/about-students.webp";

const About = () => (
  <>
    <section className="relative h-64 md:h-80 flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroCampus}
          alt="About Little Flower Institute"
          className="w-full h-full object-cover"
          fetchPriority="high"
          loading="eager"
          decoding="async"
        />
        <div className="absolute inset-0 bg-hero-overlay/85" />
      </div>
      <div className="relative z-10 container mx-auto px-4">
        <Reveal>
          <p className="text-secondary font-semibold text-sm tracking-widest uppercase mb-2">Know Us Better</p>
          <h1 className="font-heading text-4xl md:text-5xl text-primary-foreground">About Us</h1>
        </Reveal>
      </div>
    </section>
    <Highlights />
    <AboutSection />
  </>
);

export default About;
