import { Shield, Lock, HeadsetIcon, UserCheck } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Total Privacy Assurance",
    description: "We prioritize using durable, high-quality materials to ensure the utmost privacy and protection for our users, maintaining the highest standards of security.",
  },
  {
    icon: Lock,
    title: "Advanced Security Features",
    description: "Our app offers state-of-the-art security features to safeguard your identity and personal information, giving you full control over your digital presence.",
  },
  {
    icon: HeadsetIcon,
    title: "Expert Support Team",
    description: "Our experienced advisors are dedicated to providing personalized assistance, guiding you through every aspect of identity protection and ensuring a seamless experience.",
  },
  {
    icon: UserCheck,
    title: "Tailored Identity Protection",
    description: "At Legitimately U, we understand that each individual's identity protection needs are unique. Our app provides tailored solutions to ensure comprehensive protection.",
  },
];

const WhyChoose = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-background to-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">Why Choose LU</h2>
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-3 text-foreground">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
