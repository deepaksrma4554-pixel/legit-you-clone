import { Target, Users, Lightbulb, Eye } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-hero-gradient-start to-hero-gradient-end py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              Who We Are
            </h1>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <p className="text-xl text-muted-foreground leading-relaxed">
              Legitimately U (LU) is a ground breaking, revolutionary new App that provides the most advanced system of securing and completely protecting ones identity. Our mission is to empower individuals to take control of their online identity and ensure the highest level of security and privacy.
            </p>
            <p className="text-xl text-muted-foreground leading-relaxed">
              At Legitimately U, we are driven by our core values of innovation, transparency, and accessibility. We constantly innovate to provide cutting-edge solutions that safeguard our users' identities. Transparency is at the heart of everything we do, ensuring our users have full visibility and understanding of our processes. We are committed to accessibility, making sure our services are available to all, regardless of their technical expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-foreground">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-card border border-border rounded-lg p-8 space-y-4 text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                <Lightbulb className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground">Innovation</h3>
              <p className="text-muted-foreground">
                We constantly innovate to provide cutting-edge solutions that safeguard our users' identities with the latest technology.
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-8 space-y-4 text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                <Eye className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground">Transparency</h3>
              <p className="text-muted-foreground">
                Transparency is at the heart of everything we do, ensuring our users have full visibility and understanding of our processes.
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-8 space-y-4 text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground">Accessibility</h3>
              <p className="text-muted-foreground">
                We are committed to accessibility, making sure our services are available to all, regardless of their technical expertise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
              <Target className="w-10 h-10 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Our Mission
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              To empower individuals worldwide with the most advanced identity protection technology, ensuring complete security, privacy, and peace of mind in an increasingly digital world.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
