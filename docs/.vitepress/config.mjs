import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/movie-theaters-reviews/",
  title: "Movie Theaters Reviews",
  description: "The best movie theaters reviews in the world! 🍿🎬",
  themeConfig: {
    siteTitle: "Movie Theaters Reviews",
    titleTemplate: ":title - Movie Theaters Reviews",

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      // { text: 'Home', link: '/' },
      { text: 'Avaliações', link: '/reviews' },
      { text: 'Cinemas', link: '/movie-theaters-list' },
      { text: 'Ranking', link: '/ranking' },
    ],

    sidebar: [
      {
        text: 'Navegue',
        items: [
          { text: 'Sobre', link: '/about' },
          { text: 'Avaliações', link: '/reviews' },
          { text: 'Cinemas', link: '/movie-theaters-list' },
          { text: 'Filmes', link: '/movies' },
          { text: 'Ranking', link: '/ranking' },
        ]
      },
      {
        text: 'Desenvolvimento',
        items: [
          { text: 'Dev. no GitHub', link: 'https://github.com/gabriersdev' },
          { text: 'Repositório', link: 'https://github.com/gabriersdev/movie-theaters-reviews' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/gabriersdev/movie-theaters-reviews' }
    ],

    footer: {
      message: 'Feito com ❤️ usando <a href="https://vitepress.dev" target="_blank" rel="noreferrer noopener">VitePress</a>',
      copyright: 'Copyright &copy; 2024 Gabriel Ribeiro'
    },

    editLink: {
      pattern: 'https://github.com/gabriersdev/movie-theaters-reviews/edit/main/docs/:path'
    },

    lastUpdated: {
      text: 'Modificado em',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'short'
      }
    }, 
  }
})
