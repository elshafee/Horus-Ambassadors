import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  server: {
    port: 5173,
    host: true,
    open: false
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        gallery: resolve(__dirname, 'gallery.html'),
        events: resolve(__dirname, 'events.html'),
        eventDetails: resolve(__dirname, 'event-details.html'),
        achievement: resolve(__dirname, 'achievement.html')
      }
    }
  }
});
