const features = [
  "State-of-the-Art Security",
  "Advanced Identity Protection",
  "Trusted by Users Worldwide",
  "Cutting-Edge Technology",
];

const FeaturesBar = () => {
  return (
    <section className="bg-dark-bg py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="border-l-4 border-hero-gradient-start pl-4">
                <p className="text-white text-lg font-medium">{feature}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesBar;
