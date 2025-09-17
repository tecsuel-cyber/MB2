import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Configuração corrigida para deploy no Vercel
export default defineConfig({
  plugins: [react()],
  base: './',
})
