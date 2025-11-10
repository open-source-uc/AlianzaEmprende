// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
    site: 'https://alianzaemprende.pages.dev', // Cambia esto a tu URL real
    vite: {
        plugins: [tailwindcss()]
    },

    integrations: [react()]
});