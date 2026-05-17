'use server';
/**
 * @fileOverview An AI agent that generates concise and engaging summaries for news articles.
 *
 * - summarizeNewsArticle - A function that handles the news article summarization process.
 * - NewsArticleInput - The input type for the summarizeNewsArticle function.
 * - NewsArticleSummaryOutput - The return type for the summarizeNewsArticle function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const NewsArticleInputSchema = z.object({
  title: z.string().describe('The title of the news article.'),
  content: z.string().describe('The full content of the news article.'),
});
export type NewsArticleInput = z.infer<typeof NewsArticleInputSchema>;

const NewsArticleSummaryOutputSchema = z.object({
  summary: z
    .string()
    .describe('A concise and engaging summary of the news article, no more than 3-4 sentences.'),
});
export type NewsArticleSummaryOutput = z.infer<typeof NewsArticleSummaryOutputSchema>;

export async function summarizeNewsArticle(input: NewsArticleInput): Promise<NewsArticleSummaryOutput> {
  return summarizeNewsArticleFlow(input);
}

const summarizeNewsArticlePrompt = ai.definePrompt({
  name: 'summarizeNewsArticlePrompt',
  input: {schema: NewsArticleInputSchema},
  output: {schema: NewsArticleSummaryOutputSchema},
  prompt: `You are an expert content manager tasked with creating concise and engaging summaries for news articles. Your goal is to capture the main points of the article in a way that entices readers to learn more. The summary should be no more than 3-4 sentences and highlight the most important information.

Article Title: {{{title}}}
Article Content: {{{content}}}`,
});

const summarizeNewsArticleFlow = ai.defineFlow(
  {
    name: 'summarizeNewsArticleFlow',
    inputSchema: NewsArticleInputSchema,
    outputSchema: NewsArticleSummaryOutputSchema,
  },
  async input => {
    const {output} = await summarizeNewsArticlePrompt(input);
    return output!;
  }
);
