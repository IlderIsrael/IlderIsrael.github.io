---
title: Guía completa de funcionalidades
date: "2024-05-02"
excerpt: Aprende a usar imágenes, videos de YouTube y ecuaciones matemáticas en tus posts
image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&h=400&fit=crop"
tags: [tutorial, guia, matematicas]
---

# Guía completa de funcionalidades del blog

Esta guía te muestra todas las nuevas funcionalidades que puedes usar en tus posts del blog.

## Imágenes destacadas

Cada post puede tener una imagen destacada que se muestra en la parte superior del artículo. Simplemente agrega la propiedad `image` en el frontmatter:

```yaml
---
title: "Mi post"
image: "https://ejemplo.com/imagen.jpg"
---
```

## Videos de YouTube

Para insertar videos de YouTube, usa el componente `YouTubeVideo` con el ID del video:

```astro
<YouTubeVideo id="VIDEO_ID_AQUI" title="Título descriptivo" />
```

Ejemplo con un video educativo:

<YouTubeVideo id="kJQP7kiw5Fk" title="Introducción a las matemáticas" />

## Ecuaciones matemáticas

### Ecuaciones en bloque

Usa `$$` para ecuaciones centradas en su propia línea:

$$ \frac{d}{dx} \int_a^x f(t) dt = f(x) $$

$$ \sum_{n=1}^{\infty} \frac{1}{n^2} = \frac{\pi^2}{6} $$

### Ecuaciones en línea

Usa `$` para ecuaciones dentro del texto, como $a^2 + b^2 = c^2$ o $\lim_{x \to 0} \frac{\sin x}{x} = 1$.

### Matrices y sistemas

$$ \begin{pmatrix}
a & b \\
c & d
\end{pmatrix}
\begin{pmatrix}
x \\
y
\end{pmatrix} =
\begin{pmatrix}
ax + by \\
cx + dy
\end{pmatrix} $$

### Fracciones y sumatorias

$$ f(x) = \frac{1}{\sqrt{2\pi\sigma^2}} e^{-\frac{(x-\mu)^2}{2\sigma^2}} $$

$$ \int_{-\infty}^{\infty} e^{-x^2} dx = \sqrt{\pi} $$

## Sintaxis soportada

- **Fracciones**: `\frac{numerador}{denominador}`
- **Potencias**: `x^2` o `x^{n+1}`
- **Subíndices**: `x_1` o `x_{n+1}`
- **Sumatorias**: `\sum_{i=1}^{n}`
- **Integrales**: `\int_a^b`
- **Límites**: `\lim_{x \to 0}`
- **Matrices**: `\begin{pmatrix} ... \end{pmatrix}`
- **Griego**: `\alpha`, `\beta`, `\gamma`, `\pi`, `\sigma`

## Consejos para escribir ecuaciones

1. Usa entornos LaTeX estándar
2. Las ecuaciones en bloque se centran automáticamente
3. Las ecuaciones en línea fluyen con el texto
4. Puedes usar `\text{}` para texto normal dentro de ecuaciones

¡Experimenta con estas funcionalidades en tus próximos posts!