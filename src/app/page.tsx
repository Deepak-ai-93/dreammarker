import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import {
  Code2,
  LineChart,
  Megaphone,
  BrainCircuit,
  Users,
  TrendingUp,
  ClipboardCheck,
  Rocket,
  Lightbulb,
  HeartHandshake,
} from 'lucide-react';
import AnimatedHeroText from '@/components/home/AnimatedHeroText';

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

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <section className="w-full pt-24 md:pt-32 lg:pt-40">
        <div className="container px-4 md:px-6 text-center">
          <AnimatedHeroText />
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl my-8 animate-in fade-in-2 slide-in-from-bottom-10 duration-1000 delay-200">
            At Dreammakers digital, we combine creativity and technology to build
            unforgettable digital experiences that drive growth and connect you with
            your audience.
          </p>
          <div className="space-x-4 animate-in fade-in-2 slide-in-from-bottom-12 duration-1000 delay-400">
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
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
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
            <Card
              key={index}
              className="transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl border-transparent hover:border-border"
            >
              <CardHeader className="flex flex-col items-center text-center gap-4">
                {service.icon}
                <CardTitle className="text-2xl">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-4">
                  {service.description}
                </p>
                <Button variant="link" asChild>
                  <Link href={service.link}>Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      
      <section id="why-choose-us" className="bg-secondary">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
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
            <Card
              key={index}
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
          ))}
        </div>
        </div>
      </section>

      <section id="how-we-work" className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
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
        <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:max-w-none lg:grid-cols-3 mt-12">
          {howWeWork.map((step, index) => (
            <Card
              key={index}
              className="transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl border-transparent hover:border-border"
            >
              <CardHeader className="flex flex-col items-center text-center gap-4">
                {step.icon}
                <CardTitle className="text-2xl">
                  {step.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="clients" className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
            Trusted by forward-thinking companies
          </h2>
        </div>
        <div className="divide-y divide-border rounded-xl border bg-card shadow-sm mt-8">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
                <div className="flex items-center justify-center p-6">
                    <svg className="h-10 text-muted-foreground" viewBox="0 0 100 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.45 32.228h-3.954L0 7.42h4.55l8.138 18.354h.183L21.008 7.42h4.55l-11.103 24.808zM41.737 32.228h-11.2V7.42h11.2v3.77H34.5v5.334h6.76v3.77h-6.76v8.134h7.237v3.8zM57.674 32.228h-4.55L42.27 7.42h4.55l8.137 18.354h.183L63.277 7.42h4.55l-10.153 24.808zM76.91 32.228h-11.2V7.42h11.2v3.77h-6.76v5.334h6.76v3.77h-6.76v8.134H76.91v3.8zM92.844 32.228h-4.55L77.44 7.42h4.55l8.138 18.354h.183L98.448 7.42h4.55L92.844 32.228z" fill="currentColor"/>
                    </svg>
                </div>
                <div className="flex items-center justify-center p-6">
                    <svg className="h-10 text-muted-foreground" viewBox="0 0 100 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                       <path d="M24.234 32.498c-3.15 0-5.85-1.04-8.1-3.12-2.25-2.08-3.375-4.76-3.375-8.04 0-3.28 1.125-6 3.375-8.12 2.25-2.12 4.95-3.18 8.1-3.18s5.85 1.06 8.1 3.18c2.25 2.12 3.375 4.84 3.375 8.12 0 3.28-1.125 5.96-3.375 8.04-2.25 2.08-4.95 3.12-8.1 3.12zm0-3.84c1.8 0 3.3-.6 4.5-1.8 1.2-1.2 1.8-2.8 1.8-4.8s-.6-3.6-1.8-4.8-2.7-1.8-4.5-1.8-3.3.6-4.5 1.8-1.8 2.8-1.8 4.8.6 3.6 1.8 4.8c1.2 1.2 2.7 1.8 4.5 1.8zM47.93 32.228h-4.2l-3.3-9.36h-3.15v9.36h-4.05V7.42h7.2c2.7 0 4.8.64 6.3 1.92 1.5 1.28 2.25 3.12 2.25 5.52 0 2.24-.6 3.96-1.8 5.16-1.2 1.2-2.85 1.8-4.95 1.8h-1.8l3.3 9.408zm-7.2-12.24h3c1.2 0 2.1-.32 2.7-.96.6-.64.9-1.52.9-2.64 0-1.12-.3-2.02-.9-2.7-.6-.68-1.5-1.02-2.7-1.02h-3v7.32zM69.04 32.228h-11.28V7.42h4.05v21.008H69.04v3.8zM80.09 32.228V7.42h4.05v24.808H80.09zM92.74 32.498c-3.15 0-5.85-1.04-8.1-3.12-2.25-2.08-3.375-4.76-3.375-8.04 0-3.28 1.125-6 3.375-8.12 2.25-2.12 4.95-3.18 8.1-3.18s5.85 1.06 8.1 3.18c2.25 2.12 3.375 4.84 3.375 8.12 0 3.28-1.125 5.96-3.375 8.04-2.25 2.08-4.95 3.12-8.1 3.12zm0-3.84c1.8 0 3.3-.6 4.5-1.8 1.2-1.2 1.8-2.8 1.8-4.8s-.6-3.6-1.8-4.8-2.7-1.8-4.5-1.8-3.3.6-4.5 1.8-1.8 2.8-1.8 4.8.6 3.6 1.8 4.8c1.2 1.2 2.7 1.8 4.5 1.8z" fill="currentColor"/>
                    </svg>
                </div>
                <div className="hidden md:flex items-center justify-center p-6">
                   <svg className="h-10 text-muted-foreground" viewBox="0 0 100 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.928 32.228L0 7.42h4.368l10.512 20.304L25.464 7.42h4.368L17.2 32.228h-4.272zM43.91 32.228h-4.368V7.42h4.368v24.808zM57.674 32.228h-4.55L42.27 7.42h4.55l8.137 18.354h.183L63.277 7.42h4.55l-10.153 24.808zM76.91 32.228h-11.2V7.42h11.2v3.77h-6.76v5.334h6.76v3.77h-6.76v8.134H76.91v3.8zM92.844 32.228h-4.55L77.44 7.42h4.55l8.138 18.354h.183L98.448 7.42h4.55L92.844 32.228z" fill="currentColor"/>
                    </svg>
                </div>
                <div className="hidden md:flex items-center justify-center p-6">
                    <svg className="h-10 text-muted-foreground" viewBox="0 0 100 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.123 32.228h-4.09V14.018h-6.6V10.2h17.29v3.818h-6.6v18.21zM24.234 32.498c-3.15 0-5.85-1.04-8.1-3.12-2.25-2.08-3.375-4.76-3.375-8.04 0-3.28 1.125-6 3.375-8.12 2.25-2.12 4.95-3.18 8.1-3.18s5.85 1.06 8.1 3.18c2.25 2.12 3.375 4.84 3.375 8.12 0 3.28-1.125 5.96-3.375 8.04-2.25 2.08-4.95 3.12-8.1 3.12zm0-3.84c1.8 0 3.3-.6 4.5-1.8 1.2-1.2 1.8-2.8 1.8-4.8s-.6-3.6-1.8-4.8-2.7-1.8-4.5-1.8-3.3.6-4.5 1.8-1.8 2.8-1.8 4.8.6 3.6 1.8 4.8c1.2 1.2 2.7 1.8 4.5 1.8zM47.93 32.228h-4.2l-3.3-9.36h-3.15v9.36h-4.05V7.42h7.2c2.7 0 4.8.64 6.3 1.92 1.5 1.28 2.25 3.12 2.25 5.52 0 2.24-.6 3.96-1.8 5.16-1.2 1.2-2.85 1.8-4.95 1.8h-1.8l3.3 9.408zm-7.2-12.24h3c1.2 0 2.1-.32 2.7-.96.6-.64.9-1.52.9-2.64 0-1.12-.3-2.02-.9-2.7-.6-.68-1.5-1.02-2.7-1.02h-3v7.32zM69.04 32.228h-11.28V7.42h4.05v21.008H69.04v3.8zM80.09 32.228V7.42h4.05v24.808H80.09z" fill="currentColor"/>
                    </svg>
                </div>
            </div>
        </div>
      </section>

      <section className="bg-secondary">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
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
