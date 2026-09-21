import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const guides = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/guides' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    category: z.string(),
    relatedServiceSlug: z.string().optional(),
    faq: z.array(z.object({ q: z.string(), a: z.string() })).optional(),
  }),
});

const caseStudies = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/case-studies' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    clientSlug: z.string(),
    clientName: z.string(),
    sector: z.string(),
    standardTag: z.string(),
    relatedServiceSlug: z.string().optional(),
    snapshot: z.array(z.object({ label: z.string(), value: z.string() })).optional(),
  }),
});

export const collections = { guides, 'case-studies': caseStudies };
