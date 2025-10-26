import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FaqSection() {
  const faqs = [
    {
      question: "How accurate is the AI voice recognition?",
      answer:
        "Our AI voice recognition system has an accuracy rate of over 95% across various accents and environments. The system continuously learns and improves with each interaction.",
    },
    {
      question: "Can I customize the voice and personality of the AI agent?",
      answer:
        "Yes, you can customize both the voice and personality of your AI agent to match your brand identity. We offer various voice options and personality traits that can be adjusted to your preferences.",
    },
    {
      question: "How does the AI handle complex customer inquiries?",
      answer:
        "The AI is trained to handle a wide range of inquiries. For complex issues it can't resolve, the system seamlessly transfers the call to a human agent while providing context of the conversation.",
    },
    {
      question: "Is the solution available for businesses in Kenya?",
      answer:
        "Yes, we offer a customizable solution specifically for businesses in Kenya, with support for local languages and understanding of regional context and business practices.",
    },
    {
      question: "How secure is the customer data handled by the AI?",
      answer:
        "We implement enterprise-grade security measures including end-to-end encryption, secure data storage, and compliance with international data protection regulations like GDPR.",
    },
    {
      question: "Can the AI integrate with our existing CRM and phone systems?",
      answer:
        "Yes, our solution offers API integrations with popular CRM platforms and can work with most existing phone systems, including VoIP and traditional telephony infrastructure.",
    },
  ]

  return (
    <section id="faq" className="py-16 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Frequently Asked Questions</h2>
          <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed">
            Find answers to common questions about our AI voice agent solution.
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-gray-500">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        <div className="mt-12 text-center">
          <p className="text-gray-500">
            Still have questions?{" "}
            <a href="#" className="text-blue-600 font-medium hover:underline">
              Contact our support team
            </a>{" "}
            for more information.
          </p>
        </div>
      </div>
    </section>
  )
}
