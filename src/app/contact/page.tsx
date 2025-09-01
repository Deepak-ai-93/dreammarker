import ContactForm from '@/components/forms/ContactForm';
import { Mail, Phone, MapPin } from 'lucide-react';

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
                  <p className="text-muted-foreground">123 Digital Ave, Webville, ST 12345</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold">Email Us</h3>
                  <p className="text-muted-foreground">contact@dreamweave.digital</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold">Call Us</h3>
                  <p className="text-muted-foreground">(555) 123-4567</p>
                </div>
              </div>
               <div>
                 <h3 className="font-semibold mb-2">Business Hours</h3>
                  <p className="text-muted-foreground">Monday - Friday: 9am - 5pm</p>
                  <p className="text-muted-foreground">Saturday - Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
