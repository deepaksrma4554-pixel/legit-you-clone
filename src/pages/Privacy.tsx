import { Shield, Lock, Eye } from "lucide-react";

const Privacy = () => {
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
              Privacy
            </h1>
            <p className="text-xl md:text-2xl text-white font-light">
              We are committed to protecting your data.
            </p>
          </div>
        </div>
      </section>

      {/* Security Priority Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Security is our priority
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Legitimately U (LU) products include innovative privacy technologies and techniques designed to minimize how much of your data we, or anyone else can access.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our security features prevent anyone except you from being able to access your information. We are constantly improving ways to keep your personal information safe.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-foreground">
            How we Protect Your Identity
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-card border border-border rounded-lg p-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <Lock className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground">End-to-end Encryption</h3>
              <p className="text-muted-foreground">
                Your data is encrypted from the moment it leaves your device until it reaches its destination, ensuring complete privacy.
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground">Advanced Security</h3>
              <p className="text-muted-foreground">
                Multi-layered security protocols protect your identity with the latest encryption standards and security measures.
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <Eye className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground">Privacy Control</h3>
              <p className="text-muted-foreground">
                You have complete control over your data. Only you can access your information and decide who sees it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Policy Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <h3 className="text-2xl font-bold text-foreground mb-4">Privacy Policy</h3>
            <p className="text-muted-foreground mb-4">
              Effective date: January 1st, 2025
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I IDEAS, LLC/ LEGITIMATELY U ("us", "we", or "our") operates the https://www.legitimatelyu.com/ website and the I IDEAS, LLC/ LEGITIMATELY U mobile application and all licensed applications (hereinafter referred to as the "Service").
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              We use your data to provide and improve the Service. By using the Service, you agree to the collection and use of information in accordance with this policy.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;
