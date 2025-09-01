'use server';
/**
 * @fileOverview A case study summarization AI agent.
 *
 * - summarizeCaseStudy - A function that summarizes a case study.
 * - SummarizeCaseStudyInput - The input type for the summarizeCaseStudy function.
 * - SummarizeCaseStudyOutput - The return type for the summarizeCaseStudy function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeCaseStudyInputSchema = z.object({
  caseStudyText: z.string().describe('The full text of the case study.'),
});
export type SummarizeCaseStudyInput = z.infer<typeof SummarizeCaseStudyInputSchema>;

const SummarizeCaseStudyOutputSchema = z.object({
  summary: z.string().describe('A concise summary of the case study.'),
});
export type SummarizeCaseStudyOutput = z.infer<typeof SummarizeCaseStudyOutputSchema>;

export async function summarizeCaseStudy(input: SummarizeCaseStudyInput): Promise<SummarizeCaseStudyOutput> {
  return summarizeCaseStudyFlow(input);
}

const prompt = ai.definePrompt({
  name: 'summarizeCaseStudyPrompt',
  input: {schema: SummarizeCaseStudyInputSchema},
  output: {schema: SummarizeCaseStudyOutputSchema},
  prompt: `You are an expert marketing director specializing in summarizing case studies into concise and compelling summaries.

  Summarize the following case study text into a short, engaging summary that highlights the key results and benefits for the client.

  Case Study Text: {{{caseStudyText}}}`,
});

const summarizeCaseStudyFlow = ai.defineFlow(
  {
    name: 'summarizeCaseStudyFlow',
    inputSchema: SummarizeCaseStudyInputSchema,
    outputSchema: SummarizeCaseStudyOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
