import { Suspense, lazy } from "react";
import HeroSection from "@/components/HeroSection";
import RouteFallback from "@/components/RouteFallback";

const Highlights = lazy(() => import("@/components/Highlights"));
const AboutSection = lazy(() => import("@/components/AboutSection"));
const ProgramsSection = lazy(() => import("@/components/ProgramsSection"));
const CampusSection = lazy(() => import("@/components/CampusSection"));
const ContactSection = lazy(() => import("@/components/ContactSection"));

const Home = () => (
  <>
    <HeroSection />
    <Suspense fallback={<RouteFallback />}>
      <Highlights />
      <AboutSection />
      <ProgramsSection />
      <CampusSection />
      <ContactSection />
    </Suspense>
  </>
);

export default Home;
