import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Search, BarChart, FileText } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const keyFeatures = [
  'Search Engine Optimization (SEO)',
  'Pay-Per-Click (PPC) Advertising',
  'Content Marketing & Strategy',
  'Email Marketing Campaigns',
  'Conversion Rate Optimization (CRO)',
  'Analytics and Reporting',
];

export default function DigitalMarketingPage() {
  return (
    <>
      <section className="w-full pt-32 pb-16 md:pt-40 md:pb-24 bg-secondary/30">
        <div className="container px-4 md:px-6 text-center animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <h1 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl md:text-6xl">
            Digital Marketing
          </h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl my-6">
            Driving targeted traffic and measurable results through data-driven strategies.
          </p>
        </div>
      </section>

      <section className="container px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-in fade-in slide-in-from-left-8 duration-1000">
            <Image
              src="https://picsum.photos/800/600?random=21"
              data-ai-hint="digital marketing"
              alt="Digital marketing concept"
              width={800}
              height={600}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="animate-in fade-in slide-in-from-right-8 duration-1000">
            <h2 className="text-3xl font-headline font-bold mb-4">A Holistic Approach to Growth</h2>
            <p className="text-muted-foreground mb-4">
              Our digital marketing services are designed to increase your visibility, attract qualified leads, and turn them into loyal customers. We don't believe in a one-size-fits-all solution. Instead, we work closely with you to understand your business and craft a custom strategy that aligns with your goals.
            </p>
            <p className="text-muted-foreground">
              From optimizing your website for search engines to creating compelling ad campaigns, we manage every aspect of your digital presence to ensure maximum impact and return on investment.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-secondary/30">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-headline font-bold">What's Included</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mt-2">Our comprehensive digital marketing services cover all the essentials for online success.</p>
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
            <h2 className="text-3xl font-headline font-bold">Our Process</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mt-2">A proven methodology for delivering results.</p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
            <Card>
                <CardContent className="p-6 text-center">
                    <Search className="w-10 h-10 mx-auto mb-4 text-primary" />
                    <h3 className="text-xl font-headline mb-2">Discovery & SEO Audit</h3>
                    <p className="text-muted-foreground text-sm">We start by understanding your business and conducting a thorough audit of your online presence to identify opportunities.</p>
                </CardContent>
            </Card>
            <Card>
                <CardContent className="p-6 text-center">
                    <FileText className="w-10 h-10 mx-auto mb-4 text-primary" />
                    <h3 className="text-xl font-headline mb-2">Strategy & Content Plan</h3>
                    <p className="text-muted-foreground text-sm">Based on our findings, we develop a custom strategy and content plan designed to attract your target audience.</p>
                </CardContent>
            </Card>
            <Card>
                <CardContent className="p-6 text-center">
                    <BarChart className="w-10 h-10 mx-auto mb-4 text-primary" />
                    <h3 className="text-xl font-headline mb-2">Execution & Reporting</h3>
                    <p className="text-muted-foreground text-sm">We execute the plan, continuously monitor performance, and provide transparent reports on your campaign's progress.</p>
                </CardContent>
            </Card>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-3">
            <h2 className="text-3xl font-headline font-bold tracking-tighter md:text-4xl/tight">
              Ready to Boost Your Digital Presence?
            </h2>
            <p className="mx-auto max-w-[600px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Let's create a digital marketing strategy that drives real results for your business.
            </p>
          </div>
          <div className="mx-auto w-full max-w-sm">
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
