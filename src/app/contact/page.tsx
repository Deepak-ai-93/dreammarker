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
               <div>
                 <h3 className="font-semibold mb-2">Business Hours</h3>
                  <p className="text-muted-foreground">Monday - Friday: 9am - 5pm</p>
                  <p className="text-muted-foreground">Saturday - Sunday: Closed</p>
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
    </>
  );
}
