import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Award, Target, Eye, Linkedin } from 'lucide-react';
import Image from 'next/image';

const values = [
  { icon: <Award className="w-8 h-8 text-primary" />, title: 'Excellence', description: 'We are committed to delivering the highest quality work and exceptional results for our clients.' },
  { icon: <Target className="w-8 h-8 text-primary" />, title: 'Innovation', description: 'We stay at the forefront of digital trends to provide creative and effective solutions.' },
  { icon: <Eye className="w-8 h-8 text-primary" />, title: 'Transparency', description: 'We believe in open communication and building trust through honest collaboration.' },
]

const team = [
  { name: 'John Doe', role: 'CEO & Founder', image: 'https://picsum.photos/200/200?random=11', dataAiHint: 'male ceo' },
  { name: 'Jane Smith', role: 'Lead Digital Strategist', image: 'https://picsum.photos/200/200?random=12', dataAiHint: 'female professional' },
  { name: 'Michael Brown', role: 'Head of Web Development', image: 'https://picsum.photos/200/200?random=13', dataAiHint: 'male developer' },
  { name: 'Emily White', role: 'Social Media Manager', image: 'https://picsum.photos/200/200?random=14', dataAiHint: 'female social media' },
]

export default function AboutPage() {
  return (
    <>
      <section className="w-full pt-32 pb-16 md:pt-40 md:pb-24 bg-secondary/30">
        <div className="container px-4 md:px-6 text-center animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <h1 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl md:text-6xl">
            About Dreammakers digital
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
              src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMnx8bWFya2V0aW5nfGVufDB8fHx8MTc1ODIxNDU2MHww&ixlib=rb-4.1.0&q=80&w=1080"
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

      <section id="team" className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-headline font-bold">Meet the Team</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-2">The talented individuals powering your digital success.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member) => (
            <Card key={member.name} className="text-center overflow-hidden group">
              <div className="relative">
                <Image src={member.image} data-ai-hint={member.dataAiHint} alt={member.name} width={200} height={200} className="w-full h-auto aspect-square object-cover" />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <a href="#" className="text-white hover:text-primary"><Linkedin size={24} /></a>
                </div>
              </div>
              <CardHeader className="p-4">
                <CardTitle className="text-lg">{member.name}</CardTitle>
                <p className="text-sm text-primary">{member.role}</p>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}
