import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { Code2, LineChart, Megaphone } from 'lucide-react';

const services = [
  {
    icon: <LineChart className="w-12 h-12 text-primary" />,
    title: 'Digital Marketing',
    description: 'Amplify your reach and drive growth with our comprehensive digital marketing strategies, including SEO, PPC, and content marketing.',
    link: '/services/digital-marketing',
  },
  {
    icon: <Megaphone className="w-12 h-12 text-primary" />,
    title: 'Social Media Marketing',
    description: 'Build a vibrant community and foster brand loyalty with engaging content and data-driven social media campaigns.',
    link: '/services/social-media-marketing',
  },
  {
    icon: <Code2 className="w-12 h-12 text-primary" />,
    title: 'Web Development',
    description: 'From elegant landing pages to complex e-commerce platforms, we build fast, responsive, and user-friendly websites.',
    link: '/services/web-development',
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="w-full pt-32 pb-16 md:pt-40 md:pb-24 bg-secondary/30">
        <div className="container px-4 md:px-6 text-center animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <h1 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl md:text-6xl">
            Our Services
          </h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl my-6">
            A complete suite of digital solutions to elevate your brand and
            achieve your business goals.
          </p>
        </div>
      </section>

      <section className="container px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-3">
          {services.map((service, index) => (
            <Card
              key={index}
              className="flex flex-col transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <CardHeader className="items-center text-center p-8">
                {service.icon}
                <CardTitle className="mt-4 font-headline text-2xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col justify-between text-center p-8 pt-0">
                <p className="text-muted-foreground mb-6">
                  {service.description}
                </p>
                <Button asChild variant="default">
                  <Link href={service.link}>Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-primary text-primary-foreground">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-3">
            <h2 className="text-3xl font-headline font-bold tracking-tighter md:text-4xl/tight">
              Have a Project in Mind?
            </h2>
            <p className="mx-auto max-w-[600px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We're ready to listen. Let's discuss how we can tailor our services to meet your unique needs.
            </p>
          </div>
          <div className="mx-auto w-full max-w-sm">
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">Request a Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
