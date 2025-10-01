import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';

const caseStudies = [
  {
    title: 'E-commerce Sales Boost for Aura Cosmetics',
    category: 'Digital Marketing',
    description: 'Achieved a 150% increase in online sales and a 30% reduction in cost-per-acquisition through a targeted SEO and PPC campaign.',
    image: 'https://picsum.photos/600/400?random=31',
    dataAiHint: 'cosmetics product',
    link: '#',
  },
  {
    title: 'Brand Awareness for Tech Startup "Momentum"',
    category: 'Social Media Marketing',
    description: 'Grew social media following from 1k to 50k in three months with a viral content strategy, leading to a successful seed funding round.',
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
  {
    title: 'Local SEO Domination for "Citywide Plumbing"',
    category: 'Digital Marketing',
    description: 'Secured the #1 spot on Google Maps for 15+ high-value keywords, resulting in a 200% increase in qualified leads.',
    image: 'https://picsum.photos/600/400?random=34',
    dataAiHint: 'plumbing tools',
    link: '#',
  },
  {
    title: 'Community Building for "Gamer\'s Guild" App',
    category: 'Social Media Marketing',
    description: 'Built an engaged Discord community of 20,000+ members and drove a 50% increase in app downloads via social channels.',
    image: 'https://picsum.photos/600/400?random=35',
    dataAiHint: 'gaming setup',
    link: '#',
  },
  {
    title: 'Corporate Website for "Apex Financial"',
    category: 'Web Development',
    description: 'Developed a professional and secure corporate website with a custom CMS, improving content management workflow by 80%.',
    image: 'https://picsum.photos/600/400?random=36',
    dataAiHint: 'finance office',
    link: '#',
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      <section className="w-full pt-32 pb-16 md:pt-40 md:pb-24 bg-secondary/30">
        <div className="container px-4 md:px-6 text-center animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <h1 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl md:text-6xl">
            Our Success Stories
          </h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl my-6">
            Explore how we've helped businesses like yours achieve remarkable results.
          </p>
        </div>
      </section>

      <section className="container px-4 md:px-6">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <Card
              key={index}
              className="overflow-hidden group transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl flex flex-col"
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
                  Read Full Story
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-primary/10">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-3">
            <h2 className="text-3xl font-headline font-bold tracking-tighter md:text-4xl/tight">
              Ready to Be Our Next Success Story?
            </h2>
            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Let's talk about how we can help you achieve your business goals.
            </p>
          </div>
          <div className="mx-auto w-full max-w-sm space-y-4 py-4">
            <Button asChild size="lg">
              <Link href="/contact">Get a Free Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
