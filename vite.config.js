import { defineConfig } from 'vite';
import { resolve } from 'path';
import handlebars from 'vite-plugin-handlebars';

const pageData = {
  currentYear: new Date().getFullYear(),
  siteTitle: 'Correduría ALAS',
  activePage: 'acerca'
};

export default defineConfig({
  root: resolve(__dirname, 'src'),
  publicDir: resolve(__dirname, 'public'),
  
  plugins: [
    handlebars({
      partialDirectory: resolve(__dirname, 'src/partials'),
      context(pagePath) {
        return {
          ...pageData,
          activePage: pagePath.includes('acerca') ? 'acerca' : 
                     pagePath.includes('testimonios') ? 'testimonios' : 
                     pagePath.includes('contacto') ? 'contacto' : ''
        };
      },
      compileOptions: {
        preventIndent: true,
        strict: true
      }
    })
  ],

  server: {
    port: 5173,
    open: '/index.html',
    hmr: {
      overlay: false
    }
  },

  build: {
    outDir: resolve(__dirname, 'dist'),
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        acerca: resolve(__dirname, 'src/acerca.html'),
        testimonios: resolve(__dirname, 'src/testimonios.html'),
        contacto: resolve(__dirname, 'src/contacto.html')
      }
    }
  },

  css: {
    preprocessorOptions: {
      less: {
        math: 'always',
        globalVars: {
          primaryColor: '#2c3e50'
        }
      }
    }
  },

  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@modules': resolve(__dirname, 'src/modules'),
      '@less': resolve(__dirname, 'src/less'),
      '@images': resolve(__dirname, 'public/images'),
      '@js': resolve(__dirname, 'src/js')
    }
  }
});
