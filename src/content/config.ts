import { defineCollection, z } from "astro:content";  

//Creando las colecciones de la pagina
const groups = defineCollection({
    schema: z.object({
        title: z.string(),
        logo: z.string().url(),
        website: z.string().url(),
        socials: z.record(z.string())

    }),

});

const news = defineCollection({
    schema: z.object({
        title: z.string(), 
        description: z.string(),
        pubDate: z.date(),
        author: z.string()

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
    groups, 
    news,
    events
}