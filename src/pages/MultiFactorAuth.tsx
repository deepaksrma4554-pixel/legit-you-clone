import { Shield, Eye, Fingerprint, Mic, Lock, Scan } from "lucide-react";

const MultiFactorAuth = () => {
  const authMethods = [
    {
      title: "Facial Biometric Authentication",
      icon: Scan,
      description: "Advanced facial recognition technology for secure identity verification"
    },
    {
      title: "Unique Passcode Verification",
      icon: Lock,
      description: "Dynamic passcode generation for enhanced security"
    },
    {
      title: "Voice Authentication",
      icon: Mic,
      description: "Voice biometrics for seamless and secure authentication"
    },
    {
      title: "IRIS Recognition",
      icon: Eye,
      description: "High-precision iris scanning for ultimate security"
    },
    {
      title: "Finger Print Authentication",
      icon: Fingerprint,
      description: "Quick and reliable fingerprint verification"
    },
    {
      title: "Retinal Recognition",
      icon: Eye,
      description: "Advanced retinal scanning technology"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-hero-gradient-start to-hero-gradient-end py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="flex justify-center mb-6">
              <Shield className="w-20 h-20 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              Empowering Identity Protection with Cutting-Edge Technology
            </h1>
            <p className="text-xl md:text-2xl text-white font-light">
              Your Trusted Partner for Secure Identity Solutions
            </p>
          </div>
        </div>
      </section>

      {/* Authentication Methods Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {authMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <div
                  key={index}
                  className="group bg-card border border-border rounded-lg p-8 hover:shadow-lg transition-all duration-300 hover:border-primary"
                >
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-10 h-10 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {method.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {method.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default MultiFactorAuth;
