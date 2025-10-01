import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Smartphone, Rocket, Palette } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const keyFeatures = [
  'Custom Website Design',
  'Responsive Development',
  'E-commerce Solutions',
  'Content Management Systems (CMS)',
  'Website Maintenance & Support',
  'Performance Optimization',
];

export default function WebDevelopmentPage() {
  return (
    <>
      <section className="w-full pt-32 pb-16 md:pt-40 md:pb-24 bg-secondary/30">
        <div className="container px-4 md:px-6 text-center animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <h1 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl md:text-6xl">
            Web Development
          </h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl my-6">
            Crafting digital experiences that are beautiful, functional, and built to perform.
          </p>
        </div>
      </section>

      <section className="container px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
           <div className="animate-in fade-in slide-in-from-left-8 duration-1000">
            <Image
              src="https://picsum.photos/800/600?random=23"
              data-ai-hint="web development"
              alt="Web development concept"
              width={800}
              height={600}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="animate-in fade-in slide-in-from-right-8 duration-1000">
            <h2 className="text-3xl font-headline font-bold mb-4">Your Vision, Built to Perfection</h2>
            <p className="text-muted-foreground mb-4">
              Your website is often the first impression you make on potential customers. We specialize in building websites that not only look stunning but also provide an intuitive user experience and drive conversions. Our development process is collaborative, transparent, and focused on delivering a final product that exceeds your expectations.
            </p>
            <p className="text-muted-foreground">
              We leverage the latest technologies and best practices to build websites that are secure, scalable, and optimized for speed, ensuring a seamless experience for your visitors on any device.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-secondary/30">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-headline font-bold">What's Included</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mt-2">A full-service approach to building and maintaining your online home.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {keyFeatures.map((feature) => (
              <div key={feature} className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="container px-4 md:px-6">
        <div className="text-center mb-12">
            <h2 className="text-3xl font-headline font-bold">Our Development Philosophy</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mt-2">The core tenants of every project we build.</p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
            <Card>
                <CardContent className="p-6 text-center">
                    <Palette className="w-10 h-10 mx-auto mb-4 text-primary" />
                    <h3 className="text-xl font-headline mb-2">Design First</h3>
                    <p className="text-muted-foreground text-sm">We begin with a user-centric design process, focusing on aesthetics and usability to create an engaging interface.</p>
                </CardContent>
            </Card>
            <Card>
                <CardContent className="p-6 text-center">
                    <Smartphone className="w-10 h-10 mx-auto mb-4 text-primary" />
                    <h3 className="text-xl font-headline mb-2">Mobile First</h3>
                    <p className="text-muted-foreground text-sm">All our websites are designed to be fully responsive, providing a flawless experience on desktops, tablets, and smartphones.</p>
                </CardContent>
            </Card>
            <Card>
                <CardContent className="p-6 text-center">
                    <Rocket className="w-10 h-10 mx-auto mb-4 text-primary" />
                    <h3 className="text-xl font-headline mb-2">Performance First</h3>
                    <p className="text-muted-foreground text-sm">We prioritize clean code and modern development practices to ensure your site is fast, secure, and ready to scale.</p>
                </CardContent>
            </Card>
        </div>
      </section>
      <section className="bg-primary text-primary-foreground">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-3">
            <h2 className="text-3xl font-headline font-bold tracking-tighter md:text-4xl/tight">
              Ready to Build Your New Website?
            </h2>
            <p className="mx-auto max-w-[600px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Let's discuss your project and how we can bring your vision to life.
            </p>
          </div>
          <div className="mx-auto w-full max-w-sm">
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">Request a Quote</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
