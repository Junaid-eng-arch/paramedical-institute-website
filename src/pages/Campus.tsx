import CampusSection from "@/components/CampusSection";
import Reveal from "@/components/Reveal";
import heroCampus from "@/assets/hero-campus.webp";
import heroCampusMobile from "@/assets/campus-view.jpg";

const Campus = () => (
  <>
    <section className="relative h-64 md:h-80 flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroCampus}
          srcSet={`${heroCampusMobile} 768w, ${heroCampus} 1400w`}
          sizes="100vw"
          alt="Our Campus"
          className="w-full h-full object-cover"
          fetchPriority="high"
          loading="eager"
          decoding="async"
        />
        <div className="absolute inset-0 bg-hero-overlay/85" />
      </div>
      <div className="relative z-10 container mx-auto px-4">
        <Reveal>
          <p className="text-secondary font-semibold text-sm tracking-widest uppercase mb-2">Life at Little Flower</p>
          <h1 className="font-heading text-4xl md:text-5xl text-primary-foreground">Campus & Facilities</h1>
        </Reveal>
      </div>
    </section>
    <CampusSection />
  </>
);

export default Campus;
