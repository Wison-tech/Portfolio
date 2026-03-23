const fs = require("fs");

// Configuración básica
const baseUrl = "https://azoth-dev.vercel.app";
const today = new Date().toISOString().split("T")[0];

// 1. Generar Contenido del Sitemap
const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${baseUrl}/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${baseUrl}/about</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${baseUrl}/contact</loc>
    <lastmod>${today}</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.5</priority>
  </url>
</urlset>`;

// 2. Generar Contenido del Robots.txt
const robotsContent = `User-agent: *
Allow: /

Sitemap: ${baseUrl}/sitemap.xml
`;

// 3. Escribir archivos en la carpeta public
try {
  // Escribir Sitemap
  fs.writeFileSync("public/sitemap.xml", sitemapContent);
  console.log("✅ sitemap.xml generado con éxito.");

  // Escribir Robots.txt
  fs.writeFileSync("public/robots.txt", robotsContent);
  console.log("✅ robots.txt generado con éxito.");
} catch (error) {
  console.error("❌ Error generando archivos de SEO:", error);
  process.exit(1);
}