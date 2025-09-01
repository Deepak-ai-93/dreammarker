import BlogIdeaGenerator from '@/components/blog/BlogIdeaGenerator';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';

const featuredPosts = [
  {
    title: 'The Ultimate Guide to SEO in 2024',
    description: 'Everything you need to know to rank higher on Google this year, from keyword research to technical SEO.',
    image: 'https://picsum.photos/600/400?random=41',
    dataAiHint: 'search engine',
    link: '#',
    date: 'July 15, 2024',
  },
  {
    title: '5 Social Media Trends Your Business Can\'t Ignore',
    description: 'Stay ahead of the curve with these emerging trends in social media marketing, from AI to short-form video.',
    image: 'https://picsum.photos/600/400?random=42',
    dataAiHint: 'social media',
    link: '#',
    date: 'July 10, 2024',
  },
    {
    title: 'Why Your Website Needs a Performance Audit (And How to Do It)',
    description: 'Learn how website speed and performance impact your bottom line and discover tools to analyze your site.',
    image: 'https://picsum.photos/600/400?random=43',
    dataAiHint: 'website speed',
    link: '#',
    date: 'July 5, 2024',
  },
];

export default function BlogPage() {
  return (
    <>
      <section className="w-full pt-32 pb-16 md:pt-40 md:pb-24 bg-secondary/30">
        <div className="container px-4 md:px-6 text-center animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <h1 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl md:text-6xl">
            The Digital Weaver Blog
          </h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl my-6">
            Insights, trends, and strategies from the world of digital marketing.
          </p>
        </div>
      </section>

      <section className="container px-4 md:px-6">
        <div className="grid md:grid-cols-5 gap-12">
          <div className="md:col-span-3">
            <h2 className="text-3xl font-headline font-bold mb-8">Featured Articles</h2>
            <div className="space-y-8">
              {featuredPosts.map((post, index) => (
                <Card key={index} className="overflow-hidden group transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
                  <div className="grid md:grid-cols-3">
                    <div className="md:col-span-1">
                      <Image
                        src={post.image}
                        data-ai-hint={post.dataAiHint}
                        alt={post.title}
                        width={600}
                        height={400}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <CardContent className="p-6">
                        <p className="text-sm text-muted-foreground mb-2">{post.date}</p>
                        <h3 className="text-xl font-headline font-bold mb-2">{post.title}</h3>
                        <p className="text-muted-foreground text-sm mb-4">
                          {post.description}
                        </p>
                        <Button variant="link" className="p-0 h-auto">Read More</Button>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
          <aside className="md:col-span-2">
            <div className="sticky top-24">
              <BlogIdeaGenerator />
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
