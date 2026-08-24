import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/posts' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      date: z.coerce.date(),
      tag: z.string(),
      readingTime: z.string().optional(),
      // `from`/`to` drive the OG accent strip and stand in as the card cover
      // until `image` is supplied. Add `image` + `alt` and the card renders
      // the real art instead; nothing else has to change.
      cover: z
        .object({
          from: z.string(),
          to: z.string(),
          image: image().optional(),
          alt: z.string().optional(),
        })
        .default({ from: '#C0801C', to: '#6E4610' }),
      // Series membership. Drives the pip strip and the prev/next footer, so
      // the running order lives in frontmatter instead of hand-typed prose.
      series: z
        .object({
          name: z.string(),
          part: z.number().int().positive(),
          of: z.number().int().positive(),
        })
        .optional(),
      draft: z.boolean().default(false),
    }),
});

export const collections = { posts };
