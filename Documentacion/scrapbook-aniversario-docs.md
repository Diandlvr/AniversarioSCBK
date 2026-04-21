# Álbum de Aniversario — Documentación Completa

`Next.js 15 · TypeScript · CSS Modules · Vercel`

---

## Inicio rápido

```bash
unzip scrapbook-aniversario.zip
cd scrapbook-aniversario
npm install
npm run dev
```

Abre `http://localhost:3000` — verás la web completa con placeholders en cada zona de foto.

---

## Estructura de archivos

```
scrapbook-aniversario/
├── src/
│   ├── app/
│   │   ├── globals.css          # Sistema de diseño completo (tokens, reset, utilidades)
│   │   ├── layout.tsx           # Fuentes con next/font, metadata SEO
│   │   └── page.tsx             # Página principal — ensambla las 12 secciones
│   ├── components/
│   │   ├── Hero/                # Portada full-bleed con scroll indicator
│   │   ├── CalendarDate/        # Calendario CSS con día marcado
│   │   ├── FirstMoments/        # Grid asimétrico de primeras veces
│   │   ├── FavoriteMessages/    # Chat tipografiado sobre papel cuadriculado
│   │   ├── PhotoBooth/          # Tira de fotos + galería polaroids
│   │   ├── ImportantPlaces/     # Mapa Mapbox o coordenadas de fallback
│   │   ├── Tickets/             # Boletos con código de barras SVG
│   │   ├── OurSongs/            # Cards oscuras con link a Spotify
│   │   ├── MoviesWatched/       # Pósters con overlay al hover
│   │   ├── ReasonsILoveYou/     # Sobres flip 3D interactivos
│   │   ├── ThingsYouTaughtMe/   # Lista sobre fondo de cuaderno
│   │   ├── LoveNote/            # Carta con bordes irregulares
│   │   └── NavDots/             # Navegación lateral con Intersection Observer
│   ├── data/
│   │   └── content.ts           # ← TODO el contenido editable en un solo lugar
│   ├── hooks/
│   │   └── useInView.ts         # Intersection Observer hook reutilizable
│   └── lib/
│       └── utils.ts             # cn(), formatDate(), daysSince(), seededRandom()
├── public/
│   └── photos/                  # Coloca aquí tus imágenes reales
├── .env.local                   # Variables de entorno (Mapbox, Resend, URL)
├── next.config.mjs
├── tsconfig.json
└── package.json
```

---

## Personalizar el contenido

**Todo el contenido editable está en un solo archivo:** `src/data/content.ts`

### Nombres y fecha de aniversario

```ts
export const config = {
  names: {
    yours: "Tu Nombre",   // ← tu nombre
    hers:  "Su Nombre",   // ← su nombre
  },
  anniversaryDate: "2024-06-15",  // ← formato YYYY-MM-DD
  hero: {
    tagline:  "Un año de",
    title:    "nosotros.",
    subtitle: "De todo lo que somos juntos.",
    photoSrc: "/photos/hero.jpg",
    photoAlt: "Nosotros",
  },
};
```

### Primeros momentos

```ts
export const firstMoments = [
  {
    id:       "primera-cita",
    label:    "Primera cita",
    date:     "Jun 15, 2024",
    caption:  "El café que se enfría mientras hablan sin parar.",
    photoSrc: "/photos/primera-cita.jpg",
    photoAlt: "Primera cita",
  },
  // Agrega o elimina objetos según necesites
];
```

### Mensajes favoritos

```ts
export const favoriteMessages = [
  {
    id: "msg-1",
    conversation: [
      { sender: "her",  text: "Buenos días 🌅" },
      { sender: "you",  text: "Buenos días tú. ¿Dormiste bien?" },
      { sender: "her",  text: "Sí. Soñé algo bonito." },
      // sender: "her" = burbuja izquierda (arena)
      // sender: "you" = burbuja derecha  (blush)
    ],
  },
];
```

### Tickets y eventos

```ts
export const tickets = [
  {
    id:    "ticket-1",
    event: "Nombre del Concierto",
    venue: "Nombre del Venue",
    city:  "Ciudad",
    date:  "15 JUN 2024",
    seat:  "GA",
  },
];
```

### Canciones

```ts
export const ourSongs = [
  {
    id:         "song-1",
    title:      "Nombre de la canción",
    artist:     "Artista",
    note:       "La que sonó aquella noche.",
    spotifyUrl: "https://open.spotify.com/track/...",  // opcional
  },
];
```

### Razones

```ts
export const reasonsILoveYou = [
  "La forma en que ríes cuando algo te parece muy gracioso.",
  "Cómo me escuchas de verdad, no solo con los oídos.",
  // Agrega tantas como quieras — el grid se ajusta automáticamente
];
```

### Carta final

```ts
export const loveNote = {
  greeting:  "Para ti,",
  body: [
    "Un año no es poco...",
    "Gracias por todo lo que eres...",
    // Cada string es un párrafo separado
  ],
  closing:   "Con todo mi amor,",
  signature: "Tu Nombre",
};
```

---

## Agregar fotos reales

### 1. Coloca tus imágenes

```
public/photos/
  hero.jpg            ← foto principal del hero (mín. 1400×900px)
  primera-cita.jpg
  primer-cafe.jpg
  te-quiero.jpg
  booth-1.jpg         ← tira de fotos (×4)
  booth-2.jpg
  booth-3.jpg
  booth-4.jpg
  gallery-1.jpg       ← polaroids de galería
  gallery-2.jpg
  gallery-3.jpg
  movie-1.jpg         ← pósters de películas (opcional)
  movie-2.jpg
  movie-3.jpg
```

**Formatos recomendados:** JPG o WebP. El Hero funciona mejor en paisaje o cuadrado. El resto se recorta automáticamente con `object-fit: cover`.

### 2. Activar `next/image` en Hero

En `src/components/Hero/Hero.tsx`, reemplaza el bloque `<div className={s.placeholder}>` con:

```tsx
import Image from "next/image";

// Dentro del return, dentro de <div className={s.photoWrapper}>:
<Image
  src={config.hero.photoSrc}
  alt={config.hero.photoAlt}
  fill
  priority
  style={{ objectFit: "cover", objectPosition: "center top" }}
/>
```

### 3. Activar `next/image` en FirstMoments

En `src/components/FirstMoments/FirstMoments.tsx`:

```tsx
import Image from "next/image";

// Reemplaza <PhotoPlaceholder> dentro de <div className={s.photoBox}>:
<Image
  src={moment.photoSrc}
  alt={moment.photoAlt}
  fill
  style={{ objectFit: "cover" }}
/>
```

### 4. Activar `next/image` en PhotoBooth

En `src/components/PhotoBooth/PhotoBooth.tsx`:

```tsx
import Image from "next/image";

// En la tira, reemplaza <FramePlaceholder>:
<Image src={photo.src} alt={photo.alt} fill style={{ objectFit: "cover" }} />

// En los polaroids, igual:
<Image src={photo.src} alt={photo.alt} fill style={{ objectFit: "cover" }} />
```

### 5. Activar `next/image` en MoviesWatched

En `src/components/MoviesWatched/MoviesWatched.tsx`, dentro de `<div className={s.poster}>`:

```tsx
import Image from "next/image";

<Image
  src={movie.posterSrc}
  alt={movie.title}
  fill
  style={{ objectFit: "cover" }}
/>
```

---

## Variables de entorno

Edita `.env.local` con tus valores reales antes de hacer deploy:

```bash
# Mapbox — fragmentos de mapa en "Important Places"
# Token público en mapbox.com → Account → Tokens → Create a token
NEXT_PUBLIC_MAPBOX_TOKEN=pk.eyJ1IjoiXXXX...

# URL de producción — para el Open Graph image dinámico
NEXT_PUBLIC_SITE_URL=https://para-ella.vercel.app

# (Opcional) Email de notificación al publicar vía Resend
RESEND_API_KEY=re_XXXXXXXXXX
```

---

## Sistema de diseño

### Paleta de colores

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

### Tipografía

| Variable CSS | Fuente | Uso |
|---|---|---|
| `--font-display` | Playfair Display | Títulos de sección, hero |
| `--font-editorial` | EB Garamond | Cuerpo de texto, notas |
| `--font-script` | Cormorant Upright Italic | Citas, notas manuscritas |
| `--font-mono` | JetBrains Mono | Fechas, etiquetas, coords |

### Clases de utilidad (globals.css)

```css
.container      /* max-width: 1100px, centrado, padding lateral */
.section        /* padding-block: 5rem */
.text-display   /* font-family: Playfair Display */
.text-editorial /* font-family: EB Garamond */
.text-script    /* font-family: Cormorant, italic */
.text-mono      /* font-family: JetBrains Mono, uppercase, tracking */
.text-warm      /* color: --c-warm */
.text-blush     /* color: --c-blush */
.divider        /* línea decorativa blush de 60px */
.fade-up        /* animación de entrada (activar con .in-view) */
```

---

## Deploy en Vercel

```bash
# 1. Inicializar repositorio
git init
git add .
git commit -m "init: álbum de aniversario"

# 2. Subir a GitHub
git remote add origin https://github.com/tu-usuario/scrapbook-aniversario.git
git push -u origin main

# 3. En vercel.com
#    → New Project → Importar el repo
#    → Framework preset: Next.js (auto-detectado)
#    → Environment Variables → agregar MAPBOX_TOKEN y SITE_URL
#    → Deploy
```

Cada push a `main` hace deploy automático. Para dominio personalizado:
**Vercel → Settings → Domains** → sugerencia: `para-[su-nombre].vercel.app`

---

## Fases de implementación

| Fase | Contenido | Estado |
|---|---|---|
| **1** | Sistema de diseño: variables CSS, tipografías, utilidades | ✅ Completo |
| **2** | Hero + CalendarDate + FirstMoments | ✅ Completo |
| **3** | PhotoBooth + FavoriteMessages + Tickets | ✅ Completo |
| **4** | ImportantPlaces + OurSongs + MoviesWatched | ✅ Completo |
| **5** | ReasonsILoveYou + ThingsYouTaughtMe + LoveNote | ✅ Completo |
| **6** | NavDots, animaciones de entrada, `next/image` con fotos reales | Pendiente |
| **7** | API routes (OG image, email), deploy final en Vercel | Pendiente |

---

## Comandos útiles

```bash
npm run dev      # Servidor local en localhost:3000
npm run build    # Build de producción (detecta errores de tipos)
npm run lint     # ESLint
npm start        # Servir el build de producción
```

---

*Hecho con amor — Next.js 15 + Vercel*
