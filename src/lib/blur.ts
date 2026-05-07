const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"><rect fill="#E8DDD5" width="1" height="1"/></svg>`;

const toBase64 = (str: string): string =>
  typeof window === "undefined"
    ? Buffer.from(str).toString("base64")
    : window.btoa(str);

export const PHOTO_BLUR = `data:image/svg+xml;base64,${toBase64(svg)}`;
