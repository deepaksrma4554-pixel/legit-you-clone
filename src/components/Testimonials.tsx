import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Legitimately U has truly changed the game when it comes to protecting my identity in the digital realm. It's a must-have for anyone concerned about their online security.",
    name: "Sophia Williams",
    role: "Tech Enthusiast",
  },
  {
    quote: "I've been amazed by the seamless experience and peace of mind that Legitimately U provides. It's an essential tool in today's digital landscape.",
    name: "Michael Johnson",
    role: "Privacy Advocate",
  },
  {
    quote: "Legitimately U has set a new standard for identity protection. It's impressive how the app delivers top-notch security without compromising user experience.",
    name: "Emily Clark",
    role: "Cybersecurity Professional",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">User Stories</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 space-y-6">
                <Quote className="w-10 h-10 text-primary opacity-50" />
                <p className="text-lg text-muted-foreground italic leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="pt-4 border-t">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
