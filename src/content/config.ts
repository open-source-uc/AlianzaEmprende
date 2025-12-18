import { defineCollection, z } from "astro:content";  

const partners = defineCollection({
    schema: z.object({
        name: z.string(),
        logo: z.string().url(),
        website: z.string().url().optional(),
        socials: z.record(z.string()).optional()

    }),

});

const news = defineCollection({
    schema: z.object({
        title: z.string(), 
        description: z.string(),
        pubDate: z.date(),
        author: z.string(),
        imageUrl: z.string().optional(),

    }),
});

const events = defineCollection({
    schema: z.object({
        title: z.string(),
        date: z.date(),
        place: z.string()
    }),
});

//Exportando las colecciones
export const collections = {
    partners, 
    news,
    events
}