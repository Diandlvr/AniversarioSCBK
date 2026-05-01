/** @type {import('next').NextConfig} */

// Determinamos si estamos corriendo en GitHub Actions
const isGithubActions = process.env.GITHUB_ACTIONS || false;

let assetPrefix = '';
let basePath = '';

if (isGithubActions) {
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '');
  assetPrefix = `/${repo}/`;
  basePath = `/${repo}`;
}

const nextConfig = {
  // Habilita la exportación estática necesaria para GitHub Pages
  output: 'export',
  
  // Configura las rutas base dinámicamente si está en GitHub Pages
  basePath: basePath,
  assetPrefix: assetPrefix,
  
  // Las imágenes en Next.js necesitan esto para funcionar en exportación estática
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
