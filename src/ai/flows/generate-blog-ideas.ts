'use server';

/**
 * @fileOverview Blog post idea generator for content managers.
 *
 * - generateBlogIdeas - A function that generates blog post ideas based on a keyword or topic.
 * - GenerateBlogIdeasInput - The input type for the generateBlogIdeas function.
 * - GenerateBlogIdeasOutput - The return type for the generateBlogIdeas function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateBlogIdeasInputSchema = z.object({
  topic: z
    .string()
    .describe('The main keyword or topic for generating blog post ideas.'),
  numIdeas: z
    .number()
    .min(1)
    .max(10)
    .default(3)
    .describe('The number of blog post ideas to generate.'),
});
export type GenerateBlogIdeasInput = z.infer<typeof GenerateBlogIdeasInputSchema>;

const GenerateBlogIdeasOutputSchema = z.object({
  ideas: z.array(z.string()).describe('An array of blog post ideas.'),
});
export type GenerateBlogIdeasOutput = z.infer<typeof GenerateBlogIdeasOutputSchema>;

export async function generateBlogIdeas(input: GenerateBlogIdeasInput): Promise<GenerateBlogIdeasOutput> {
  return generateBlogIdeasFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateBlogIdeasPrompt',
  input: {schema: GenerateBlogIdeasInputSchema},
  output: {schema: GenerateBlogIdeasOutputSchema},
  prompt: `You are a blog post idea generator for a digital marketing company.

  Generate {{numIdeas}} blog post ideas based on the topic: {{{topic}}}. Return the result as a numbered list.
  `,
});

const generateBlogIdeasFlow = ai.defineFlow(
  {
    name: 'generateBlogIdeasFlow',
    inputSchema: GenerateBlogIdeasInputSchema,
    outputSchema: GenerateBlogIdeasOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
