# Gestión de Contenido (Content Collections)

Este proyecto utiliza **Astro Content Collections** para gestionar todo el contenido dinámico del sitio. El "cerebro" de esta gestión se encuentra en `src/content/config.ts`, que define las estructuras (schemas) que cada tipo de contenido debe seguir.

Todo el contenido se escribe en archivos Markdown (`.md`) dentro de carpetas específicas en `src/content/`.

## Colecciones Definidas

El proyecto tiene tres colecciones: `groups`, `news`, y `events`.

-----

### 1\. Agrupaciones (`groups`)

Esta colección representa a cada organización, agrupación o miembro que forma parte de la alianza.

  * **Ubicación:** `src/content/groups/`
  * **Schema (Campos Requeridos):**
      * `title` (string): El nombre oficial de la agrupación.
      * `logo` (string): Una URL *completa* y válida (ej. `https://.../logo.png`) que apunta al logo de la agrupación.
  * **Schema (Campos Opcionales):**
      * `website` (string): La URL del sitio web principal de la agrupación.
      * `socials` (objeto): Un objeto para redes sociales, donde la llave es el nombre de la red (ej. `instagram`) y el valor es la URL.

**Ejemplo de Markdown (`src/content/groups/open-source-uc.md`):**

```markdown
---
title: "Open Source UC"
logo: "https://osuc.dev/logo.png"
website: "https://osuc.dev"
socials:
  instagram: "https://instagram.com/osuc.dev"
  github: "https://github.com/open-source-uc"
---

Esta es la descripción de Open Source UC, que irá en el cuerpo del archivo Markdown.
Se utiliza para la vista de "detalle" de la agrupación.
```

-----

### 2\. Noticias (`news`)

Esta colección maneja las entradas del blog o artículos de noticias.

  * **Ubicación:** `src/content/news/`
  * **Schema (Campos Requeridos):**
      * `title` (string): El título del artículo.
      * `description` (string): Un resumen corto o descripción para vistas previas.
      * `pubDate` (date): La fecha de publicación (usar formato `YYYY-MM-DD`).
      * `author` (string): El nombre del autor.

**Ejemplo de Markdown (`src/content/news/lanzamiento-v1.md`):**

```markdown
---
title: "Lanzamiento de la Alianza"
description: "Hoy lanzamos la primera versión de nuestra plataforma."
pubDate: "2025-10-27"
author: "Equipo Alianza"
---

¡Hoy es el gran día! El cuerpo de la noticia va aquí.
Este contenido se renderizará en la página de detalle del post.
```

-----

### 3\. Eventos (`events`)

Esta colección se usa para listar eventos (futuros o pasados).

  * **Ubicación:** `src/content/events/`
  * **Schema (Campos Requeridos):**
      * `title` (string): El nombre del evento.
      * `date` (date): La fecha del evento (usar formato `YYYY-MM-DD`).
      * `place` (string): El lugar donde se realizará (físico o virtual).

**Ejemplo de Markdown (`src/content/events/charla-astro.md`):**

```markdown
---
title: "Charla Introductoria a Astro"
date: "2025-11-15"
place: "Auditorio San Agustín, Campus San Joaquín"
---

Descripción detallada del evento.
```