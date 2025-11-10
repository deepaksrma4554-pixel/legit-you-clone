import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] bg-gradient-to-br from-hero-gradient-start to-hero-gradient-end overflow-hidden">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="relative z-10 space-y-8">
            <h1 className="text-5xl md:text-7xl font-bold text-white italic leading-tight">
              Welcome to<br />Legitimately U
            </h1>
            <p className="text-2xl md:text-3xl text-white font-light">
              Your Verified Identity,<br />
              Completely Protected
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-8">
                Get Started
              </Button>
              <Button size="lg" variant="secondary" className="bg-dark-bg hover:bg-dark-surface text-white rounded-full px-8">
                Explore Features
              </Button>
              <Button size="lg" variant="secondary" className="bg-dark-bg hover:bg-dark-surface text-white rounded-full px-8">
                Review Privacy
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
