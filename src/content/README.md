# Guía para Agregar Contenido

Esta guía te ayudará a agregar y editar contenido en el sitio web de la Alianza Emprende. No necesitas saber programar, solo seguir estos ejemplos.

> **👨‍💻 ¿Eres desarrollador?** Si buscas información técnica sobre los schemas y la implementación, ve directamente a la [sección técnica al final de este documento](#-información-técnica-para-desarrolladores).

## ¿Cómo funciona?

El contenido del sitio se gestiona mediante archivos de texto que tienen:
1. **Una sección de información** (entre `---`) donde pones datos como título, fecha, etc.
2. **El contenido principal** donde escribes el texto que se mostrará en el sitio

Hay tres tipos de contenido que puedes crear:

-----

## 📁 1. Agrupaciones

Usa esto para agregar una nueva organización o agrupación a la alianza.

**¿Dónde crear el archivo?** → En la carpeta `src/content/groups/`  
**Nombre del archivo:** El nombre que quieras (sin espacios), por ejemplo: `mi-agrupacion.md`

### ¿Qué información necesitas?

- **title:** El nombre oficial de la agrupación
- **logo:** La dirección web (URL) del logo (debe empezar con `https://`)
- **website:** *(opcional)* La dirección del sitio web
- **socials:** *(opcional)* Links a redes sociales

### Ejemplo completo

Crea un archivo llamado `open-source-uc.md` con este contenido:

```markdown
---
title: "Open Source UC"
logo: "https://osuc.dev/logo.png"
website: "https://osuc.dev"
socials:
  instagram: "https://instagram.com/osuc.dev"
  github: "https://github.com/open-source-uc"
---

Esta es la descripción de Open Source UC.
Aquí puedes escribir todo lo que quieras sobre la agrupación.
Puedes usar **negritas**, *cursivas*, y más.
```

-----

## 📰 2. Noticias

Usa esto para publicar artículos o noticias sobre la alianza.

**¿Dónde crear el archivo?** → En la carpeta `src/content/news/`  
**Nombre del archivo:** El nombre que quieras (sin espacios), por ejemplo: `lanzamiento-sitio.md`

### ¿Qué información necesitas?

- **title:** El título de la noticia
- **description:** Un resumen corto (aparece en las vistas previas)
- **pubDate:** La fecha de publicación en formato `YYYY-MM-DD` (año-mes-día)
- **author:** El nombre de quien escribe

### Ejemplo completo

Crea un archivo llamado `lanzamiento-v1.md` con este contenido:

```markdown
---
title: "Lanzamiento de la Alianza"
description: "Hoy lanzamos la primera versión de nuestra plataforma."
pubDate: "2025-10-27"
author: "Equipo Alianza"
---

¡Hoy es el gran día! Aquí va el contenido completo de la noticia.

Puedes escribir varios párrafos, agregar enlaces, listas, etc.
```

-----

## 📅 3. Eventos

Usa esto para anunciar eventos próximos o documentar eventos pasados.

**¿Dónde crear el archivo?** → En la carpeta `src/content/events/`  
**Nombre del archivo:** El nombre que quieras (sin espacios), por ejemplo: `charla-innovacion.md`

### ¿Qué información necesitas?

- **title:** El nombre del evento
- **date:** La fecha del evento en formato `YYYY-MM-DD` (año-mes-día)
- **place:** El lugar donde se realizará (puede ser presencial o un link a Zoom)

### Ejemplo completo

Crea un archivo llamado `charla-astro.md` con este contenido:

```markdown
---
title: "Charla Introductoria a Astro"
date: "2025-11-15"
place: "Auditorio San Agustín, Campus San Joaquín"
---

En esta charla aprenderemos los conceptos básicos de Astro.

¡Todos están invitados! Inscripciones en el siguiente link: ...
```

-----

## 💡 Consejos útiles

- **Fechas:** Siempre usa el formato `YYYY-MM-DD` (ejemplo: `2025-10-27`)
- **URLs:** Deben ser completas y empezar con `https://`
- **Nombres de archivo:** Sin espacios, usa guiones: `mi-archivo.md` ✅, no `mi archivo.md` ❌
- **La sección entre `---`:** Respeta la indentación (espacios al inicio) especialmente en `socials`

-----

## 🔧 Información Técnica (Para Desarrolladores)

Este proyecto utiliza **Astro Content Collections**. La estructura (schema) de cada colección está definida en `src/content/config.ts`.

### Schemas Definidos:

**`groups` Collection:**
- `title` (string, requerido)
- `logo` (string URL, requerido)
- `website` (string URL, opcional)
- `socials` (record<string, string>, opcional)

**`news` Collection:**
- `title` (string, requerido)
- `description` (string, requerido)
- `pubDate` (date, requerido)
- `author` (string, requerido)

**`events` Collection:**
- `title` (string, requerido)
- `date` (date, requerido)
- `place` (string, requerido)

Si necesitas modificar los schemas o agregar nuevos campos, edita `src/content/config.ts`.