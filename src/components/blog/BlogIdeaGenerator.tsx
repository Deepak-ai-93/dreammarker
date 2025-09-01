'use client';

import { useState } from 'react';
import { generateBlogIdeas } from '@/ai/flows/generate-blog-ideas';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Loader2, Wand2, Lightbulb } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function BlogIdeaGenerator() {
  const [topic, setTopic] = useState('');
  const [ideas, setIdeas] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!topic) {
      toast({
        title: 'Topic is required',
        description: 'Please enter a topic to generate ideas.',
        variant: 'destructive',
      });
      return;
    }
    setLoading(true);
    setIdeas([]);
    try {
      const result = await generateBlogIdeas({ topic, numIdeas: 3 });
      if (result && result.ideas) {
        setIdeas(result.ideas);
      } else {
         toast({
          title: 'Error',
          description: 'Could not generate ideas. Please try again.',
          variant: 'destructive',
        });
      }
    } catch (error) {
       toast({
        title: 'Error',
        description: 'An unexpected error occurred.',
        variant: 'destructive',
      });
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="bg-accent/20 border-accent">
      <CardHeader>
        <div className="flex items-center gap-2">
            <Wand2 className="w-6 h-6 text-primary" />
            <CardTitle className="font-headline text-2xl">Blog Idea Generator</CardTitle>
        </div>
        <CardDescription>
          Stuck on what to write? Enter a topic and let our AI generate some ideas for you.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            placeholder="e.g., 'small business SEO'"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            disabled={loading}
          />
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Generating...
              </>
            ) : (
              'Generate Ideas'
            )}
          </Button>
        </form>
        {(loading || ideas.length > 0) && (
          <div className="mt-6">
            <h4 className="font-semibold mb-2">Generated Ideas:</h4>
            {loading ? (
                <div className="space-y-2">
                    <div className="h-8 bg-muted/50 rounded animate-pulse" />
                    <div className="h-8 bg-muted/50 rounded animate-pulse w-5/6" />
                    <div className="h-8 bg-muted/50 rounded animate-pulse w-4/6" />
                </div>
            ) : (
                <ul className="space-y-2">
                {ideas.map((idea, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-foreground/80">
                        <Lightbulb className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                        <span>{idea}</span>
                    </li>
                ))}
                </ul>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
