import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const workouts = defineCollection({
  loader: glob({
    pattern: '**/*.yaml',
    base: './src/content/workouts',
  }),
  schema: z.object({
    name: z.string(),
    idx: z.number().int().nullish(),
    phases: z.any().nullish(),
    payload: z.any().nullish(),
  }),
});

const combos = defineCollection({
  loader: glob({
    pattern: '**/*.yaml',
    base: './src/content/combos',
  }),
  schema: z.object({
    name: z.string(),
    payload: z.any(),
  }),
});

export const collections = { workouts, combos };
