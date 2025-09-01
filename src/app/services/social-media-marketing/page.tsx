import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Users, PenSquare, Share2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const keyFeatures = [
  'Social Media Strategy',
  'Content Creation & Curation',
  'Community Management',
  'Paid Social Advertising',
  'Influencer Marketing',
  'Performance Analytics',
];

export default function SocialMediaPage() {
  return (
    <>
      <section className="w-full pt-32 pb-16 md:pt-40 md:pb-24 bg-secondary/30">
        <div className="container px-4 md:px-6 text-center animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <h1 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl md:text-6xl">
            Social Media Marketing
          </h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl my-6">
            Building vibrant communities and telling your brand's story where your audience lives.
          </p>
        </div>
      </section>

      <section className="container px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-in fade-in slide-in-from-left-8 duration-1000">
            <h2 className="text-3xl font-headline font-bold mb-4">Connect, Engage, Convert</h2>
            <p className="text-muted-foreground mb-4">
              Social media is more than just posting updates. It's about building relationships and creating a community around your brand. Our social media marketing services are focused on creating authentic connections that translate into brand loyalty and business growth.
            </p>
            <p className="text-muted-foreground">
              We manage your social channels with a blend of creative content, strategic engagement, and data-backed advertising to ensure your message reaches the right people at the right time.
            </p>
          </div>
           <div className="animate-in fade-in slide-in-from-right-8 duration-1000">
            <Image
              src="https://picsum.photos/800/600?random=22"
              data-ai-hint="social media"
              alt="Social media concept"
              width={800}
              height={600}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      <section className="bg-secondary/30">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-headline font-bold">What's Included</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mt-2">Everything you need to build a powerful and engaging social media presence.</p>
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
            <h2 className="text-3xl font-headline font-bold">Our Approach</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mt-2">How we build and nurture your social community.</p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
            <Card>
                <CardContent className="p-6 text-center">
                    <Users className="w-10 h-10 mx-auto mb-4 text-accent" />
                    <h3 className="text-xl font-headline mb-2">Audience Analysis</h3>
                    <p className="text-muted-foreground text-sm">We dive deep into your target audience demographics, interests, and online behavior to inform our strategy.</p>
                </CardContent>
            </Card>
            <Card>
                <CardContent className="p-6 text-center">
                    <PenSquare className="w-10 h-10 mx-auto mb-4 text-accent" />
                    <h3 className="text-xl font-headline mb-2">Content Pillars</h3>
                    <p className="text-muted-foreground text-sm">We establish key content themes that align with your brand and resonate with your audience to ensure consistency.</p>
                </CardContent>
            </Card>
            <Card>
                <CardContent className="p-6 text-center">
                    <Share2 className="w-10 h-10 mx-auto mb-4 text-accent" />
                    <h3 className="text-xl font-headline mb-2">Engage & Grow</h3>
                    <p className="text-muted-foreground text-sm">We actively manage your community, foster conversations, and run targeted campaigns to grow your following.</p>
                </CardContent>
            </Card>
        </div>
      </section>
    </>
  );
}
