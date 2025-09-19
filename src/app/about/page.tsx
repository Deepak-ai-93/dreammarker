import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { Award, Target, Eye } from 'lucide-react';
import Image from 'next/image';

const values = [
  { icon: <Award className="w-8 h-8 text-primary" />, title: 'Excellence', description: 'We are committed to delivering the highest quality work and exceptional results for our clients.' },
  { icon: <Target className="w-8 h-8 text-primary" />, title: 'Innovation', description: 'We stay at the forefront of digital trends to provide creative and effective solutions.' },
  { icon: <Eye className="w-8 h-8 text-primary" />, title: 'Transparency', description: 'We believe in open communication and building trust through honest collaboration.' },
]

export default function AboutPage() {
  return (
    <>
      <section className="w-full pt-32 pb-16 md:pt-40 md:pb-24 bg-secondary/30">
        <div className="container px-4 md:px-6 text-center animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <h1 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl md:text-6xl">
            About DreamWeave Digital
          </h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl my-6">
            The creative minds behind the digital magic.
          </p>
        </div>
      </section>

      <section className="container px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-in fade-in slide-in-from-left-8 duration-1000">
            <h2 className="text-3xl font-headline font-bold mb-4">Our Mission & Vision</h2>
            <p className="text-muted-foreground mb-4">
              Our mission is to empower businesses of all sizes to thrive in the digital world. We believe that every brand has a unique story to tell, and our passion is to help them tell it in the most compelling way possible. We strive to be more than just a service provider; we aim to be a dedicated partner in our clients' success.
            </p>
            <p className="text-muted-foreground">
              Our vision is to be a leading digital agency recognized for our creativity, strategic approach, and unwavering commitment to client success. We envision a digital landscape where authentic connections between brands and their audiences drive sustainable growth and create lasting value.
            </p>
          </div>
          <div className="animate-in fade-in slide-in-from-right-8 duration-1000">
            <Image
              src="https://picsum.photos/800/600?random=10"
              data-ai-hint="team meeting"
              alt="Team collaborating"
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
            <h2 className="text-3xl font-headline font-bold">Our Core Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mt-2">The principles that guide our work and our relationships.</p>
          </div>
          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
                <Card key={index} className="text-center">
                    <CardContent className="p-8">
                        <div className="flex justify-center mb-4">{value.icon}</div>
                        <h3 className="text-xl font-headline font-bold mb-2">{value.title}</h3>
                        <p className="text-muted-foreground">{value.description}</p>
                    </CardContent>
                </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
