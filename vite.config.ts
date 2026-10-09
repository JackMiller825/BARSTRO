import { copyFileSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

const root = path.dirname(fileURLToPath(import.meta.url))

function githubPagesSpaFallback() {
  return {
    name: 'github-pages-spa-fallback',
    apply: 'build' as const,
    closeBundle() {
      const indexPath = path.join(root, 'dist', 'index.html')
      copyFileSync(indexPath, path.join(root, 'dist', '404.html'))
    },
  }
}

export default defineConfig({
  base: '/',
  plugins: [react(), githubPagesSpaFallback()],
})
