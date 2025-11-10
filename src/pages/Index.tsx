import Hero from "@/components/Hero";
import FeaturesBar from "@/components/FeaturesBar";
import AboutSection from "@/components/AboutSection";
import WhyChoose from "@/components/WhyChoose";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <FeaturesBar />
      <AboutSection />
      <WhyChoose />
      <Testimonials />
      <FAQ />
    </div>
  );
};

export default Index;
