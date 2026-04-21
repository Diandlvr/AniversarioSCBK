# Álbum de Aniversario
### Arquitectura & Documento de Diseño
`v1.0 — Next.js 15 · TypeScript · Vercel`

---

## 1. Visión del Proyecto

Un álbum de aniversario digital con estética de editorial de lujo. Tipografía serif clásica, paleta de tierra y polvo de rosa, fotografías reales como protagonistas absolutas, y secciones que replican las páginas de un scrapbook físico — sin emojis, sin animaciones baratas, sin Comic Sans.

La web debe sentirse como abrir un libro de fotografía de autor: silenciosa, cálida, íntima. Cada sección es una "página" con su propia personalidad visual, unidas por un sistema de diseño coherente.

---

## 2. Sistema de Diseño

### 2.1 Paleta de Colores

| Variable | Valor | Uso |
|---|---|---|
| `--c-ink` | `#1A1A1A` | Texto principal, títulos |
| `--c-warm` | `#4A3728` | Acento cálido, subtítulos |
| `--c-blush` | `#C4877A` | Acento romántico, separadores |
| `--c-dusty` | `#B8867A` | Hover states, detalles |
| `--c-sand` | `#E8DDD5` | Fondos de tarjeta, secciones alternas |
| `--c-cream` | `#F5F0EB` | Fondo de página principal |
| `--c-paper` | `#FAF7F4` | Fondo de secciones suaves |
| `--c-rule` | `#D4C5BC` | Líneas divisoras, bordes sutiles |

### 2.2 Tipografía

| Rol | Fuente | Uso |
|---|---|---|
| Display | Playfair Display | Títulos de sección, hero |
| Editorial | EB Garamond | Cuerpo de texto, notas, párrafos |
| Handwriting | Cormorant Upright Italic | Citas, notas manuscritas simuladas |
| Mono | JetBrains Mono | Fechas, etiquetas, coordenadas |

### 2.3 Espaciado & Layout

- Sistema de 8px base
- Márgenes de sección: `5rem` vertical en desktop, `3rem` en móvil
- Ancho máximo de contenido: `1100px`
- Las fotografías pueden romper el grid y sangrar al borde (full-bleed) en momentos específicos para generar tensión visual
- Transiciones: solo `opacity + transform` con `ease-out` de `400ms`
- Sin scale, sin bounce, sin rotaciones en hover — elegancia = contención

---

## 3. Stack Técnico

| Capa | Tecnología | Razón |
|---|---|---|
| Framework | Next.js 15 (App Router) | SSG para rendimiento máximo |
| Lenguaje | TypeScript estricto | Tipado completo |
| Estilos | CSS Modules + variables globales | Sin Tailwind, control total |
| Animaciones | Framer Motion | Solo entrance animations, nada de loop |
| Fuentes | `next/font` (Google) | Playfair Display, EB Garamond, Cormorant |
| Imágenes | `next/image` | Optimización automática, lazy load, blur placeholder |
| Mapas | Mapbox Static API | Fragmentos de mapa para "Important Places" |
| Deploy | Vercel | CI/CD automático desde GitHub, edge network |
| Email | Resend API *(opcional)* | Notificación al publicar |

---

## 4. Estructura de Archivos

```
scrapbook-aniversario/
├── src/
│   ├── app/
│   │   ├── layout.tsx           # Root layout, fuentes, metadata
│   │   ├── page.tsx             # Página principal (SSG)
│   │   └── globals.css          # Variables CSS, reset, base
│   ├── components/
│   │   ├── Hero/                # Portada — nombre + fecha + foto grande
│   │   ├── CalendarDate/        # "The day it became official"
│   │   ├── FirstMoments/        # Primera cita, primer café, etc.
│   │   ├── FavoriteMessages/    # Chats tipografiados como prints
│   │   ├── PhotoBooth/          # Tira de polaroids + galería
│   │   ├── ImportantPlaces/     # Mapa + corazones con coordenadas
│   │   ├── Tickets/             # Entradas a eventos y planes
│   │   ├── OurSongs/            # Canciones que recuerdan a ella
│   │   ├── MoviesWatched/       # Películas vistas juntos
│   │   ├── ReasonsILoveYou/     # Sobres interactivos con razones
│   │   ├── ThingsYouTaughtMe/   # Lecciones que ella enseñó
│   │   ├── LoveNote/            # Carta final manuscrita
│   │   └── NavDots/             # Navegación lateral con puntos
│   ├── data/
│   │   └── content.ts           # ← Editar aquí todo el contenido
│   ├── hooks/
│   │   └── useInView.ts         # Intersection Observer hook
│   └── lib/
│       └── utils.ts             # cn(), formatDate(), etc.
├── public/
│   └── photos/                  # Coloca aquí tus imágenes reales
├── next.config.mjs
├── tsconfig.json
└── package.json
```

---

## 5. Secciones de la Web

### 01 · Hero — Portada
*La primera impresión. Fotografía a pantalla completa.*

- Foto full-bleed con overlay de gradiente sutil desde abajo
- Tipografía Display en blanco sobre la imagen
- Fecha en Mono con espaciado amplio
- Scroll indicator: una línea vertical pulsante, sin flechas

---

### 02 · The Day It Became Official — Calendario
*Recrea la página del calendario con el día marcado.*

- Calendario renderizado en CSS, solo el mes relevante
- El día especial tiene un círculo blush dibujado con SVG
- Frase manuscrita arriba y abajo en Cormorant Italic
- Fondo en color arena que simula papel kraft

---

### 03 · First Moments — Primeras veces
*Primera cita, primer café, primer "te quiero". Cards apiladas como fotos.*

- Grid asimétrico: 1 foto grande + 2 pequeñas
- Cada card con borde de papel y sombra de scrapbook real
- Texto en Garamond italic, fecha en Mono
- Sin cinta washi digital — bordes directos, líneas limpias

---

### 04 · Texts That Made Me Smile — Mensajes
*Conversaciones favoritas impresas como en el scrapbook real.*

- Burbujas de chat tipografiadas manualmente (sin screenshots)
- Fondo de papel cuadriculado sutil
- Título en letras recortadas estilo revista (Playfair mixto)
- Dos columnas con conversaciones alternadas

---

### 05 · Photo Booth — Tira de fotos
*Polaroids y tiras de photo booth reales.*

- Tira vertical con 4–6 fotos, opción escala de grises
- Marco blanco polaroid con caption en Garamond
- Galería expandible al click (lightbox minimalista)
- Fondo oscuro neutro para que las fotos resalten

---

### 06 · Important Places — Lugares
*Los lugares donde pasaron las cosas importantes.*

- Grid de 3 corazones con fragmento de mapa real (Mapbox Static API)
- Nombre del lugar en Playfair Display debajo
- Sub-etiquetas: "first kiss", "first date", "first I love you"
- Color de corazón: arena claro, trazo blush

---

### 07 · Tickets & Events — Entradas
*Tickets a conciertos, cines y planes juntos.*

- Tickets tipografiados en CSS con diseño de boleto real
- Código de barras decorativo generado en SVG
- Rotación leve (±3°) para efecto esparcido natural
- Fondo kraft con textura noise en SVG inline

---

### 08 · Music That Reminds Me of You — Canciones
*Las canciones que te recuerdan a ella.*

- Grid de tarjetas oscuras (`#1A1A1A`) con texto en blanco
- Nombre de artista en Mono, título en Playfair
- Fragmento evocador en Cormorant Italic (no letra completa)
- Link a Spotify integrado opcionalmente

---

### 09 · Movies We've Watched — Películas
*La cartelera de películas vistas juntos.*

- Grid de pósters (3 columnas) con título y nota personal
- Al hover: overlay con reseña breve en Garamond
- Elemento decorativo de palomitas en SVG tipográfico
- Sin imágenes de copyright — pósters propios o placeholders

---

### 10 · Reasons I Love You — Razones
*Sobres interactivos, cada uno con una razón escrita dentro.*

- Grid 4×3 de sobres en CSS puro
- Al hacer click: el sobre se abre y aparece la nota (Framer Motion)
- Cada nota en Cormorant Italic, como escrita a mano
- Título en letras recortadas de revista, colores variados

---

### 11 · Things You've Taught Me — Lecciones
*Las cosas que ella le ha enseñado sobre la vida.*

- Lista con tipografía grande, cada lección en su propia línea
- Alternancia de peso: regular / italic
- Flor decorativa SVG como elemento de fondo
- Fondo arena con líneas de cuaderno sutiles

---

### 12 · Love Note — Carta Final
*La carta de cierre. La más personal, la más simple.*

- Texto centrado en Cormorant Italic, tamaño generoso
- Firma en Playfair Display
- Hoja de papel con bordes irregulares (SVG clip-path)
- Fondo crema, sin ninguna distracción

---

## 6. Backend & API Routes

La web es mayoritariamente estática (SSG). Dos API routes opcionales:

### `GET /api/og`
Genera Open Graph image dinámica con `next/og`. Cuando alguien comparta el link verá una preview con los nombres y la fecha del aniversario.

### `POST /api/notify`
Envía un email a través de Resend cuando la web se despliega por primera vez. Requiere `RESEND_API_KEY` en las variables de entorno de Vercel.

---

## 7. Variables de Entorno

```bash
# .env.local
NEXT_PUBLIC_MAPBOX_TOKEN=   # Mapbox — fragmentos de mapa en "Important Places"
NEXT_PUBLIC_SITE_URL=       # URL de producción, para el OG image
RESEND_API_KEY=             # (Opcional) Email de notificación al publicar
```

---

## 8. Deploy en Vercel

```bash
# 1. Subir a GitHub
git init
git remote add origin [tu-repo]
git push -u origin main

# 2. En vercel.com
#    → New Project → Importar el repo
#    → Framework preset: Next.js (auto-detectado)
#    → Agregar variables de entorno
#    → Deploy

# Cada push a main hace deploy automático
```

Para dominio personalizado: **Vercel → Settings → Domains**
Sugerencia: `para-[su-nombre].vercel.app`

---

## 9. Orden de Implementación

| Fase | Contenido |
|---|---|
| **1** | Sistema de diseño: variables CSS, tipografías, componentes base |
| **2** | Hero + CalendarDate + FirstMoments — el núcleo emocional |
| **3** | PhotoBooth + FavoriteMessages + Tickets — contenido multimedia |
| **4** | ImportantPlaces + OurSongs + MoviesWatched — secciones temáticas |
| **5** | ReasonsILoveYou + ThingsYouTaughtMe + LoveNote — el cierre |
| **6** | NavDots, animaciones de entrada, optimización de imágenes |
| **7** | API routes (OG image, notificación), deploy final en Vercel |

---

*Álbum de Aniversario — Next.js 15 + Vercel — Hecho con amor*
