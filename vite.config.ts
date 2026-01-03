import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['framer-motion'],
  },
  server: {
    host: '0.0.0.0', // Permet l'accès depuis le réseau local
    port: 4205, // Port personnalisé
    hmr: true,
  },
})

