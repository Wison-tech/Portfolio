import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Sitemap from 'vite-plugin-sitemap'

export default defineConfig({
  plugins: [
    react(),
    Sitemap({ 
      hostname: 'https://azoth-dev.vercel.app',
      dynamicRoutes: ['/about', '/contact'] // Añade tus rutas aquí
    }),
  ],
})