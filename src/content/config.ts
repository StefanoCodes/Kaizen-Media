import { z } from "astro/zod";
import { defineCollection } from "astro:content";

const processCollection = defineCollection({
  type: "data",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      img: image(),
    }),
});

export const collections = {
  process: processCollection,
};
