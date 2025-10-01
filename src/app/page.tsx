import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import {
  Code2,
  LineChart,
  Megaphone,
  BrainCircuit,
  ClipboardCheck,
  Rocket,
  Lightbulb,
  HeartHandshake,
  TrendingUp,
} from 'lucide-react';
import AnimatedHeroText from '@/components/home/AnimatedHeroText';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const services = [
  {
    icon: <LineChart className="w-10 h-10 text-primary" />,
    title: 'Digital Marketing',
    description: 'Elevate your online presence with data-driven strategies that deliver measurable results and drive growth.',
    link: '/services/digital-marketing',
  },
  {
    icon: <Megaphone className="w-10 h-10 text-primary" />,
    title: 'Social Media Marketing',
    description: 'Engage your audience and build brand loyalty through compelling content and targeted social campaigns.',
    link: '/services/social-media-marketing',
  },
  {
    icon: <Code2 className="w-10 h-10 text-primary" />,
    title: 'Web Development',
    description: 'Crafting beautiful, responsive, and high-performing websites that provide an exceptional user experience.',
    link: '/services/web-development',
  },
];

const whyChooseUs = [
    {
        icon: <Lightbulb className="w-10 h-10 text-primary" />,
        title: "Data-Driven Strategy",
        description: "We leverage analytics and insights to craft strategies that deliver real, measurable results for your business."
    },
    {
        icon: <HeartHandshake className="w-10 h-10 text-primary" />,
        title: "Collaborative Partnership",
        description: "We believe in working with you, not just for you. Your goals are our goals, and we're a dedicated partner in your success."
    },
    {
        icon: <TrendingUp className="w-10 h-10 text-primary" />,
        title: "Focus on Results",
        description: "Our primary objective is to drive tangible outcomes that contribute to your growth and return on investment."
    }
]

const howWeWork = [
  {
    icon: <BrainCircuit className="w-10 h-10 text-primary" />,
    title: "1. Discovery & Strategy",
    description: "We start by deeply understanding your business, audience, and goals to create a tailored strategy for success."
  },
  {
    icon: <ClipboardCheck className="w-10 h-10 text-primary" />,
    title: "2. Execution & Delivery",
    description: "Our team brings the strategy to life, executing with precision and keeping you informed every step of the way."
  },
  {
    icon: <Rocket className="w-10 h-10 text-primary" />,
    title: "3. Growth & Optimization",
    description: "We continuously analyze performance, optimize our approach, and identify new opportunities to drive sustainable growth."
  }
]

const featuredCaseStudies = [
  {
    title: 'E-commerce Sales Boost for Aura Cosmetics',
    category: 'Digital Marketing',
    description: 'Achieved a 150% increase in online sales through a targeted SEO and PPC campaign.',
    image: 'https://picsum.photos/600/400?random=31',
    dataAiHint: 'cosmetics product',
    link: '#',
  },
  {
    title: 'Brand Awareness for Tech Startup "Momentum"',
    category: 'Social Media Marketing',
    description: 'Grew social media following from 1k to 50k in three months with a viral content strategy.',
    image: 'https://picsum.photos/600/400?random=32',
    dataAiHint: 'tech startup',
    link: '#',
  },
  {
    title: 'Website Redesign for "FreshPlate" Meal Kits',
    category: 'Web Development',
    description: 'Launched a new, mobile-first website that decreased bounce rate by 40% and increased subscription sign-ups by 60%.',
    image: 'https://picsum.photos/600/400?random=33',
    dataAiHint: 'food delivery',
    link: '#',
  },
]

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <section className="relative w-full pt-24 md:pt-32 lg:pt-40 overflow-hidden">
        <div className="absolute top-0 left-0 -z-10 h-full w-full bg-white bg-[radial-gradient(100%_50%_at_50%_0%,rgba(132,109,248,0.1)_0%,rgba(255,255,255,0)_100%)] dark:bg-background dark:bg-[radial-gradient(100%_50%_at_50%_0%,rgba(132,109,248,0.15)_0%,rgba(255,255,255,0)_100%)]"></div>
        <div className="container px-4 md:px-6 text-center">
          <AnimatedHeroText />
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl my-8 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
            At Dreammakers digital, we combine creativity and technology to build
            unforgettable digital experiences that drive growth and connect you with
            your audience.
          </p>
          <div className="space-x-4 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-400">
            <Button asChild size="lg">
              <Link href="/contact">Get Started</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/services">Our Services</Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="services" className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center animate-in fade-in-0 slide-in-from-bottom-4 duration-1000">
          <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm font-medium">
            Our Services
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            What We Do Best
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            We offer a comprehensive suite of digital services designed to help
            your business thrive in the modern landscape.
          </p>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:max-w-none lg:grid-cols-3 mt-12">
          {services.map((service, index) => (
            <div key={index} className="animate-in fade-in-0 slide-in-from-bottom-4 duration-1000" style={{ animationDelay: `${200 * index}ms`}}>
              <Card
                className="transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl border-transparent hover:border-border h-full flex flex-col"
              >
                <CardHeader className="flex flex-col items-center text-center gap-4">
                  {service.icon}
                  <CardTitle className="text-2xl">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center flex flex-col flex-grow">
                  <p className="text-muted-foreground mb-4 flex-grow">
                    {service.description}
                  </p>
                  <Button variant="link" asChild>
                    <Link href={service.link}>Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </section>
      
      <section id="why-choose-us" className="bg-secondary">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center animate-in fade-in-0 slide-in-from-bottom-4 duration-1000">
            <div className="inline-block rounded-lg bg-background px-3 py-1 text-sm font-medium">
              Why Choose Us
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Your Partner in Growth
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We're more than just a digital agency. We're an extension of your team, dedicated to your success.
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:max-w-none lg:grid-cols-3 mt-12">
          {whyChooseUs.map((feature, index) => (
            <div key={index} className="animate-in fade-in-0 slide-in-from-bottom-4 duration-1000" style={{ animationDelay: `${200 * index}ms`}}>
                <Card
                className="transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl bg-background"
                >
                <CardHeader className="flex flex-col items-center text-center gap-4">
                    {feature.icon}
                    <CardTitle className="text-2xl">
                    {feature.title}
                    </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                    <p className="text-muted-foreground">
                    {feature.description}
                    </p>
                </CardContent>
                </Card>
            </div>
          ))}
        </div>
        </div>
      </section>

      <section id="how-we-work" className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center animate-in fade-in-0 slide-in-from-bottom-4 duration-1000">
          <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm font-medium">
            Our Process
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            How We Work
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            A streamlined and collaborative approach to delivering exceptional results.
          </p>
        </div>
        <div className="relative mt-16 max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-0">
            {howWeWork.map((step, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center p-4 animate-in fade-in-0 slide-in-from-bottom-8 duration-1000"
                style={{ animationDelay: `${200 * index}ms` }}
              >
                <div
                  className="relative flex h-24 w-24 items-center justify-center rounded-full bg-secondary text-primary shadow-md mb-4 transition-all duration-300 hover:scale-110"
                >
                  {step.icon}
                </div>
                <Card className="bg-card w-full -mt-12 pt-16 pb-6 px-6 shadow-lg hover:shadow-2xl transition-shadow duration-300">
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">
                    {step.description}
                  </p>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="case-studies" className="bg-secondary">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center animate-in fade-in-0 slide-in-from-bottom-4 duration-1000">
            <div className="inline-block rounded-lg bg-background px-3 py-1 text-sm font-medium">
              Our Work
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Featured Case Studies
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              A glimpse into the successful partnerships we've built with our clients.
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-1 md:gap-12 lg:max-w-none lg:grid-cols-3 mt-12">
            {featuredCaseStudies.map((study, index) => (
              <div key={index} className="animate-in fade-in-0 slide-in-from-bottom-4 duration-1000" style={{ animationDelay: `${200 * index}ms` }}>
                <Card
                  className="overflow-hidden group transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl flex flex-col h-full bg-background"
                >
                  <Image
                    src={study.image}
                    data-ai-hint={study.dataAiHint}
                    alt={study.title}
                    width={600}
                    height={400}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <CardContent className="p-6 flex flex-col flex-grow">
                    <p className="text-sm text-primary font-semibold mb-2">{study.category}</p>
                    <h3 className="text-xl font-headline font-bold mb-2 flex-grow">{study.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      {study.description}
                    </p>
                    <Button variant="link" className="p-0 h-auto self-start">
                      View Case Study
                    </Button>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline">
              <Link href="/case-studies">More Case Studies</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-background">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 animate-in fade-in-0 slide-in-from-bottom-4 duration-1000">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Ready to Weave Your Digital Success Story?
            </h2>
            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Let's connect. We're excited to learn about your goals and how we
              can help you achieve them.
            </p>
          </div>
          <div className="mx-auto w-full max-w-sm space-y-4 py-4">
            <Button asChild size="lg">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
