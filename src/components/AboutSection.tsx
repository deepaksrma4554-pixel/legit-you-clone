import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const AboutSection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-gradient-to-b from-muted/50 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">Who We Are</h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Legitimately U (LU) is a revolutionary app that redefines identity protection. 
            Our advanced system ensures the complete security of your identity, providing 
            peace of mind in today's digital world.
          </p>
          <Button 
            size="lg" 
            className="rounded-full px-8"
            onClick={() => navigate('/about')}
          >
            Discover More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
