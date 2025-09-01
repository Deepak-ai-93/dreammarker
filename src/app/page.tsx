import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Image from 'next/image';
import Link from 'next/link';
import {
  Code2,
  LineChart,
  Megaphone,
  Star,
  Quote,
} from 'lucide-react';

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

const testimonials = [
  {
    name: 'Sarah Johnson',
    company: 'Innovate Co.',
    avatar: 'https://picsum.photos/100/100?random=1',
    dataAiHint: 'person face',
    text: "DreamWeave Digital transformed our online presence. Their expertise in digital marketing led to a 200% increase in our organic traffic within just six months. We couldn't be happier!",
  },
  {
    name: 'Michael Chen',
    company: 'QuantumLeap Inc.',
    avatar: 'https://picsum.photos/100/100?random=2',
    dataAiHint: 'person face',
    text: 'The new website is a masterpiece. It\'s not only visually stunning but also incredibly fast and user-friendly. Our conversion rates have skyrocketed since the launch.',
  },
  {
    name: 'Emily Rodriguez',
    company: 'Artisan Goods',
    avatar: 'https://picsum.photos/100/100?random=3',
    dataAiHint: 'person face',
    text: 'Their social media team is phenomenal. They truly understand our brand voice and have grown our engagement by leaps and bounds. Highly recommended!',
  },
];

const caseStudies = [
  {
    title: 'E-commerce Sales Boost for Aura Cosmetics',
    description: 'Achieved a 150% increase in online sales through a targeted SEO and PPC campaign.',
    image: 'https://picsum.photos/600/400?random=4',
    dataAiHint: 'cosmetics product',
    link: '/case-studies',
  },
  {
    title: 'Brand Awareness for Tech Startup "Momentum"',
    description: 'Grew social media following from 1k to 50k in three months with viral content strategy.',
    image: 'https://picsum.photos/600/400?random=5',
    dataAiHint: 'tech startup',
    link: '/case-studies',
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <section className="w-full pt-20 md:pt-32 lg:pt-40 bg-secondary/30">
        <div className="container px-4 md:px-6 text-center">
          <h1 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl animate-in fade-in slide-in-from-bottom-8 duration-1000">
            Weaving Digital Dreams into Reality
          </h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl my-6 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-200">
            At DreamWeave Digital, we combine creativity and technology to build
            unforgettable digital experiences that drive growth and connect you with
            your audience.
          </p>
          <div className="space-x-4 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-400">
            <Button asChild size="lg">
              <Link href="/contact">Get Started</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/services">Our Services</Link>
            </Button>
          </div>
        </div>
        <div className="relative mt-12 h-40 overflow-hidden">
          <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-background to-transparent" />
        </div>
      </section>

      <section id="services" className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm">
            Our Services
          </div>
          <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-5xl">
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
              className="transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <CardHeader className="flex flex-col items-center text-center gap-4">
                {service.icon}
                <CardTitle className="font-headline text-2xl">
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

      <section id="testimonials" className="bg-secondary/30">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="inline-block rounded-lg bg-background px-3 py-1 text-sm">
              Testimonials
            </div>
            <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-5xl">
              From Our Happy Clients
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Don't just take our word for it. Here's what our clients have to
              say about their experience with DreamWeave Digital.
            </p>
          </div>
          <Carousel
            opts={{
              align: 'start',
            }}
            className="w-full max-w-4xl mx-auto mt-12"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem
                  key={index}
                  className="md:basis-1/2 lg:basis-1/2"
                >
                  <div className="p-1">
                    <Card className="h-full">
                      <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                        <Quote className="w-8 h-8 text-accent mb-4" />
                        <p className="text-muted-foreground mb-6 flex-grow">
                          "{testimonial.text}"
                        </p>
                        <div className="flex items-center gap-4">
                          <Avatar>
                            <AvatarImage src={testimonial.avatar} data-ai-hint={testimonial.dataAiHint} />
                            <AvatarFallback>
                              {testimonial.name.charAt(0)}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-semibold">{testimonial.name}</p>
                            <p className="text-sm text-muted-foreground">
                              {testimonial.company}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      <section id="case-studies" className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm">
            Our Work
          </div>
          <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-5xl">
            Success Stories
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            We're proud of the results we've achieved for our clients. Explore
            some of our recent case studies.
          </p>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 mt-12">
          {caseStudies.map((study, index) => (
            <Card
              key={index}
              className="overflow-hidden group transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <Image
                src={study.image}
                data-ai-hint={study.dataAiHint}
                alt={study.title}
                width={600}
                height={400}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <CardContent className="p-6">
                <h3 className="text-xl font-headline font-bold mb-2">
                  {study.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {study.description}
                </p>
                <Button variant="link" asChild>
                  <Link href={study.link}>View Case Study</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button asChild size="lg">
            <Link href="/case-studies">More Case Studies</Link>
          </Button>
        </div>
      </section>

      <section className="bg-accent/20">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-3">
            <h2 className="text-3xl font-headline font-bold tracking-tighter md:text-4xl/tight">
              Ready to Weave Your Digital Success Story?
            </h2>
            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Let's connect. We're excited to learn about your goals and how we
              can help you achieve them.
            </p>
          </div>
          <div className="mx-auto w-full max-w-sm space-x-2">
            <Button asChild size="lg">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
