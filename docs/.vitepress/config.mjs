import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // https://vitepress.dev/reference/default-theme-config
  lang: 'pt-BR',
  base: "/movie-theaters-reviews/",
  title: "Movie Theaters Reviews",
  description: "The best movie theaters reviews in the world! 🍿🎬",
  head: [['link', { rel: 'icon', href: 'favicon.ico' }]],
  themeConfig: {
    siteTitle: "Movie Theaters Reviews",
    titleTemplate: ":title - Movie Theaters Reviews",

    logo: "favicon.ico",
    outlineTitle: 'Nesta página',

    nav: [
      // { text: 'Home', link: '/' },
      { text: 'Falação sobre os filmes', link: '/movies' },
      { text: 'Ranking e review dos cinemas', link: '/movie-theaters-list' },
    ],

    sidebar: [
      {
        text: 'Navegue',
        items: [
          { text: 'Filmes assistidos', link: '/movies' },
          { text: 'Ranking e Cinemas', link: '/movie-theaters-list' },
          { text: 'Galeria 🆕', link: '/gallery' },
          { text: 'Roteiro 🆕', link: '/map' },
          { text: 'Metas', link: '/goals' },
          { text: 'Sobre', link: '/about' },
        ]
      },
      {
        text: 'O projeto e eu',
        items: [
          { text: 'Dev. no GitHub', link: 'https://github.com/gabriersdev' },
          { text: 'Repositório', link: 'https://github.com/gabriersdev/movie-theaters-reviews' },
          { text: 'Letterboxd', link: 'https://letterboxd.com/gabriers/' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/gabriersdev/movie-theaters-reviews' },
      { icon: 'letterboxd', link: 'https://letterboxd.com/gabriers/' }
    ],

    footer: {
      message: 'Feito com ❤️ usando <a href="https://vitepress.dev" target="_blank" rel="noreferrer noopener">VitePress</a>',
      copyright: 'Copyright &copy; 2024 Gabriel Ribeiro'
    },

    editLink: {
      pattern: 'https://github.com/gabriersdev/movie-theaters-reviews/edit/master/docs/:path'
    },

    lastUpdated: {
      text: 'Modificado em',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'short'
      }
    },
  },
  
  build: {
    outDir: "./dist/",
    rollupOptions: {
      emptyOutDir: true,
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return id.split("/node_modules/").pop()?.split("/")[0];
          }
        }
      }
    }
  },
})
