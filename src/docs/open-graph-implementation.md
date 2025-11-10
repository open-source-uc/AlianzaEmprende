# Generación Estática de Imágenes Open Graph (OG)

Este documento describe la implementación para la generación de imágenes OG estáticas en tiempo de compilación (`astro build`) para las noticias del proyecto de Astro.

## 📋 Descripción General

El sistema genera automáticamente una imagen `.png` única para cada noticia en la colección `news` durante el proceso de build. Estas imágenes se usan para mejorar la apariencia de los enlaces compartidos en redes sociales (Open Graph) y Twitter Cards.

## 🏗️ Arquitectura

### Tecnologías Utilizadas

- **Astro**: Framework principal con soporte para rutas dinámicas
- **Satori**: Biblioteca para convertir JSX/TSX en SVG
- **Sharp**: Procesador de imágenes para convertir SVG a PNG/JPEG
- **React**: Requerido por Satori para las plantillas

## 📁 Estructura de Archivos

```
src/
├── components/
│   └── OgTemplate.tsx              # Plantilla React para las imágenes OG
├── pages/
│   └── noticias/
│       ├── [slug].astro            # Página de detalle de noticias
│       └── og/
│           └── [slug].png.ts       # Endpoint que genera las imágenes OG
├── utils/
│   └── open-grap.ts                # Utilidades para generación de imágenes
└── content/
    └── news/
        └── *.md                    # Archivos markdown de noticias

public/
├── fonts/
│   └── InstrumentSans-Bold.woff    # Fuente en formato WOFF (requerido por Satori)
└── img/
    └── og-background.png           # Imagen de fondo para las OG images
```

## 🔧 Componentes Principales

### 1. Plantilla de Imagen (`src/components/OgTemplate.tsx`)

Componente React que define el diseño visual de la imagen OG.

**Características importantes:**
- ✅ Usa estilos inline (Satori no soporta clases CSS ni Tailwind)
- ✅ Dimensiones: 1200x630px (estándar Open Graph)
- ✅ Diseño: título grande centrado + texto "Alianza Emprende - Noticias" en la parte inferior

```tsx
export function OgTemplate({ text, backgroundUrl }: OgTemplateProps) {
  return (
    <div style={{ /* estilos inline */ }}>
      <img src={backgroundUrl} /> {/* Imagen de fondo */}
      <div>
        <div>{text}</div> {/* Título de la noticia */}
        <div>Alianza Emprende - Noticias</div>
      </div>
    </div>
  );
}
```

### 2. Endpoint de Generación (`src/pages/noticias/og/[slug].png.ts`)

Endpoint dinámico que genera las imágenes OG para cada noticia.

**Flujo:**
1. `getStaticPaths()` obtiene todas las noticias de la colección `news`
2. Por cada noticia, se genera una ruta `/noticias/og/{slug}.png`
3. En build time, se ejecuta `GET` para generar la imagen:
   - Lee la noticia por slug
   - Convierte la imagen de fondo a data URI (base64)
   - Renderiza el componente `OgTemplate` con Satori
   - Convierte SVG → JPEG con Sharp
   - Retorna la imagen como Response

```typescript
export const GET: APIRoute = async ({ params }) => {
  const { slug } = params;
  const allNews = await getCollection('news');
  const newsItem = allNews.find((item) => item.slug === slug);
  
  if (!newsItem) {
    return new Response('Not Found', { status: 404 });
  }

  const title = newsItem.data.title;
  const backgroundDataUri = await getBackgroundImageDataUri();

  return await generateOgImage(
    OgTemplate({ text: title, backgroundUrl: backgroundDataUri })
  );
};
```

### 3. Utilidades (`src/utils/open-grap.ts`)

Funciones auxiliares para la generación de imágenes.

**Funciones principales:**

#### `getCustomFonts()`
- Lee la fuente WOFF desde `public/fonts/InstrumentSans-Bold.woff`
- ⚠️ **Importante**: Satori NO soporta `.woff2`, solo `.ttf`, `.otf` o `.woff`
- Retorna el array de fuentes para Satori

#### `getBackgroundImageDataUri()`
- Lee la imagen de fondo desde `public/img/og-background.png`
- Convierte a data URI (base64)
- ⚠️ **Importante**: Satori requiere URLs absolutas o data URIs, no rutas relativas

#### `generateOgImage(content)`
- Recibe el componente React renderizado
- Usa Satori para convertir a SVG
- Usa Sharp para convertir SVG → JPEG
- Retorna `Response` con la imagen

### 4. Ejemplo de página de noticia (`src/pages/noticias/[slug].astro`)


```astro
---
const ogImageUrl = new URL(`/noticias/og/${noticia.slug}.png`, Astro.site).toString();
---

<Layout title={title}>
  <meta slot="head" property="og:title" content={title} />
  <meta slot="head" property="og:description" content={description} />
  <meta slot="head" property="og:image" content={ogImageUrl} />
  <meta slot="head" property="og:type" content="article" />
  
  <meta slot="head" name="twitter:card" content="summary_large_image" />
  <meta slot="head" name="twitter:title" content={title} />
  <meta slot="head" name="twitter:description" content={description} />
  <meta slot="head" name="twitter:image" content={ogImageUrl} />
  
  <!-- Contenido de la página -->
</Layout>
```

## ⚙️ Configuración

### `astro.config.mjs`

```javascript
export default defineConfig({
  site: 'https://alianzaemprende.pages.dev', // URL base del sitio (requerida)
  integrations: [react()]
});
```

**⚠️ Importante**: El campo `site` es obligatorio para generar URLs absolutas en las meta tags OG.

### `src/layouts/Layout.astro`

El layout debe incluir `<slot name="head" />` para permitir meta tags personalizadas:

```astro
<head>
  <meta charset="UTF-8" />
  <title>{title}</title>
  <slot name="head" /> <!-- Permite inyectar meta tags desde las páginas -->
</head>
```

## 🚀 Uso

### Crear una Nueva Noticia

1. Crea un archivo markdown en `src/content/news/`:

```markdown
---
title: "Mi Nueva Noticia"
description: "Descripción de la noticia"
pubDate: 2024-11-09T10:00:00Z
author: "Nombre del Autor"
---

Contenido de la noticia...
```

2. Ejecuta el build:

```bash
npm run build
```

3. Las imágenes OG se generarán automáticamente en:
   - `dist/noticias/og/mi-nueva-noticia.png`

4. La página de la noticia incluirá automáticamente las meta tags OG apuntando a la imagen generada.

## 🧪 Desarrollo

Durante desarrollo (`npm run dev`), las imágenes OG se generan bajo demanda cuando accedes a:
- `http://localhost:4321/noticias/og/{slug}.png`

Para verificar las meta tags, inspecciona el HTML de:
- `http://localhost:4321/noticias/{slug}`

## 📝 Notas Técnicas

### Limitaciones de Satori

1. **Fuentes**: Solo soporta `.ttf`, `.otf` o `.woff` NO `.woff2`
2. **Estilos**: Solo estilos inline, NO clases CSS, Tailwind, ni hojas de estilo externas
3. **Imágenes**: Requiere URLs absolutas o data URIs, NO rutas relativas
4. **Fuentes Variables**: Pueden causar errores, usar fuentes estáticas

### Optimización

- Las imágenes se generan en formato JPEG con calidad 60% (balance calidad/tamaño)
- Las fuentes se cargan una sola vez y se cachean durante el build
- La imagen de fondo se convierte a data URI para evitar requests adicionales

## 📚 Referencias

- [Astro Dynamic Routes](https://docs.astro.build/en/guides/routing/#dynamic-routes)
- [Satori Documentation](https://github.com/vercel/satori)
- [Open Graph Protocol](https://ogp.me/)
