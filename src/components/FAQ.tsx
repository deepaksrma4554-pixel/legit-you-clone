import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How do we ensure the most advanced method of legitimizing your identity and keep your information secure?",
    answer: "We set up a seven point biometric process that occurs when you first set up your account with LU. These seven point biometric points of verification are collectively the most advanced protected consumer to business connections to date. They include Biometric Facial, voice, touch, iris, Retinal and DNA verifications, a user PIN code, and a multifactorial Email and Mobile phone OTP/TOTP via SMS, over Email and Push notification forms of verification. LU also tracks your history and gives locations of all actions as an additional form of security. Your identity is secured through our multi-factor user encryption system that only stores your user ID. Your identity and biometrics are not stored on our servers, they are kept on your device and can only be accessed after all Seven points of verification are completed.",
  },
  {
    question: "Can I use the LU app for anything that requires a password to gain access?",
    answer: "The LU system is currently being utilized by multiple businesses. It is best for you to contact your provider to see if logging in via LU app is possible.",
  },
  {
    question: "What happens if I lose my phone or my device gets stolen? Will anyone be able to gain access to my LU?",
    answer: "No. The LU app can only be opened through your selected unlock option. To ensure maximum security we recommend using all biometrics available on LU to unlock your LU app.",
  },
  {
    question: "Can I use the LU app on my Desktop computer?",
    answer: "Yes. Our desktop version seamlessly integrates with your mobile device. Simply unlock your verified LU mobile app, select QR code on the home screen of your mobile app and scan the desktop QR code using your verified mobile LU app's scan screen.",
  },
  {
    question: "What are biometrics?",
    answer: "Individual physical attributes such as fingerprints, palm, iris and retinal scanning, voice, face and DNA are used in biometrics.",
  },
  {
    question: "Do I need a phone to use the LU app?",
    answer: "We recommend that use of a phone would allow more enjoyable user friendly experiences. However it is not a requirement. The Desktop version provides you with most of the functionality while maintaining security. Instead of taking a photo of the QR code with your mobile LU app, the desktop version allows you to 'Copy and Paste' the QR code while attempting to gain web-based secure access.",
  },
];

const FAQ = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-hero-gradient-start to-hero-gradient-end">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">FAQ</h2>
            <p className="text-xl text-white/90">Frequently asked questions</p>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white rounded-lg px-6 border-none"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
