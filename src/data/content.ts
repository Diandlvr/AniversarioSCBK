export const config = {
  names: {
    yours: "Juan",
    hers: "Amor",
  },
  anniversaryDate: "2023-08-15", // Fecha ficticia
  hero: {
    tagline: "Un año de",
    title: "nosotros.",
    subtitle: "De todo lo que somos juntos.",
    photoSrc: "/photos/hero.png",
    photoAlt: "Nuestra foto favorita",
  },
};

export const firstMoments = [
  {
    id: "primera-cita",
    label: "Primera cita",
    date: "Ago 15, 2023",
    caption: "El café que se enfrió mientras hablábamos sin parar.",
    photoSrc: "/photos/first-1.png",
    photoAlt: "Primera cita",
  },
  {
    id: "primer-beso",
    label: "Primer beso",
    date: "Sep 02, 2023",
    caption: "La risa nerviosa y el latido a mil por hora.",
    photoSrc: "/photos/first-2.png",
    photoAlt: "Primer beso",
  },
  {
    id: "primer-viaje",
    label: "Primer viaje",
    date: "Nov 12, 2023",
    caption: "'¿Te imaginas si nos perdemos?'. Valía la pena.",
    photoSrc: "/photos/first-3.png",
    photoAlt: "Primer viaje",
  },
];

/* ─── Photo Booth Strip ─── */
export const photoBoothStrip = [
  { src: "/photos/booth-1.png", alt: "Booth — riendo" },
  { src: "/photos/booth-2.png", alt: "Booth — caras chistosas" },
  { src: "/photos/booth-3.png", alt: "Booth — beso en la mejilla" },
  { src: "/photos/booth-4.png", alt: "Booth — abrazados" },
];

/* ─── Gallery Polaroids ─── */
export const galleryPolaroids = [
  {
    src: "/photos/gallery-1.png",
    alt: "Caminando juntos",
    caption: "Golden hour, always.",
    rotate: -3,
  },
  {
    src: "/photos/gallery-2.png",
    alt: "Café compartido",
    caption: "Our favorite corner.",
    rotate: 2,
  },
  {
    src: "/photos/gallery-3.png",
    alt: "Atardecer juntos",
    caption: "We stayed until the stars.",
    rotate: -1.5,
  },
];

/* ─── Monthly Photos ─── */
export const monthlyPhotos = [
  { id: "month-1",  month: "Junio",      year: 2025, caption: "Donde todo empezó",            photoSrc: "/photos/monthly/jun-2025.png" },
  { id: "month-2",  month: "Julio",      year: 2025, caption: "Descubriéndonos",              photoSrc: "/photos/monthly/jul-2025.png" },
  { id: "month-3",  month: "Agosto",     year: 2025, caption: "Verano contigo",               photoSrc: "/photos/monthly/ago-2025.png" },
  { id: "month-4",  month: "Septiembre", year: 2025, caption: "Rutinas compartidas",          photoSrc: "/photos/monthly/sep-2025.png" },
  { id: "month-5",  month: "Octubre",    year: 2025, caption: "Otoño juntos",                 photoSrc: "/photos/monthly/oct-2025.png" },
  { id: "month-6",  month: "Noviembre",  year: 2025, caption: "Más cerca que nunca",          photoSrc: "/photos/monthly/nov-2025.png" },
  { id: "month-7",  month: "Diciembre",  year: 2025, caption: "Nuestra primera Navidad",      photoSrc: "/photos/monthly/dic-2025.png" },
  { id: "month-8",  month: "Enero",      year: 2026, caption: "Año nuevo, mismo amor",        photoSrc: "/photos/monthly/ene-2026.png" },
  { id: "month-9",  month: "Febrero",    year: 2026, caption: "San Valentín",                 photoSrc: "/photos/monthly/feb-2026.png" },
  { id: "month-10", month: "Marzo",      year: 2026, caption: "Creciendo juntos",             photoSrc: "/photos/monthly/mar-2026.png" },
  { id: "month-11", month: "Abril",      year: 2026, caption: "Casi un año de nosotros",      photoSrc: "/photos/monthly/abr-2026.png" },
];

/* ─── Special Moments ─── */
export const specialMoments = [
  {
    id: "moment-1",
    date: "14 Jun 2025",
    title: "Nuestro Primer Día",
    description: "El día que todo cambió para siempre.",
    photoSrc: "/photos/moments/primer-dia.png",
  },
  {
    id: "moment-2",
    date: "—",  // Cambia esta fecha
    title: "Nuestro Primer Viaje",
    description: "Kilómetros juntos, recuerdos infinitos.",
    photoSrc: "/photos/moments/primer-viaje.png",
  },
  {
    id: "moment-3",
    date: "25 Dic 2025",
    title: "Navidad 2025",
    description: "Regalos, abrazos y chocolate caliente.",
    photoSrc: "/photos/moments/navidad.png",
  },
  {
    id: "moment-4",
    date: "31 Dic 2025",
    title: "Fin de Año",
    description: "Las campanadas y un beso a medianoche.",
    photoSrc: "/photos/moments/fin-de-ano.png",
  },
  {
    id: "moment-5",
    date: "14 Feb 2026",
    title: "San Valentín",
    description: "Nuestro primer 14 de febrero juntos.",
    photoSrc: "/photos/moments/san-valentin.png",
  },
  {
    id: "moment-6",
    date: "—",  // Cambia esta fecha
    title: "El Cumple de Jorge",
    description: "Un día especial para celebrarte.",
    photoSrc: "/photos/moments/cumple-jorge.png",
  },
  {
    id: "moment-7",
    date: "14 Jun 2026",
    title: "Un Año Juntos",
    description: "365 días de nosotros.",
    photoSrc: "/photos/moments/un-ano.png",
  },
];

/* ─── Tickets ─── */
export const tickets = [
  {
    id: "ticket-1",
    event: "Nuestro Primer Concierto",
    venue: "Auditorio Nacional",
    city: "Ciudad de México",
    date: "22 OCT 2023",
    time: "20:30",
    seat: "GA",
    serial: "SCR-2023-1015",
  },
  {
    id: "ticket-2",
    event: "Cine en la Azotea",
    venue: "Rooftop Cinema Club",
    city: "Polanco",
    date: "14 FEB 2024",
    time: "19:00",
    seat: "F12",
    serial: "SCR-2024-0214",
  },
];

/* ─── Important Places ─── */
export const importantPlaces = [
  {
    id: "place-1",
    label: "Primera cita",
    name: "Cafetería El Péndulo",
    coordinates: "19.4194° N, 99.1606° W",
    // To use Mapbox API in the future:
    // mapImage: `https://api.mapbox.com/styles/v1/mapbox/light-v11/static/[-99.1606,19.4194,15,0,0]/400x400@2x?access_token=${process.env.NEXT_PUBLIC_MAPBOX_TOKEN}`
  },
  {
    id: "place-2",
    label: "Primer beso",
    name: "Parque México",
    coordinates: "19.4116° N, 99.1685° W",
  },
  {
    id: "place-3",
    label: "Donde dijimos 'Te quiero'",
    name: "Mirador de la ciudad",
    coordinates: "19.4326° N, 99.1332° W",
  },
  {
    id: "place-4",
    label: "Lugar especial", // Cambia este label
    name: "Nuestro Lugar",   // Cambia este nombre
    coordinates: "—",        // Cambia estas coordenadas
  },
];

/* ─── Our Songs ─── */
export const ourSongs = [
  {
    id: "song-1",
    artist: "Beéle",
    title: "Solo Tú",
    lyricSnippet: "Solo tú...",
    audioFile: "/music/song1.m4a",
    coverSrc: "/photos/albums/solo-tu.jpg",
  },
  {
    id: "song-2",
    artist: "Mac Miller",
    title: "Congratulations",
    lyricSnippet: "You was there before the fancy cars and you was there when I was just a starving artist...",
    audioFile: "/music/song2.m4a",
    coverSrc: "/photos/albums/divine-feminine.jpg",
  },
  {
    id: "song-3",
    artist: "Frank Ocean",
    title: "Thinkin Bout You",
    lyricSnippet: "A tornado flew around my room before you came...",
    audioFile: "/music/song3.m4a",
    coverSrc: "/photos/albums/channel-orange.jpg",
  },
  {
    id: "song-4",
    artist: "Mac Miller",
    title: "Cinderella",
    lyricSnippet: "You was coughing when you hit my weed, but I've never seen you look so good...",
    audioFile: "/music/song4.m4a",
    coverSrc: "/photos/albums/cinderella-cover.jpg",
  },
  {
    id: "song-5",
    artist: "Álvaro Díaz",
    title: "Reina Pepiada",
    lyricSnippet: "Tú eres mi reina pepiada...",
    audioFile: "/music/song5.m4a",
    coverSrc: "/photos/albums/reina-pepiada.jpg",
  },
  {
    id: "song-6",
    artist: "3AM",
    title: "Alma",
    lyricSnippet: "Tú me robaste el alma...",
    audioFile: "/music/song6.m4a",
    coverSrc: "/photos/albums/alma-3am.jpg",
  },
  {
    id: "song-7",
    artist: "Bad Bunny",
    title: "Ojitos Lindos",
    lyricSnippet: "Yo no me dejo llevar de nadie, solo me dejo llevar de tu sonrisa...",
    audioFile: "/music/song7.m4a",
    coverSrc: "/photos/albums/ojitos-lindos.jpg",
  },
  {
    id: "song-8",
    artist: "Mac Miller",
    title: "Love Affair",
    lyricSnippet: "We could have a love affair...",
    audioFile: "/music/song8.m4a",
    coverSrc: "/photos/albums/love-affair.jpg",
  },
];

/* ─── Movies Watched ─── */
export const moviesWatched = [
  {
    id: "movie-1",
    title: "La La Land",
    review: "Lloramos al final. La banda sonora perfecta para nosotros.",
    // Placeholder for poster; using a generic placeholder via unsplash or similar, or local
    posterSrc: "/photos/movie-1.png",
  },
  {
    id: "movie-2",
    title: "Interstellar",
    review: "Me tomaste la mano durante la escena del hoyo negro.",
    posterSrc: "/photos/movie-2.png",
  },
  {
    id: "movie-3",
    title: "About Time",
    review: "Si pudiera viajar en el tiempo, volvería a nuestro primer café.",
    posterSrc: "/photos/movie-3.png",
  },
  {
    id: "movie-4",
    title: "Before Sunrise",
    review: "Hablar hasta el amanecer nunca tuvo tanto sentido.",
    posterSrc: "/photos/movie-4.png",
  },
  {
    id: "movie-5",
    title: "Spider-Man: Across the Spider-Verse",
    review: "Nuestro lado nerd. Tú eras Gwen, yo era un desastre.",
    posterSrc: "/photos/movie-5.png",
  },
  {
    id: "movie-6",
    title: "500 Days of Summer",
    review: "Nuestra historia es mejor que esta, definitivamente.",
    posterSrc: "/photos/movie-6.png",
  },
];

/* ─── Reasons I Love You ─── */
export const reasonsILoveYou = [
  { id: "reason-1", title: "Razón #1", note: "Por cómo me miras cuando crees que no me doy cuenta." },
  { id: "reason-2", title: "Razón #2", note: "Por tu risa, capaz de arreglar mi peor día." },
  { id: "reason-3", title: "Razón #3", note: "Porque me haces sentir en casa, no importa dónde estemos." },
  { id: "reason-4", title: "Razón #4", note: "Por agarrarme la mano cuando manejo." },
  { id: "reason-5", title: "Razón #5", note: "Por apoyarme en mis sueños más absurdos." },
  { id: "reason-6", title: "Razón #6", note: "Porque simplemente, existes." },
];

/* ─── Things You've Taught Me ─── */
export const thingsYouTaughtMe = [
  "A tener paciencia conmigo mismo.",
  "Que el amor verdadero no duele, sana.",
  "Cómo hacer un café decente por las mañanas.",
  "Que las mejores cosas toman tiempo."
];

/* ─── Love Note ─── */
export const loveNoteContent = {
  salutation: "Mi amor,",
  body: "Este año ha sido el más bonito de mi vida. He coleccionado cada mensaje, cada entrada de cine y cada primer momento porque no quiero olvidar nunca cómo empezó esto. Gracias por elegirme todos los días. Eres mi lugar favorito.",
  signOff: "Con todo mi corazón,",
  signature: "Juan"
};
