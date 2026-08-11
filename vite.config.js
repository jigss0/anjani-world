import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base: './' makes the build work from any subfolder (e.g. GitHub Pages project sites)
export default defineConfig({
  plugins: [react()],
  base: './',
})
