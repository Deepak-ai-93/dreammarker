import ContactForm from '@/components/forms/ContactForm';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';


const faqs = [
  {
    question: 'What services do you offer?',
    answer: 'We offer a full suite of digital services, including digital marketing (SEO, PPC, content marketing), social media marketing, and web development.'
  },
  {
    question: 'What is your process?',
    answer: 'Our process is collaborative and transparent. We start with a discovery phase to understand your goals, then move to strategy, execution, and finally, ongoing optimization and growth.'
  },
  {
    question: 'How much do your services cost?',
    answer: 'Our pricing is customized based on the specific needs and goals of each client. We recommend getting in touch for a free consultation and a detailed proposal.'
  },
   {
    question: 'How long does it take to see results?',
    answer: 'The timeline for results can vary depending on the services and your industry. For SEO, it can take 3-6 months to see significant results, while PPC and social media campaigns can generate traffic more quickly.'
  }
]

export default function ContactPage() {
  return (
    <>
      <section className="w-full pt-32 pb-16 md:pt-40 md:pb-24 bg-secondary/30">
        <div className="container px-4 md:px-6 text-center animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <h1 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl md:text-6xl">
            Contact Us
          </h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl my-6">
            We'd love to hear from you. Let's start a conversation about your next project.
          </p>
        </div>
      </section>

      <section className="container px-4 md:px-6">
        <div className="grid md:grid-cols-5 gap-12">
          <div className="md:col-span-3">
             <h2 className="text-3xl font-headline font-bold mb-6">Send us a Message</h2>
            <ContactForm />
          </div>
          <div className="md:col-span-2">
            <div className="space-y-6">
                 <h2 className="text-3xl font-headline font-bold">Get in Touch</h2>
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold">Our Office</h3>
                  <p className="text-muted-foreground">Ground floor, Bhoomi Appartment, opposite Dr. Subhash University, Khamdhrol Road, Junagadh. 362001</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold">Email Us</h3>
                  <p className="text-muted-foreground">dreammakersdigital@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold">Call Us</h3>
                  <p className="text-muted-foreground">+91 81280 30737</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Clock className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold">Business Hours</h3>
                  <p className="text-muted-foreground">Monday - Friday: 9am - 5pm</p>
                  <p className="text-muted-foreground">Saturday - Sunday: Closed</p>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.218588509301!2d70.43577381541498!3d21.52843798572186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3958032d73397969%3A0x8c42955f69f4b16c!2sBhoomi%20Apartment!5e0!3m2!1sen!2sin!4v1683024844415!5m2!1sen!2sin"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg shadow-lg"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary/30">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-headline font-bold">Frequently Asked Questions</h2>
          </div>
          <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </>
  );
}
